import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import Snackbar from 'react-native-snackbar';
import Loader from '../components/Loader';
import { postRequest } from '../networkInterface';
import { deleteVoterTable, retrieveUserSession, storeUserSession, storeVoterData } from '../utils';
import * as Progress from 'react-native-progress';

const UpdateScreen = ({navigation}: {navigation: any}) => {
  const [totalPage, setTotalPage] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalDownloadedPercent, setDownloadedPercent] = React.useState(0);
  const [totalDownloadedPercentRead, setDownloadedPercentRead] = React.useState(0);

  React.useEffect(() => {
    let percentComplete  = Math.ceil(Number(((Number(currentPage) / Number(totalPage))*100).toFixed(2)))
    let percentbar  = Math.ceil(Number(((Number(currentPage) / Number(totalPage))*100).toFixed(2)))
    setDownloadedPercent(percentbar/100)
    if(percentComplete<=100){
        setDownloadedPercentRead(percentComplete)
    }
    if(percentComplete==100){
      setTimeout(() => {
        setDownloadedPercentRead(0)
        setDownloadedPercent(0)
        navigation.navigate('Home')
      }, 1000);
    }
  },[currentPage])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
        console.warn('lllgetUserSession')
        getUserSession();
    });
    return unsubscribe;
  }, [navigation]);


    const getVotersData = async(leader_id:any,page=1)=>{
        const formData = new FormData();
        formData.append('leader_id', leader_id);
        formData.append('page', page);
        const response : any = await postRequest('voter-list.php',formData) 
        if(response=='TypeError: Network request failed'){
          setTimeout(() => {
            Snackbar.show({
              text: "Network request failed",
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: '#e33443',
            });
          }, 1000);
          return false
        }
          setTotalPage(response?.total_page)
          if(response?.message=='success'){
            const storeResp = await storeVoterData(response)
            if(storeResp?.message =='success'){
              
              if(Number(page)<=Number(response?.total_page)){
                setCurrentPage(Number(page)+1+1)
                getVotersData(leader_id,Number(page)+1+1)
              }
            }
          }
      }

      async function getUserSession() {
        try {
          const session: any = await retrieveUserSession();
          if (session !== undefined) {
            let leader_id = ""
            if(session?.user_type==1){
              leader_id = session?.id
            }
            if(session?.user_type==2){
              leader_id = session?.leader_id
            }
            deleteVoterTable()
            getVotersData(leader_id)
          }
        } catch (error) {
          // There was an error on the native side
        }
      }


  return (
    <View style={styles.mainContainer}>
        <View style={styles.loading}>
            <Progress.Bar progress={totalDownloadedPercent} width={300} />
            <Text style={{color:'#000',fontSize:14,fontWeight:'400',padding:10}}>{totalDownloadedPercentRead}%</Text>
            <Text style={{color:'#000',fontSize:14,fontWeight:'400',padding:10}}>Data sync in Progress. Please wait ...</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
    opacity:0.7,
    zIndex:999999,
  },
});

export default UpdateScreen;
