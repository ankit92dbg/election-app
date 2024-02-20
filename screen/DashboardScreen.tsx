import * as React from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BASE_URL, IMAGE_BASE_URL} from '../config';
import { deleteVoterTable, logutUser, retrieveUserSession, retrieveVoterData, storeVoterData } from '../utils';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBM } from '../redux/action/BMData';
import { getAllVoters } from '../redux/action/VoterData';
import { postRequest } from '../networkInterface';
import Snackbar from 'react-native-snackbar';
import LoaderWithData from '../components/LoaderWithData';

const DashboardScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  // const {isLoading} = useSelector((state: any) => state?.VoterData);
  const [userData, setUserData] = React.useState<any>(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [nextPage, setNextPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [totalDownloadedPercent, setDownloadedPercent] = React.useState(0);

  React.useEffect(() => {
    getUserSession();
  }, []);

  React.useEffect(() => {
    let percentComplete  = Math.ceil(Number(((Number(currentPage) / Number(totalPage))*100).toFixed(2)))
    setDownloadedPercent(percentComplete)
    if(percentComplete==100){
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }
  },[currentPage])

  async function getUserSession() {
    try {
      const session: any = await retrieveUserSession();
      if (session !== undefined) {
        setUserData(session);
        let leader_id = ""
        if(session?.user_type==1){
          leader_id = session?.id
        }
        if(session?.user_type==2){
          leader_id = session?.leader_id
        }
        getDashBoardData(leader_id)
        deleteVoterTable()
        getVotersData(leader_id)
        // setLoading(false)
      }
    } catch (error) {
      // There was an error on the native side
    }
  }

  const getDashBoardData = async(user_id:any)=>{
    dispatch(await getAllBM({ leader_id: user_id }))
  }


  const getVotersData = async(leader_id:any,page=1)=>{
    const formData = new FormData();
    formData.append('leader_id', leader_id);
    formData.append('page', page);
      const response : any = await postRequest('voter-list.php',formData) 
    console.warn("response--->",response)
    if(response=='TypeError: Network request failed'){
      setTimeout(() => {
        setLoading(false);
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
            setCurrentPage(page+1)
            getVotersData(leader_id,page+1)
          }
        }
      }
  }


  const handleLogout = async() =>{
    const session: any = await logutUser()
    if(session?.message=='success'){
      navigation.navigate('LoginScreen');
    }
  }

  const cancelModal = () => {
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          statusBarTranslucent={true}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Are you sure you want to logout?</Text>
              <View style={{display:'flex',flexDirection:'row',marginVertical:0,marginTop:'25%'}}>
              <View style={{flex:1,paddingRight:10}}>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyleCancel}>Cancel</Text>
                </Pressable> 
              </View>
              <View style={{flex:1}}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => handleLogout()}>
                  <Text style={styles.textStyle}>Confirm</Text>
                </Pressable> 
              </View>
            </View>
            </View>
            
          </View>
        </Modal>
    );
  };

  return (
    <>
    <LoaderWithData loading={loading} text={"Loading Data..."} totalDownloadedPercent={totalDownloadedPercent} />
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 24,
                marginTop: 35,
              }}>
              <View style={{flex: 2}}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    { userData?.profile_image ?  (
                    <Image
                      style={{width: 55, height: 55, borderRadius: 55}} // required Dimensions and styling of Image
                      source={{uri: IMAGE_BASE_URL + userData?.profile_image}} // enter your avatar image path
                    />
                    ):(
                      <Image
                      style={{width: 55, height: 55}} // required Dimensions and styling of Image
                      source={require('../assets/images/user.png')} // enter your avatar image path
                    />
                    )}
                  </View>
                  <View style={{flex: 6, marginLeft: 20}}>
                    <Text style={styles.infoText}>
                      {/* {userData?.f_name} {userData?.l_name} */}
                      Praveen Kumar
                    </Text>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingLeft: 12,
                      }}>
                      <View style={{marginTop: 5}}>
                        <Icon name="briefcase" color={'#d4d2d2'} size={12} />
                      </View>
                      <View style={{marginTop: 3}}>
                        <Text style={styles.desgText}>
                          {/* {userData?.designation} */}
                          Karyakarta
                        </Text>
                      </View>
                    </View>
                    <View style={{paddingLeft: 10, marginTop: 5}}>
                      <Badge style={styles.part}>
                        <Text
                          style={{
                            fontSize: 12,
                            color: '#ffffff',
                            zIndex: 1111,
                            fontWeight: '600',
                          }}>
                          Assemble Name : {userData?.assembly_name
                            ? userData?.assembly_name
                            : 'Badarpur'}
                        </Text>
                      </Badge>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignContent: 'flex-end',
                  alignItems: 'flex-end',
                  paddingRight: 15,
                }}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Icon name="sign-out" color={'#FFFFFF'} size={22} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: 15,
                paddingRight: 15,
              }}>
              <View
                style={{
                  top: '13%',
                  flex: 1,
                }}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('VoterFilterScreen', {
                        routeFrom: 'Part A',
                        filterName: 'Search',
                      });
                    }}>
                    <Card style={styles.card}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/search.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Search
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </Animated.View>
              </View>
              <View
                style={{
                  top: '13%',
                  flex: 1,
                  width: '90%',
                  marginLeft: '3%',
                }}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PartAScreen')}>
                    <Card style={styles.card}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/part1.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Report 1
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </Animated.View>
              </View>
              <View
                style={{
                  top: '13%',
                  flex: 1,
                  marginLeft: '3%',
                  width: '90%',
                }}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PartBScreen')}>
                    <Card style={styles.card}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/part2.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Report 2
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: 15,
                paddingRight: 15,
                marginTop: 10,
              }}>
              <View
                style={{
                  top: '13%',
                  flex: 1,
                }}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CreateBM', {
                        category: '0',
                      });
                    }}>
                    <Card style={styles.card}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/zila.png')}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Zila/AC
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </Animated.View>
              </View>
              <View
                style={{
                  top: '13%',
                  flex: 1,
                  width: '90%',
                  marginLeft: '3%',
                }}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CreateBM', {
                        category: '1',
                      });
                    }}>
                    <Card style={styles.card}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/zone.png')}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Zone
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </Animated.View>
              </View>
              <View
                style={{
                  top: '13%',
                  flex: 1,
                  marginLeft: '3%',
                  width: '90%',
                }}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CreateBM', {
                        category: '2',
                      });
                    }}>
                    <Card style={styles.card}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/center.png')}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Center
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </Animated.View>
              </View>
              <View
                style={{
                  top: '13%',
                  flex: 1,
                  marginLeft: '3%',
                  width: '90%',
                }}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('CreateBM', {
                        category: '3',
                      });
                    }}>
                    <Card style={styles.card}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/booth.png')}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Booth
                      </Text>
                    </Card>
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{flex: 1, paddingLeft: 15, paddingRight: 15, marginTop: 20}}>
          <Card style={styles.imageCard}>
          {userData?.home_banner ? (
            <Image
              style={{width: '100%', height: '100%',borderRadius:10}} 
              source={{uri: IMAGE_BASE_URL + userData?.home_banner}}
              //resizeMode={'contain'}
            />
          ):(
            <Image
              style={{width: '100%'}}
              source={require('../assets/images/background-placeholder.png')}
              resizeMode={'contain'}
            />
          )}
          </Card>
        </View>
      </View>
      {cancelModal()}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DEDEDE',
  },
  innerContainer: {
    zIndex: 1,
    flexDirection: 'column',
  },
  parent: {
    height: '76%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    backgroundColor: '#288BC6',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 12,
  },
  desgText: {
    color: '#d4d2d2',
    fontSize: 12,
    fontWeight: '400',
    paddingLeft: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  card: {
    height: 120,
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    padding: 12,
  },
  imageCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    padding: 12,
    height:250,
  },
  part: {
    width: '100%',
    backgroundColor: '#de8100',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width:'70%',
    height:200,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#FFFFFF',
    borderWidth:1,
    borderColor:'#000000'
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleCancel: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize:16,
    fontWeight:'600',
    // textAlign: 'center',
  },
});

export default DashboardScreen;
