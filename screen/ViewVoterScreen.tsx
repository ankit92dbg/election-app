import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import Card from '../components/Card';
import Badge from '../components/Badge';
import HyperLink from '../components/HyperLink';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatListItem from '../components/FlatListItem';
import {useState} from 'react';

const ViewVoterScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const DEVICE_HEIGHT = Dimensions.get('window').height


  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.parent}>
          <View style={styles.child}>
          </View>
        </View>
      </View>
      <View
        style={{
          top: '13%',
          width: '100%',
          height: 580,
          //   maxHeight: 700,
          position: 'absolute',
          zIndex: 9999,
          paddingLeft: 15,
          paddingRight: 15,
          flex: 1,
          //   backgroundColor: '#DEDEDE',
        }}>
        <ScrollView>
          <>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <FlatListItem style={styles.card}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <View style={{flex: 4}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <View style={{flex: 2}}>
                            <Badge style={styles.part}>
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: '#ffffff',
                                  zIndex: 1111,
                                  fontWeight: '600',
                                }}>
                                Part : 02
                              </Text>
                            </Badge>
                          </View>
                          <View style={{flex: 2, marginLeft: 5}}>
                            <Badge style={styles.voterId}>
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: '#ffffff',
                                  zIndex: 1111,
                                  fontWeight: '600',
                                }}>
                                SJV1247626
                              </Text>
                            </Badge>
                          </View>
                          <View style={{flex: 1}}></View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 12,
                          }}>
                          <View style={{flex: 2}}>
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: '#424242',
                              }}>
                              Praveen Singh
                            </Text>
                          </View>
                        </View>

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#949292',
                            marginTop: 4,
                          }}>
                          S/O Raj Kumar Singh
                        </Text>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          <View style={{flex: 1}}>
                            <Icon name="mars" color={'#424242'} size={16} />
                          </View>
                          <View style={{flex: 10}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#424242',
                              }}>
                              Male
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          <View style={{flex: 1}}>
                            <Icon name="calendar" color={'#424242'} size={16} />
                          </View>
                          <View style={{flex: 10}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#424242',
                              }}>
                              07/12/1998 (DOB)
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          <>
                            <View style={{flex: 1}}>
                              <Icon
                                name="envelope"
                                color={'#424242'}
                                size={16}
                              />
                            </View>
                            <View style={{flex: 10}}>
                              <TouchableOpacity>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    fontWeight: '600',
                                    color: '#424242',
                                  }}>
                                  praveen@gmail.com
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          <View style={{flex: 1}}>
                            <Icon name="phone" color={'#424242'} size={16} />
                          </View>
                          <View style={{flex: 10}}>
                            <TouchableOpacity>
                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: '600',
                                  color: '#424242',
                                }}>
                                +91-7065317064
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          <View style={{flex: 1}}>
                            <Icon name="home" color={'#424242'} size={16} />
                          </View>
                          <View style={{flex: 10}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#424242',
                              }}>
                              India Gate, New Delhi, India
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 26,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color:'#949292',fontSize:12}}>Age : </Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color:'#949292',fontSize:12}}>26y</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color:'#949292',fontSize:12}}>House No : </Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color:'#949292',fontSize:12}}>151</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color:'#949292',fontSize:12}}>Aadhar No :</Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color:'#949292',fontSize:12}}>1231234534543</Text>
                          </View>
                        </View>

                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color:'#949292',fontSize:12}}>Color : </Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color:'#949292',fontSize:12}}>Opposite</Text>
                          </View>
                        </View>

                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color:'#949292',fontSize:12}}>Caste : </Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color:'#949292',fontSize:12}}>Hindu</Text>
                          </View>
                        </View>
                      </View>
                      <View style={{flex: 1}}>
                        <Image
                          style={{width: 55, height: 55}} // required Dimensions and styling of Image
                          source={require('../assets/images/user.png')} // enter your avatar image path
                        />
                        <View
                          style={{
                            marginTop: 20,
                            alignItems: 'flex-end',
                            marginRight: 30,
                          }}>
                          <TouchableOpacity>
                            <Icon name="whatsapp" color={'#075e54'} size={24} />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            marginTop: 10,
                            alignItems: 'flex-end',
                            marginRight: 30,
                          }}>
                          <TouchableOpacity>
                            <Icon name="send" color={'#f5c542'} size={24} />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            marginTop: 10,
                            alignItems: 'flex-end',
                            marginRight: 30,
                          }}>
                          <TouchableOpacity>
                            <Icon name="print" color={'#000'} size={24} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </FlatListItem>
                </Animated.View>
              </View>
            </View>
          </>
        </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 20,width:'100%'}}>
        <TouchableOpacity
        style={{marginRight:15,marginLeft:15}}
        onPress={()=> navigation.navigate('UpdateVoterScreen', {
            routeFrom: "PART A",
            filterName: "Search List",
            voterName: 'Praveen Singh',
          })}
        >
          <View
            style={{
              // marginRight: 15,
              // marginLeft: 15,
              height: 50,
              backgroundColor: '#de8100',
              borderRadius: 9,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize: 18, fontWeight: '600'}}>
              Edit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
    height: '70%',
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
  input: {
    borderRadius: 9,
    height: 50,
    marginTop: 15,
    padding: 16,
    backgroundColor: '#FFFFFF',
    color: '#121F26',
  },
  inputInner: {
    borderRadius: 9,
    height: 50,
    marginTop: 7,
    padding: 16,
    backgroundColor: '#ebe9e8',
    color: '#000',
    borderColor: '#dedede',
  },
  infoText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  desgText: {
    color: '#adadad',
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
    height: 390,
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  part: {
    width: '100%',
    backgroundColor: '#f5b902',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  voterId: {
    width: '100%',
    backgroundColor: '#ed9a5a',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  btn: {
    borderRadius: 9,
    height: 55,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#288BC6',
    width: 340,
  },
  btnText: {color: '#FFFFFF', textAlign: 'center', fontSize: 18},
  filterBtn: {
    width: '90%',
    backgroundColor: '#de8100',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
    marginLeft: '10%',
    borderRadius: 9,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    // marginTop: 52,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 10,
    marginTop: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ViewVoterScreen;
