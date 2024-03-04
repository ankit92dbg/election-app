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
} from 'react-native';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import Card from '../components/Card';
import Badge from '../components/Badge';
import HyperLink from '../components/HyperLink';
import Icon from 'react-native-vector-icons/FontAwesome';

const PartBScreen = ({navigation}: {navigation: any}) => {
  const DEVICE_HEIGHT = Dimensions.get('window').height;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.parent}>
          <View style={styles.child}></View>
        </View>
      </View>
      <View
        style={{
          top: '13%',
          width: '100%',
          height: '85%',
          position: 'absolute',
          zIndex: 9999,
          paddingLeft: 15,
          paddingRight: 15,
          flex: 1,
        }}>
        <ScrollView>
          <>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Caste Wise List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/caste.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Caste Wise List
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Label Value Filter',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/labelvalue.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Label Value Filter
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Area Wise List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/areawise.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Area Wise List
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Party Wise List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/partywise.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Party Wise List
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Dead List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/deadlist.jpg')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Dead List
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Birthday List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/birthday.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Birthday List
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: '2%'}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Education Report',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/education.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Education Report
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Shifted Report',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/shift.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Shifted Report
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'New Voter List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/newvoter.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        New Voter List
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Profession Wise List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/profession.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Profession Wise List
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Outside Location List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/outsidelocation.webp')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Outside Location List
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Labharthi By Center Govt',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/centergovt.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Labharthi By Center Govt
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>

            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: '2%'}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Labharthi By State Govt',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/stategovt.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Labharthi By State Govt
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Labharthi By Candidate',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/lcandidate.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Labharthi By Candidate
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Approached Qty',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/approach.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Approached Qty
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Campaign Abhiyan',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/campaign.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Campaign Abhiyan
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Social Media',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/socialmedia.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Social Media
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Voter Survey',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/votersurvey.jpeg')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Voter Survey
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>
            {/* <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <Card style={styles.card}>
                    <TouchableOpacity
                      style={{alignItems: 'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part B',
                          filterName: 'Religion',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/religion.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color: '#4e4f4f',
                        }}>
                        Religion
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
              <View style={{flex: 1}}></View>
            </View> */}
          </>
        </ScrollView>
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
    backgroundColor: '#ebe6e6',
    color: '#121F26',
    width: 340,
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
    height: 160,
    width: '95%',
    backgroundColor: '#FFFFFF',
    padding: 12,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  part: {
    width: '100%',
    backgroundColor: '#de8100',
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
});

export default PartBScreen;
