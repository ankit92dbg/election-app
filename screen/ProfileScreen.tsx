import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import Card from '../components/Card';
import Badge from '../components/Badge';
import HyperLink from '../components/HyperLink';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={{marginTop:30,paddingLeft:15}}>
                <Text style={{color:'#FFFFFF'}}>{`Home > Profile`}</Text>
            </View>
            <View
              style={{
                top: '20%',
                paddingRight: 15,
                paddingLeft: 15,
                width: '100%',
                height: 170,
                position: 'absolute',
                zIndex: 1,
                flex: 1,
              }}>
              <Card style={styles.card}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Animated.View
                    entering={FadeInUp.delay(400).duration(1000).springify()}>
                    <Image
                      style={{width: 80, height: 80}}
                      source={require('../assets/images/user.png')}
                    />
                  </Animated.View>
                  <View>
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
                            fontWeight: '600',
                          }}>
                          Part : 02
                        </Text>
                      </Badge>
                    </View>
                  </View>
                </View>
              </Card>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          top: '35%',
          width: '100%',
          height: 450,
          position: 'absolute',
          zIndex: 9999,
          paddingLeft: 15,
          paddingRight: 15,
          flex: 1,
        }}>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}>
          <Card style={styles.card}>
            <ScrollView>
              <View>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  USER INFORMATION
                </Text>
              </View>
              <View style={{marginTop: 15}}>
                <View>
                  <Text>First Name</Text>
                  <TextInput
                    placeholder="First Name"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={{marginTop: 12}}>
                  <Text>Last Name</Text>
                  <TextInput
                    placeholder="Last Name"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={{marginTop: 12}}>
                  <Text>Age</Text>
                  <TextInput
                    placeholder="Age"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={{marginTop: 12}}>
                  <Text>Designation</Text>
                  <TextInput
                    placeholder="Designation"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={{marginTop: 12}}>
                  <Text>Password</Text>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  CONTACT INFORMATION
                </Text>
              </View>
              <View style={{marginTop: 15}}>
                <View>
                  <Text>Phone Number</Text>
                  <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={{marginTop: 12}}>
                  <Text>Email</Text>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={{marginTop: 12}}>
                  <Text>State</Text>
                  <TextInput
                    placeholder="State"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={{marginTop: 12}}>
                  <Text>City</Text>
                  <TextInput
                    placeholder="City"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={{marginTop: 12}}>
                  <Text>Address</Text>
                  <TextInput
                    placeholder="Address"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
                <View style={{marginTop: 12}}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      navigation.navigate('DashboardScreen');
                    }}>
                    <Text style={styles.btnText}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
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
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 12,
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

export default ProfileScreen;
