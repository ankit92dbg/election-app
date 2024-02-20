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
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { launchImageLibrary } from 'react-native-image-picker';

const CreateBM = ({navigation}: {navigation: any}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [sectionFrom, setSectionFrom] = useState('');
  const [sectionTo, setSectionTo] = useState('');
  const [category, setCategory] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const sectionList = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
        label: '3',
        value: '3',
      },
      {
        label: '4',
        value: '4',
      },
      {
        label: '5',
        value: '5',
      },
  ];
  const categoryList = [
    {
      label: 'Zila',
      value: '0',
    },
    {
      label: 'Zone',
      value: '1',
    },
    {
        label: 'Center',
        value: '2',
      },
      {
        label: 'Booth',
        value: '3',
      },
  ];
  const stateList = [
    {
      label: 'Delhi',
      value: 'Delhi',
    },
    {
      label: 'Haryana',
      value: 'Haryana',
    },
  ];
  const cityList = [
    {
      label: 'Central Delhi',
      value: 'Central Delhi',
    },
    {
      label: 'East Delhi',
      value: 'East Delhi',
    },
  ];
  const changeProfileImage = async() =>{
    const options : any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
  
    await launchImageLibrary(options, (response:any) => {
      if (response.didCancel) {
        console.warn('User cancelled camera');
      } else if (response.error) {
        console.warn('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        console.warn("imageUri->",imageUri);
      }
    });
  }
  return (
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
                    style={{fontSize: 16, fontWeight: '600', color: '#4e4f4f'}}>
                    CREATE BM
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
                      secureTextEntry
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
                      secureTextEntry
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 2,width:'90%'}}>
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
                        value={sectionFrom}
                        onChange={(item:any) => {
                          setSectionFrom(item.value);
                          setIsFocus(false);
                        }}
                      />
                  </View>
                  <View style={{flex: 2,width:'90%',marginLeft:'3%'}}>
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
                        value={sectionTo}
                        onChange={(item:any) => {
                          setSectionTo(item.value);
                          setIsFocus(false);
                        }}
                      />
                  </View>
                  <View style={{flex: 1,width:'90%',marginLeft:'3%'}}>
                    <TouchableOpacity
                        style={styles.btnSuccess}
                        onPress={() => {
                        console.log('Pressed')
                        }}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                  </View>      
                </View>
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
                      style={styles.input}
                      secureTextEntry
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
                      style={styles.input}
                      secureTextEntry
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
                      style={styles.input}
                      secureTextEntry
                    />
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        color: '#4e4f4f',
                      }}>
                      Category
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={categoryList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select' : '...'}
                        searchPlaceholder="Search..."
                        value={category}
                        onChange={(item:any) => {
                          setCategory(item.value);
                          setIsFocus(false);
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
                      secureTextEntry
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
                        style={[styles.dropdown, {marginTop: 5}]}
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
                        placeholder={!isFocus ? 'Select' : '...'}
                        searchPlaceholder="Search..."
                        value={state}
                        onChange={(item:any) => {
                          setState(item.value);
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
                        style={[styles.dropdown, {marginTop: 5}]}
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
                        placeholder={!isFocus ? 'Select' : '...'}
                        searchPlaceholder="Search..."
                        value={city}
                        onChange={(item:any) => {
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
                      secureTextEntry
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
                      secureTextEntry
                    />
                  </View>
                </View>
                <View style={{marginTop: 32}}>
                <TouchableOpacity
                        onPress={()=> changeProfileImage()}
                      >
                          <View style={{height:60,width:'100%',backgroundColor:'#ed9f02',alignItems:'center',justifyContent:'center',borderRadius:9}}>
                            <Icon name="image" color={'#FFFFFF'} size={22} />
                            <Text style={{color:'#FFFFFF'}}>Profile Image</Text>
                          </View>
                        </TouchableOpacity>
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
    borderRadius: 9,
    height: 55,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#2dce89',
    width: '100%',
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
});

export default CreateBM;
