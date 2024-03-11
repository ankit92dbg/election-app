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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {retrieveUserSession, storeUserSession} from '../utils';
import {IMAGE_BASE_URL} from '../config';
import {postRequest} from '../networkInterface';
import Loader from '../components/Loader';
import Snackbar from 'react-native-snackbar';
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = ({navigation}: {navigation: any}) => {
  const {data} = useSelector((state: any) => state?.MasterData);
  const [userData, setUserData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [loadingText, setLoadingText] = React.useState("");
  const [email, setEmail] = React.useState('');
  const [fName, setFName] = React.useState('');
  const [lName, setLName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [age, setAge] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [stateList, setStateList] = React.useState([]);
  const [state, setState] = React.useState('');
  const [cityList, setCityList] = React.useState([]);
  const [city, setCity] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [assemblyName, setAssemblyName] = React.useState('');
  const [isFocus, setIsFocus] = React.useState(false);



  React.useEffect(() => {
    getUserSession();
    setStateList(formatState(data?.state))
  }, []);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserSession()
    });
    return unsubscribe;
  }, [navigation]);

const setFormaData = (session:any) =>{
  setCityList(formatCity(data?.city,session?.state))
  setFName(session?.f_name)
  setLName(session?.l_name)
  setAge(session?.age)
  setDesignation(session?.designation)
  setAssemblyName(session?.assembly_name)
  setAddress(session?.address)
  setEmail(session?.email)
  setPhone(session?.phone)
  setState(session?.state)
  setCity(session?.city)
}

  const changeHomeBanner = async () => {
    setLoadingText("Uploading image, please wait...")
    setLoading(true);
    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    await launchImageLibrary(options, async(response: any) => {
      if (response.didCancel) {
        setLoading(false);
        console.warn('User cancelled camera');
      } else if (response.error) {
        setLoading(false);
        console.warn('Camera Error: ', response.error);
      } else {
        const formData = new FormData();
        formData.append('user_id', userData?.id);
        formData.append('banner_image', {
          uri: response?.assets[0].uri,
          type: 'image/jpg',
          name: 'image.jpg',
        });
        await postRequest('update-home-banner.php', formData);
        const getUserData = await postRequest('user-details.php', formData);
        await storeUserSession(getUserData?.data);
        await getUserSession();
        setLoading(false);
      }
    });
  };

  const changeProfilePicture = async () => {
    setLoadingText("Uploading image, please wait...")
    setLoading(true);
    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, async (response: any) => {
      // Use launchImageLibrary to open image gallery
      // console.log('Response = ', response);

      if (response.didCancel) {
        setLoading(false);
        console.log('User cancelled image picker');
      } else if (response.error) {
        setLoading(false);
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        setLoading(false);
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = { uri: response?.assets[0].uri };

        const formData = new FormData();
        formData.append('user_id', userData?.id);
        formData.append('profile_image', {
          uri: response?.assets[0].uri,
          type: 'image/jpg',
          name: 'image.jpg',
        });
        await postRequest('update-profile-image.php', formData);
        const getUserData = await postRequest('user-details.php', formData);
        await storeUserSession(getUserData?.data);
        await getUserSession();
        setLoading(false);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  };

  async function getUserSession() {
    try {
      const session: any = await retrieveUserSession();
      if (session !== undefined) {
        await setUserData(session);
        await setFormaData(session)
      }
    } catch (error) {
      // There was an error on the native side
    }
  }

  const formatState = (data: any) => {
    const stateData = data.filter(function (el:any) {
      return el.country_id == '101'
    });
    
    const result = stateData.map((o: any) => ({
      label: `${o.name}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const formatCity = (data: any,state_id:any) => {
    const stateData = data.filter(function (el:any) {
      return el.state_id == state_id
    });
    
    const result = stateData.map((o: any) => ({
      label: `${o.city}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const handleSubmit = async() => {
    if (fName == '') {
      Snackbar.show({
        text: 'Please enter your First Name !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (lName == '') {
      Snackbar.show({
        text: 'Please enter your Last Name !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (age == '') {
      Snackbar.show({
        text: 'Please enter your Age !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (designation == '') {
      Snackbar.show({
        text: 'Please enter your Designation !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (assemblyName == '') {
      Snackbar.show({
        text: 'Please enter your Assembly Name !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (phone == '') {
      Snackbar.show({
        text: 'Please enter your Phone No. !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (email == '') {
      Snackbar.show({
        text: 'Please enter your email !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (state == '') {
      Snackbar.show({
        text: 'Please enter your State !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (city == '') {
      Snackbar.show({
        text: 'Please enter your City !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    setLoadingText("Saving profile, please wait...")
    setLoading(true);
    const formData = new FormData();
    formData.append('user_id', userData?.id);
    formData.append('f_name', fName);
    formData.append('l_name', lName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('age', age);
    formData.append('designation', designation);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('address', address);
    formData.append('assembly_name', assemblyName);

    const response : any = await postRequest('update-profile.php',formData)
    if(response?.error==''){
          const getUserData = await postRequest('user-details.php', formData);
          await storeUserSession(getUserData?.data);
          await getUserSession();
          setTimeout(() => {
            setLoading(false);
            Snackbar.show({
              text: 'Profile updated successfully !',
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: '#3db362',
            });
          }, 1000);
    }else{
      setTimeout(() => {
        setLoading(false);
        Snackbar.show({
          text: response?.message,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#e33443',
        });
      }, 1000);
    }
  };

  return (
    <>
      {loading ? (
        <Loader text={loadingText} loading={loading} />
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.parent}>
              <View style={styles.child}>
                <View style={{marginTop: 30, paddingLeft: 15}}>
                  <Text style={{color: '#FFFFFF'}}>{`Home > Profile`}</Text>
                </View>
                <View
                  style={{
                    top: '20%',
                    paddingRight: 15,
                    paddingLeft: 15,
                    width: '100%',
                    height: 250,
                    position: 'absolute',
                    zIndex: 1,
                    flex: 1,
                  }}>
                  <Card style={styles.card}>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Animated.View
                        entering={FadeInUp.delay(400)
                          .duration(1000)
                          .springify()}>
                        {userData?.profile_image ? (
                          <Image
                            style={{width: 80, height: 80, borderRadius: 80}}
                            source={{
                              uri: IMAGE_BASE_URL + userData?.profile_image,
                            }}
                          />
                        ) : (
                          <Image
                            style={{width: 80, height: 80}}
                            source={require('../assets/images/user.png')}
                          />
                        )}
                      </Animated.View>
                      <View style={{alignItems: 'center'}}>
                        <Text style={styles.infoText}>
                          {userData?.f_name} {userData?.l_name}
                        </Text>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingLeft: 12,
                          }}>
                          <View style={{marginTop: 5}}>
                            <Icon
                              name="briefcase"
                              color={'#d4d2d2'}
                              size={12}
                            />
                          </View>
                          <View style={{marginTop: 3}}>
                            <Text style={styles.desgText}>
                              {userData?.designation}
                            </Text>
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
                              Assembly Name :{' '}
                              {userData?.assembly_name
                                ? userData?.assembly_name
                                : 'N/A'}
                            </Text>
                          </Badge>
                        </View>
                      </View>
                      <View
                        style={{
                          marginTop: 15,
                          display: 'flex',
                          flexDirection: 'row',
                        }}>
                        <View style={{flex: 1}}>
                          <TouchableOpacity onPress={() => changeHomeBanner()}>
                            <View
                              style={{
                                height: 60,
                                width: '95%',
                                backgroundColor: '#288BC6',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 9,
                              }}>
                              <Icon name="image" color={'#FFFFFF'} size={22} />
                              <Text style={{color: '#FFFFFF'}}>
                                Home Banner
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex: 1}}>
                          <TouchableOpacity
                            onPress={() => changeProfilePicture()}>
                            <View
                              style={{
                                height: 60,
                                width: '95%',
                                marginLeft: '5%',
                                backgroundColor: '#288BC6',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 9,
                              }}>
                              <Icon name="camera" color={'#FFFFFF'} size={22} />
                              <Text style={{color: '#FFFFFF'}}>
                                Profile Image
                              </Text>
                            </View>
                          </TouchableOpacity>
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
              top: '47%',
              width: '100%',
              height: 380,
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      USER INFORMATION
                    </Text>
                  </View>
                  <View style={{marginTop: 15}}>
                    <View>
                      <Text style={{color: '#4e4f4f'}}>First Name</Text>
                      <TextInput
                        placeholder="First Name"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={fName}
                        onChangeText={value => {
                          setFName(value);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color: '#4e4f4f'}}>Last Name</Text>
                      <TextInput
                        placeholder="Last Name"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={lName}
                        onChangeText={value => {
                          setLName(value);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color: '#4e4f4f'}}>Age</Text>
                      <TextInput
                        placeholder="Age"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={age}
                        onChangeText={value => {
                          setAge(value);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color: '#4e4f4f'}}>Designation</Text>
                      <TextInput
                        placeholder="Designation"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={designation}
                        onChangeText={value => {
                          setDesignation(value);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color: '#4e4f4f'}}>Assembly Name</Text>
                      <TextInput
                        placeholder="Assembly Name"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={assemblyName}
                        onChangeText={value => {
                          setAssemblyName(value);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color: '#4e4f4f'}}>Password</Text>
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        secureTextEntry
                        onChangeText={value => {
                          setPassword(value);
                        }}
                      />
                    </View>
                  </View>
                  <View style={{marginTop: 20}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      CONTACT INFORMATION
                    </Text>
                  </View>
                  <View style={{marginTop: 15}}>
                    <View>
                      <Text style={{color: '#4e4f4f'}}>Phone Number</Text>
                      <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={phone}
                        onChangeText={value => {
                          setPhone(value);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color: '#4e4f4f'}}>Email</Text>
                      <TextInput
                        placeholder="Email"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={email}
                        onChangeText={value => {
                          setEmail(value);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color: '#4e4f4f'}}>State</Text>
                      <Dropdown
                        style={[styles.topSearchDropdown, {marginTop: 8}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={stateList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select State' : '...'}
                        searchPlaceholder="Search..."
                        value={state}
                        onChange={(item: any) => {
                          setState(item.value);
                          setCityList(formatCity(data?.city,item.value))
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color: '#4e4f4f'}}>City</Text>
                      <Dropdown
                        style={[styles.topSearchDropdown, {marginTop: 8}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={cityList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select City' : '...'}
                        searchPlaceholder="Search..."
                        value={city}
                        onChange={(item: any) => {
                          setCity(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <Text style={{color: '#4e4f4f'}}>Address</Text>
                      <TextInput
                        placeholder="Address"
                        placeholderTextColor={'gray'}
                        style={styles.input}
                        value={address}
                        onChangeText={value => {
                          setAddress(value);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 12}}>
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => {
                          handleSubmit();
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
      )}
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
    width: '100%',
  },
  btnText: {color: '#FFFFFF', textAlign: 'center', fontSize: 18},
  topSearchDropdown: {
    height: 35,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 8,
  },

  placeholderStyle: {
    fontSize: 16,
    color: '#000000',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default ProfileScreen;
