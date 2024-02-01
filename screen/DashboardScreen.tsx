import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import Card from '../components/Card';
import Badge from '../components/Badge';
import HyperLink from '../components/HyperLink';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardScreen = ({navigation}: {navigation: any}) => {
  return (
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
                    <Image
                      style={{width: 45, height: 45}} // required Dimensions and styling of Image
                      source={require('../assets/images/user.png')} // enter your avatar image path
                    />
                  </View>
                  <View style={{flex: 6}}>
                    <Text style={styles.infoText}>Praveen Kumar</Text>
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
                        <Text style={styles.desgText}>Karyakarta</Text>
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
                          Part : 02
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
                <TouchableOpacity>
                  <Icon name="sign-out" color={'#FFFFFF'} size={22} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          top: '18%',
          width: '46%',
          position: 'absolute',
          zIndex: 9999,
          paddingLeft: 23,
          flex: 1,
        }}>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}>
          <Card style={styles.card}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../assets/images/male.png')}
            />
            <Text style={{fontSize: 22, fontWeight: '600', marginTop: 12}}>
              2,226
            </Text>
            <Text style={{fontSize: 14}}>Male Voters</Text>
          </Card>
        </Animated.View>
      </View>

      <View
        style={{
          top: '18%',
          right: '0%',
          paddingRight: 15,
          width: '44%',
          position: 'absolute',
          zIndex: 9999,
          flex: 1,
        }}>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}>
          <Card style={styles.card}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../assets/images/female.png')}
            />
            <Text style={{fontSize: 22, fontWeight: '600', marginTop: 12}}>
              3,026
            </Text>
            <Text style={{fontSize: 14}}>Male Voters</Text>
          </Card>
        </Animated.View>
      </View>

      <View
        style={{
          top: '45%',
          right: '25%',
          paddingRight: 15,
          width: '44%',
          position: 'absolute',
          zIndex: 9999,
          flex: 1,
        }}>
        <Animated.View
          entering={FadeInUp.delay(400).duration(1000).springify()}>
          <Card style={styles.card}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../assets/images/part1.png')}
            />
            <Text style={{fontSize: 22, fontWeight: '600', marginTop: 12}}>
              REPORT 1
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('PartAScreen')}>
              <HyperLink>
                <Text style={{fontSize: 14}}>View</Text>
              </HyperLink>
            </TouchableOpacity>
          </Card>
        </Animated.View>
      </View>

      <View
        style={{
          top: '70%',
          right: '25%',
          paddingRight: 15,
          width: '44%',
          position: 'absolute',
          zIndex: 9999,
          flex: 1,
        }}>
        <Animated.View
          entering={FadeInUp.delay(400).duration(1000).springify()}>
          <Card style={styles.card}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../assets/images/part2.png')}
            />
            <Text style={{fontSize: 22, fontWeight: '600', marginTop: 12}}>
              REPORT 2
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('PartBScreen')}>
              <HyperLink>
                <Text style={{fontSize: 14}}>View</Text>
              </HyperLink>
            </TouchableOpacity>
          </Card>
        </Animated.View>
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
    height: 170,
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    padding: 12,
  },
  part: {
    width: '40%',
    backgroundColor: '#de8100',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});

export default DashboardScreen;
