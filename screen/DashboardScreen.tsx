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
import { deleteVoterTable, logutUser, retrieveUserSession, storeVoterData } from '../utils';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBM } from '../redux/action/BMData';
import { getMasterData } from '../redux/action/MasterData';
import { getAllVoters } from '../redux/action/VoterData';
import { postRequest } from '../networkInterface';
import Snackbar from 'react-native-snackbar';
import LoaderWithData from '../components/LoaderWithData';

const DashboardScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState<any>(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [syncModalVisible, setSyncModalVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getUserSession();
  }, []);



  async function getUserSession() {
    try {
      setLoading(true)
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
        setLoading(false)
      }
    } catch (error) {
      // There was an error on the native side
    }
  }

  const getDashBoardData = async(user_id:any)=>{
    dispatch(await getAllBM({ leader_id: user_id }))
    dispatch(await getMasterData({leader_id: user_id }))
  }



  const handleLogout = async() =>{
    const session: any = await logutUser()
    if(session?.message=='success'){
      navigation.navigate('LoginScreen');
    }
  }

  const logOutModal = () => {
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

  const handleSyncData = async() => {
    try {
      setSyncModalVisible(!syncModalVisible)
      setLoading(true)
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
        navigation.navigate('UpdateScreen');
      }
    } catch (error) {
      // There was an error on the native side
    }
  }

  const syncModal = () => {
    return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={syncModalVisible}
          statusBarTranslucent={true}
          onRequestClose={() => {
            setSyncModalVisible(!syncModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Do you want to sync data?</Text>
              <View style={{display:'flex',flexDirection:'row',marginVertical:0,marginTop:'25%'}}>
              <View style={{flex:1,paddingRight:10}}>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setSyncModalVisible(!syncModalVisible)}>
                  <Text style={styles.textStyleCancel}>Cancel</Text>
                </Pressable> 
              </View>
              <View style={{flex:1}}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => handleSyncData()}>
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
              <View style={{flex: 4}}>
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
                      {userData?.f_name} {userData?.l_name}
                      {/* Praveen Kumar */}
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
                          {userData?.designation}
                          {/* Karyakarta */}
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
                <TouchableOpacity onPress={() => setSyncModalVisible(true)}>
                  <Icon name="refresh" color={'#FFFFFF'} size={22} />
                </TouchableOpacity>
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
            {userData?.user_type==1 && (
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
            )}
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
              style={{width: '100%', height: '100%',borderRadius:10}}
              source={require('../assets/images/background-placeholder.png')}
              resizeMode={'contain'}
            />
          )}
          </Card>
        </View>
      </View>
      {logOutModal()}
      {syncModal()}
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
    color:'#7a7a7a'
    // textAlign: 'center',
  },
});

export default DashboardScreen;
