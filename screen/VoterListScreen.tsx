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

const VoterListScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const CustomModal = (props: any) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flex: 4}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  Search List
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icon name="close" color={'#000000'} size={16} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#DEDEDE',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 5,
                marginBottom: 5,
              }}
            />
            <ScrollView>
              <View>
                <View style={{marginTop: 14}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>
                    Full Name / Epic ID
                  </Text>
                  <TextInput
                    style={styles.inputInner}
                    placeholderTextColor={'#000'}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>
                    Father Name
                  </Text>
                  <TextInput
                    style={styles.inputInner}
                    placeholderTextColor={'#000'}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>
                    Mobile No.
                  </Text>
                  <TextInput
                    style={styles.inputInner}
                    placeholderTextColor={'#000'}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>
                    Part From
                  </Text>
                  <TextInput
                    style={styles.inputInner}
                    placeholderTextColor={'#000'}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>Part To</Text>
                  <TextInput
                    style={styles.inputInner}
                    placeholderTextColor={'#000'}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{fontSize: 14, fontWeight: '400'}}>Address</Text>
                  <TextInput
                    style={styles.inputInner}
                    placeholderTextColor={'#000'}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 50,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={{marginTop: 40, paddingLeft: '12%'}}>
              <Text
                style={{
                  color: '#FFFFFF',
                }}>{`Home > ${route?.params?.routeFrom} > ${route?.params?.filterName}`}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          top: '10%',
          width: '100%',
          height: 700,
          position: 'absolute',
          zIndex: 9999,
          paddingLeft: 15,
          paddingRight: 15,
          flex: 1,
        }}>
        <View>
          <Animated.View entering={FadeInDown.duration(1000).springify()}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flex: 4, width: '90%'}}>
                <TextInput
                  placeholder="Search By Name"
                  style={styles.input}
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <View style={styles.filterBtn}>
                    <Icon name="filter" color={'#FFFFFF'} size={22} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
      <View
        style={{
          top: '23%',
          width: '100%',
          height: 580,
          //   maxHeight: 700,
          position: 'absolute',
          zIndex: 9999,
          paddingLeft: 15,
          paddingRight: 15,
          flex: 1,
          backgroundColor: '#DEDEDE',
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
                      <View style={{flex: 1}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
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
                          <View style={{flex: 1, marginLeft: 5}}>
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
                          <View style={{flex: 2}}></View>
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
                          <View style={{flex: 4}}>
                            <TouchableOpacity
                              style={{marginTop: 2}}
                              onPress={() =>
                                navigation.navigate('UpdateVoterScreen', {
                                  routeFrom: route?.params?.routeFrom,
                                  filterName: route?.params?.filterName,
                                  voterName: 'Praveen Singh',
                                })
                              }>
                              <Icon name="pencil" color={'#424242'} size={16} />
                            </TouchableOpacity>
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
                      </View>
                    </View>
                  </FlatListItem>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <FlatListItem style={styles.card}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <View style={{flex: 1}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
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
                          <View style={{flex: 1, marginLeft: 5}}>
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
                          <View style={{flex: 2}}></View>
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
                          <View style={{flex: 4}}>
                            <TouchableOpacity
                              style={{marginTop: 2}}
                              onPress={() =>
                                navigation.navigate('UpdateVoterScreen', {
                                  routeFrom: route?.params?.routeFrom,
                                  filterName: route?.params?.filterName,
                                  voterName: 'Praveen Singh',
                                })
                              }>
                              <Icon name="pencil" color={'#424242'} size={16} />
                            </TouchableOpacity>
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
                      </View>
                    </View>
                  </FlatListItem>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <FlatListItem style={styles.card}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <View style={{flex: 1}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
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
                          <View style={{flex: 1, marginLeft: 5}}>
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
                          <View style={{flex: 2}}></View>
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
                          <View style={{flex: 4}}>
                            <TouchableOpacity
                              style={{marginTop: 2}}
                              onPress={() =>
                                navigation.navigate('UpdateVoterScreen', {
                                  routeFrom: route?.params?.routeFrom,
                                  filterName: route?.params?.filterName,
                                  voterName: 'Praveen Singh',
                                })
                              }>
                              <Icon name="pencil" color={'#424242'} size={16} />
                            </TouchableOpacity>
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
                      </View>
                    </View>
                  </FlatListItem>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <FlatListItem style={styles.card}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <View style={{flex: 1}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
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
                          <View style={{flex: 1, marginLeft: 5}}>
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
                          <View style={{flex: 2}}></View>
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
                          <View style={{flex: 4}}>
                            <TouchableOpacity
                              style={{marginTop: 2}}
                              onPress={() =>
                                navigation.navigate('UpdateVoterScreen', {
                                  routeFrom: route?.params?.routeFrom,
                                  filterName: route?.params?.filterName,
                                  voterName: 'Praveen Singh',
                                })
                              }>
                              <Icon name="pencil" color={'#424242'} size={16} />
                            </TouchableOpacity>
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
                      </View>
                    </View>
                  </FlatListItem>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <FlatListItem style={styles.card}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <View style={{flex: 1}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <View style={{flex: 1}}>
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
                          <View style={{flex: 1, marginLeft: 5}}>
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
                          <View style={{flex: 2}}></View>
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
                          <View style={{flex: 4}}>
                            <TouchableOpacity
                              style={{marginTop: 2}}
                              onPress={() =>
                                navigation.navigate('UpdateVoterScreen', {
                                  routeFrom: route?.params?.routeFrom,
                                  filterName: route?.params?.filterName,
                                  voterName: 'Praveen Singh',
                                })
                              }>
                              <Icon name="pencil" color={'#424242'} size={16} />
                            </TouchableOpacity>
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
                      </View>
                    </View>
                  </FlatListItem>
                </Animated.View>
              </View>
            </View>
          </>
        </ScrollView>
      </View>
      <CustomModal
        isModalVisible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      />
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
    height: 190,
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

export default VoterListScreen;
