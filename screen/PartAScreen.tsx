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

const PartAScreen = ({navigation}: {navigation: any}) => {
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Search',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/search.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Search
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Alphabetical List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/alphabets.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Alphabetical List
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Agewise List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/agewise.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Agewise List
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Family Report',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/familywise.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Family Report
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Family Head Report',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/familyhead.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Family Head Report
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Double Name List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/fullname.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Double Name List
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Married Woman Report',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/wedding.webp')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Married Woman Report
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Single Voter List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/singlevoter.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Single Voter List
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Address Wise List',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/addresswise.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Address Wise List
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Surname Report',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/surname.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Surname Report
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Family Labels',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/familylabel.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        Family Labels
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
                      style={{alignItems:'center'}}
                      onPress={() => {
                        navigation.navigate('VoterFilterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'SMS',
                        });
                      }}>
                      <Image
                        style={{width: 60, height: 60}}
                        source={require('../assets/images/sms.png')}
                      />
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          marginTop: 12,
                          color:'#4e4f4f'
                        }}>
                        SMS
                      </Text>
                    </TouchableOpacity>
                  </Card>
                </Animated.View>
              </View>
            </View>
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
    alignContent:'center'
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

export default PartAScreen;
