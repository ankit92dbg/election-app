import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { postRequest } from '../networkInterface';
import { deleteVoterTable, retrieveUnsyncData, retrieveUnsyncDataForUpdate, retrieveUserSession, storeUserSession, storeVoterData } from '../utils';
import * as Progress from 'react-native-progress';
import moment from 'moment';
import { getMasterData } from '../redux/action/MasterData';
import { useDispatch } from 'react-redux';
import { getAllBM } from '../redux/action/BMData';
import NetInfo from "@react-native-community/netinfo";

const UpdateScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const [totalPage, setTotalPage] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalDownloadedPercent, setDownloadedPercent] = React.useState(0);
  const [totalDownloadedPercentRead, setDownloadedPercentRead] = React.useState(0);
  const [infoText, setInfoText] = React.useState("");

  const getNetInfo = async() => {
    const connection = await NetInfo.fetch().then((state) => {
      return state.isConnected
    });
    return connection
  };


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
      fetchLocalData()
    });
    return unsubscribe;
  }, [navigation]);


  const fetchLocalData = async() =>{
    if(await getNetInfo()==false){
      navigation.navigate('Home')
      Snackbar.show({
        text: "Please check your internet connection",
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return
    }  
    const session: any = await retrieveUserSession();
    let leader_id = ""
      if (session !== undefined) {
        if(session?.user_type==1){
          leader_id = session?.id
        }
        if(session?.user_type==2){
          leader_id = session?.leader_id
        }
      }
      setInfoText('Getting local files ready to update the server,Please wait ...')
      dispatch(await getMasterData({leader_id: leader_id }))
      dispatch(await getAllBM({ leader_id: leader_id }))
    const unsyncData: any = await retrieveUnsyncData();
    if(unsyncData?.totalData=='0'){
      getUserSession()
    }else{
      const dataToUpdate: any = await retrieveUnsyncDataForUpdate();
      for(let i=0;i<dataToUpdate?.data?.length;i++){
        await handleSaveData(dataToUpdate?.data[i])
      }
      getUserSession() 
    }
  }



  const handleSaveData = async (data:any) => {
    const formData = new FormData();
    formData.append('voter_id', data?.id);
    formData.append('AC_NO', data?.AC_NO !=undefined ? data?.AC_NO : '');
    formData.append('PART_NO', data?.PART_NO !=undefined ? data?.PART_NO : '');
    formData.append('SECTION_NO', data?.SECTION_NO !=undefined ? data?.SECTION_NO : '');
    formData.append('SLNOINPART',data?.SLNOINPART !=undefined ? data?.SLNOINPART : '');
    formData.append('C_HOUSE_NO', data?.C_HOUSE_NO !=undefined ? data?.C_HOUSE_NO : '');
    formData.append('C_HOUSE_NO_V1', data?.C_HOUSE_NO_V1 !=undefined ? data?.C_HOUSE_NO_V1 : '');
    formData.append('FM_NAME_EN', data?.FM_NAME_EN !=undefined ? data?.FM_NAME_EN : '');
    formData.append('LASTNAME_EN', data?.LASTNAME_EN !=undefined ? data?.LASTNAME_EN : '');
    formData.append('FM_NAME_V1', data?.FM_NAME_V1 !=undefined ? data?.FM_NAME_V1 : '');
    formData.append('LASTNAME_V1', data?.LASTNAME_V1 !=undefined ? data?.LASTNAME_V1 : '');
    formData.append('RLN_TYPE', data?.RLN_TYPE !=undefined ? data?.RLN_TYPE : '');
    formData.append('RLN_FM_NM_EN', data?.RLN_FM_NM_EN !=undefined ? data?.RLN_FM_NM_EN : '');
    formData.append('RLN_L_NM_EN', data?.RLN_L_NM_EN !=undefined ? data?.RLN_L_NM_EN : '');
    formData.append('RLN_FM_NM_V1', data?.RLN_FM_NM_V1 !=undefined ? data?.RLN_FM_NM_V1 : '');
    formData.append('RLN_L_NM_V1', data?.RLN_L_NM_V1 !=undefined ? data?.RLN_L_NM_V1 : '');
    formData.append('EPIC_NO', data?.EPIC_NO !=undefined ? data?.EPIC_NO : '');
    formData.append('GENDER', data?.GENDER !=undefined ? data?.GENDER : '');
    formData.append('AGE', data?.AGE !=undefined ? data?.AGE : '');
    formData.append('DOB', data?.DOB !=undefined ? moment(data?.DOB).format('YYYY-MM-DD') : '');
    formData.append('MOBILE_NO', data?.MOBILE_NO !=undefined ? data?.MOBILE_NO : '');
    formData.append('AC_NAME_EN', data?.AC_NAME_EN !=undefined ? data?.AC_NAME_EN : '');
    formData.append('AC_NAME_V1', data?.AC_NAME_V1 !=undefined ? data?.AC_NAME_V1 : '');
    formData.append('SECTION_NAME_EN', data?.SECTION_NAME_EN !=undefined ? data?.SECTION_NAME_EN : '');
    formData.append('SECTION_NAME_V1', data?.SECTION_NAME_V1 !=undefined ? data?.SECTION_NAME_V1 : '');
    formData.append('PSBUILDING_NAME_EN', data?.PSBUILDING_NAME_EN !=undefined ? data?.PSBUILDING_NAME_EN : '');
    formData.append('PSBUILDING_NAME_V1', data?.PSBUILDING_NAME_V1 !=undefined ? data?.PSBUILDING_NAME_V1 : '');
    formData.append('PART_NAME_EN', data?.PART_NAME_EN !=undefined ? data?.PART_NAME_EN : '');
    formData.append('PART_NAME_V1', data?.PART_NAME_V1 !=undefined ? data?.PART_NAME_V1 : '');
    formData.append('aadhar', data?.aadhar !=undefined ? data?.aadhar : '');
    formData.append('RELATION_PART_NO', data?.RELATION_PART_NO !=undefined ? data?.RELATION_PART_NO : '');
    formData.append('RELATION_SLNOINPART', data?.RELATION_SLNOINPART !=undefined ? data?.RELATION_SLNOINPART : '');
    formData.append('caste', data?.caste !=undefined ? data?.caste : '');
    formData.append('isMarried', data?.isMarried !=undefined ? data?.isMarried : '');
    formData.append('voter_label', data?.voter_label !=undefined ? data?.voter_label : '');
    formData.append('political_party', data?.political_party !=undefined ? data?.political_party : '');
    formData.append('isDead', data?.isDead !=undefined ? data?.isDead :'');

    formData.append('education', data?.education !=undefined ? data?.education : '');
    formData.append('education_other', data?.education_other !=undefined ? data?.education_other : '');

    formData.append('profession', data?.profession !=undefined ? data?.profession : '');
    formData.append('profession_other', data?.profession_other !=undefined ? data?.profession_other : '');

    formData.append('homeShifted', data?.homeShifted !=undefined ? data?.homeShifted : '');
    formData.append('constituencyHomeShifted', data?.constituencyHomeShifted !=undefined ? data?.constituencyHomeShifted : '');
    formData.append('homeShiftedAddress', data?.homeShiftedAddress !=undefined ? data?.homeShiftedAddress : '');
    formData.append('home_shifted_country', data?.home_shifted_country !=undefined ? data?.home_shifted_country : '');
    formData.append('home_shifted_state', data?.home_shifted_state !=undefined ? data?.home_shifted_state : '');
    formData.append('home_shifted_city', data?.home_shifted_city !=undefined ? data?.home_shifted_city : '');
    formData.append('home_shifted_address', data?.home_shifted_address !=undefined ? data?.home_shifted_address : '');

    formData.append('outsideLocation', data?.outsideLocation !=undefined ? data?.outsideLocation : '');
    formData.append('constituencyOutside', data?.constituencyOutside !=undefined ? data?.constituencyOutside : '');
    formData.append(
      'outsideLocationAddress',
      data?.outsideLocationAddress !=undefined ? data?.outsideLocationAddress : '',
    );
    formData.append('outside_location_country', data?.outside_location_country !=undefined ? data?.outside_location_country : '');
    formData.append('outside_location_state', data?.outside_location_state !=undefined ? data?.outside_location_state : '');
    formData.append('outside_location_city', data?.outside_location_city !=undefined ? data?.outside_location_city : '');
    formData.append('outside_location_address', data?.outside_location_address !=undefined ? data?.outside_location_address : '');

    formData.append('labharthi_center', data?.labharthi_center !=undefined ? data?.labharthi_center : '');
    formData.append('labharthi_state', data?.labharthi_state !=undefined ? data?.labharthi_state : '');
    formData.append('labharthi_candidate', data?.labharthi_candidate !=undefined ? data?.labharthi_candidate : '');

    formData.append('APPROACH_QTY',data?.approach_time !=undefined ? data?.approach_time : '');
    formData.append('APPROACH_REASON',data?.approach_reason !=undefined ? data?.approach_reason : '');
    formData.append('CANDIDATE_NAME',data?.candidate_name !=undefined ? data?.candidate_name : '');
    if (data?.profile_image != '' && data?.profile_image != 'null' && data?.profile_image != undefined) {
      formData.append('profile_image', {
        uri: data?.profile_image,
        type: 'image/jpg',
        name: 'image.jpg',
      });
    }
    const response: any = await postRequest('update-voters.php', formData);
    if (response?.error != '') {
      setTimeout(() => {
        Snackbar.show({
          text: "Network request failed",
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#e33443',
        });
        navigation.navigate('Home')
      }, 1000);
    }
  };


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
            setInfoText('Data sync in Progress. Please wait ...')
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
            <Text style={{color:'#000',fontSize:14,fontWeight:'400',padding:10}}>{infoText}</Text>
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


