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
          height: 700,
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
                          color:'#4e4f4f'
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
                      style={{alignItems:'center'}}
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
                          color:'#4e4f4f'
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
                      style={{alignItems:'center'}}
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
                          color:'#4e4f4f'
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
                      style={{alignItems:'center'}}
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
                          color:'#4e4f4f'
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
                      style={{alignItems:'center'}}
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
                          color:'#4e4f4f'
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
                      style={{alignItems:'center'}}
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
                          color:'#4e4f4f'
                        }}>
                        Birthday List
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
