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
import {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import Snackbar from 'react-native-snackbar';
import Loader from '../components/Loader';
import { retrieveUserSession } from '../utils';
import { postRequest } from '../networkInterface';
import { getAllBM } from '../redux/action/BMData';

const UpdateBM = ({route, navigation}: {route: any; navigation: any}) => {
  const dispatch = useDispatch();
  const {data} = useSelector((state: any) => state?.MasterData);
  const item = route?.params?.item;
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState<any>(null);
  const [loadingText, setLoadingText] = React.useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [email, setEmail] = React.useState('');
  const [fName, setFName] = React.useState('');
  const [lName, setLName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [age, setAge] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [category, setCategory] = useState('');
  const [stateList, setStateList] = React.useState([]);
  const [state, setState] = React.useState('');
  const [cityList, setCityList] = React.useState([]);
  const [city, setCity] = React.useState('');
  const [sectionNo, setSectionNo] = React.useState([]);
  const [sectionList, setSectionList] = React.useState([]);
  const [userImage, setUserImage] = React.useState('');
  const [numInputs, setNumInputs] = useState<any>([]);

  React.useEffect(() => {
    if (route?.params?.category) {
      setCategory(route?.params?.category);
    }
    setStateList(formatState(data?.state));
    setSectionList(formatSection(data?.SECTION_NO))
    getUserSession()
    setSection()
  }, [navigation]);

  const setSection = async() =>{
    let secNo:any = []
    for(let i=0;i<data?.SECTION_NO?.length;i++){
      secNo[i] = data?.SECTION_NO[i]?.SECTION_NO
    }
    setSectionNo(secNo)
  }

  const changeProfileImage = async () => {
    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    await launchImageLibrary(options, async(response: any) => {
      if (response.didCancel) {
        console.warn('User cancelled camera');
      } else if (response.error) {
        console.warn('Camera Error: ', response.error);
      } else {
        setUserImage(response?.assets[0].uri)
      }
    });
  };

  const formatState = (data: any) => {
    const stateData = data.filter(function (el: any) {
      return el.country_id == '101';
    });

    const result = stateData.map((o: any) => ({
      label: `${o.name}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const formatSection = (data: any) => {
    const result = data.map((o: any) => ({
      label: `${o.SECTION_NO}`,
      value: `${o.SECTION_NO}`,
    }));
    return result;
  };

  const formatCity = (data: any, state_id: any) => {
    const stateData = data.filter(function (el: any) {
      return el.state_id == state_id;
    });

    const result = stateData.map((o: any) => ({
      label: `${o.city}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const addSection = () => {
    const _inputs: any = [...numInputs];
    _inputs.push({key: '', sectionFrom: '', sectionTo: ''});
    setNumInputs(_inputs);
  };

  const handleRemove = (index: any) => {
    const _inputs: any = [...numInputs];
    _inputs.splice(index, 1);
    setNumInputs(_inputs);
  };

  const handleSectionFrom = (text: any, index: any) => {
    const _inputs: any = [...numInputs];
    _inputs[index].sectionFrom = text;
    setNumInputs(_inputs);
  };

  const handleSectionTo = (text: any, index: any) => {
    const _inputs: any = [...numInputs];
    _inputs[index].sectionTo = text;
    setNumInputs(_inputs);
  };

  const setFormaData = () =>{
    setFName(item?.f_name)
    setLName(item?.l_name)
    setAge(item?.age)
    setDesignation(item?.designation)
    // setAssemblyName(item?.assembly_name)
    setAddress(item?.address)
    setEmail(item?.email)
    setPhone(item?.phone)
    setState(item?.state)
    setCity(item?.city)
    const _inputs: any = [...numInputs];
    let arr = []
    let result = []
    for (let i = 0; i < item.SECTION.length; i++) {
        arr.push(parseInt(item.SECTION[i].SECTION_NO))
    }
    for (let j = 0; j < arr.length; j++) {
        if (j === 0) {
            result.push([arr[0]])
        } else if (arr[j] != arr[j-1] + 1) {
            result.push([arr[j]])
        } else {
            let tmp : any = result[result.length - 1]
            tmp.push(arr[j])
            result[result.length - 1] = tmp
        }
    }
    for(let k = 0; k < result.length; k++){
        _inputs.push({key: k, sectionFrom: String(result[k][0]), sectionTo: String(result[k][result[k].length-1])});
        setNumInputs(_inputs);
    }    
  }

  async function getUserSession() {
    try {
      const session: any = await retrieveUserSession();
      if (session !== undefined) {
        await setUserData(session);
        await setFormaData()
      }
    } catch (error) {
      // There was an error on the native side
    }
  }

  const handleSubmit = async () => {
    if (fName == '') {
      Snackbar.show({
        text: 'Please enter the First Name !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (lName == '') {
      Snackbar.show({
        text: 'Please enter the Last Name !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (age == '') {
      Snackbar.show({
        text: 'Please enter the Age !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (designation == '') {
      Snackbar.show({
        text: 'Please enter the Designation !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (phone == '') {
      Snackbar.show({
        text: 'Please enter the Phone No. !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (email == '') {
      Snackbar.show({
        text: 'Please enter the email !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (state == '') {
      Snackbar.show({
        text: 'Please enter the State !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (city == '') {
      Snackbar.show({
        text: 'Please enter the City !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }

    setLoadingText('Saving profile, please wait...');
    const formData = new FormData();
    formData.append('leader_id', userData?.id);
    formData.append('user_id', item?.id);
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
    formData.append('category', item?.category);
    if(userImage!=''){
      formData.append('profile_image', {
        uri: userImage,
        type: 'image/jpg',
        name: 'image.jpg',
      });
    }
    formData.append('SEC_VAL[]', sectionNo);
    for(let i=0;i<numInputs.length;i++){
      if (numInputs[i].sectionFrom == '') {
        Snackbar.show({
          text: 'Please enter the SECTION FROM !',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#e33443',
        });
        return false;
      }
      if (numInputs[i].sectionTo == '') {
        Snackbar.show({
          text: 'Please enter the SECTION TO !',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#e33443',
        });
        return false;
      }
      formData.append('SECTION_NO_FROM[]', numInputs[i].sectionFrom);
      formData.append('SECTION_NO_TO[]', numInputs[i].sectionTo);
    }
    setLoading(true);
    const response: any = await postRequest('update-bm.php', formData);
    if (response?.error == '') {
      dispatch(await getAllBM({ leader_id: userData?.id }))
      setTimeout(() => {
        setLoading(false);
        Snackbar.show({
          text: 'BM updated successfully !',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#3db362',
        });
        navigation.navigate('Home');
      }, 1000);
    } else {
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
              <View style={styles.child}></View>
            </View>
          </View>
          <View
            style={{
              top: '10%',
              width: '100%',
              height: '88%',
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
                    <View style={{marginTop: 22}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '600',
                          color: '#4e4f4f',
                        }}>
                        UPDATE BM
                      </Text>
                    </View>
                    <View style={{marginTop: 15}}>
                      <View>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          First Name
                        </Text>
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
                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          Last Name
                        </Text>
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
                    </View>
                    {numInputs.map((input: any, key: any) => (
                      <View
                        key={key}
                        style={{
                          marginTop: 10,
                          display: 'flex',
                          flexDirection: 'row',
                        }}>
                        <View style={{flex: 2, width: '90%'}}>
                          <Text
                            style={{
                              color: '#4e4f4f',
                            }}>
                            SECTION_NO FROM
                          </Text>
                          <Dropdown
                            style={[styles.dropdown, {marginTop: 5}]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            itemTextStyle={{color: '#000000'}}
                            data={sectionList}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select' : '...'}
                            searchPlaceholder="Search..."
                            value={numInputs[key]?.sectionFrom}
                            onChange={(item: any) => {
                              handleSectionFrom(item.value, key);
                              setIsFocus(false);
                            }}
                          />
                        </View>
                        <View style={{flex: 2, width: '90%', marginLeft: '3%'}}>
                          <Text
                            style={{
                              color: '#4e4f4f',
                            }}>
                            SECTION_NO TO
                          </Text>
                          <Dropdown
                            style={[styles.dropdown, {marginTop: 5}]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            itemTextStyle={{color: '#000000'}}
                            data={sectionList}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select' : '...'}
                            searchPlaceholder="Search..."
                            value={numInputs[key]?.sectionTo}
                            onChange={(item: any) => {
                              handleSectionTo(item.value, key);
                              setIsFocus(false);
                            }}
                          />
                        </View>
                        <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
                          {key == 0 ? (
                            <TouchableOpacity
                              style={styles.btnSuccess}
                              onPress={() => {
                                addSection();
                              }}>
                              <Text style={styles.btnText}>+</Text>
                            </TouchableOpacity>
                          ) : (
                            <TouchableOpacity
                              style={styles.btnRemove}
                              onPress={() => {
                                handleRemove(key);
                              }}>
                              <Text style={styles.btnText}>-</Text>
                            </TouchableOpacity>
                          )}
                        </View>
                      </View>
                    ))}
                    <View style={{marginTop: 15}}>
                      <View>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          Email
                        </Text>
                        <TextInput
                          placeholder="Email"
                          placeholderTextColor={'gray'}
                          value={email}
                          style={styles.input}
                          onChangeText={value => {
                            setEmail(value);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          Phone
                        </Text>
                        <TextInput
                          placeholder="Phone"
                          placeholderTextColor={'gray'}
                          value={phone}
                          style={styles.input}
                          onChangeText={value => {
                            setPhone(value);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          Age
                        </Text>
                        <TextInput
                          placeholder="Age"
                          placeholderTextColor={'gray'}
                          value={age}
                          style={styles.input}
                          onChangeText={value => {
                            setAge(value);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          Designation
                        </Text>
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
                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          State
                        </Text>
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
                            setCityList(formatCity(data?.city, item.value));
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          City
                        </Text>
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
                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          Address
                        </Text>
                        <TextInput
                          placeholder="Address"
                          placeholderTextColor={'gray'}
                          style={styles.input}
                          onChangeText={value => {
                            setAddress(value);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text
                          style={{
                            color: '#4e4f4f',
                          }}>
                          Password
                        </Text>
                        <TextInput
                          placeholder="Password"
                          placeholderTextColor={'gray'}
                          style={styles.input}
                          onChangeText={value => {
                            setPassword(value);
                          }}
                        />
                      </View>
                    </View>
                    <View style={{marginTop: 32}}>
                      <TouchableOpacity onPress={() => changeProfileImage()}>
                        <View
                          style={{
                            height: 60,
                            width: '100%',
                            backgroundColor: '#ed9f02',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 9,
                          }}>
                          <Icon name="image" color={'#FFFFFF'} size={22} />
                          <Text style={{color: '#FFFFFF'}}>Profile Image</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => handleSubmit()}>
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
  selectBox: {
    borderRadius: 9,
    height: 50,
    marginTop: 15,
    padding: 16,
    backgroundColor: '#ebe6e6',
    color: '#121F26',
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
  btnSuccess: {
    backgroundColor: '#2dce89',
    borderRadius: 30,
    height: 30,
    marginTop: 30,
    width: 30,
  },
  btnRemove: {
    borderRadius: 30,
    height: 30,
    marginTop: 30,
    backgroundColor: '#e33057',
    width: 30,
  },
  btnDanger: {
    borderRadius: 9,
    height: 55,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#bd1c00',
    width: '100%',
  },
  btnText: {color: '#FFFFFF', textAlign: 'center', fontSize: 18},
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
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
  searchDropdown: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  topSearchDropdown: {
    height: 35,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
});

export default UpdateBM;
