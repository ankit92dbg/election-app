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
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { launchCamera } from 'react-native-image-picker';

const UpdateVoterScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  

  const [isFocus, setIsFocus] = useState(false);
  const [acNo, setAcNo] = useState('');
  const [partNo, setPartNo] = useState('');
  const [sectionNo, setSectionNo] = useState('');
  const [relation, setRelation] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState({});
  const [dobOpen, setDobOpen] = useState(false);
  const [caste, setCaste] = useState('');
  const [married, setMarried] = useState('');
  const [labelValue, setLabelValue] = useState('');
  const [party, setParty] = useState('');
  const [dead, setDead] = useState('');


  const acNoList = [
    {
      label: '12',
      value: '12',
    },
    {
      label: '13',
      value: '13',
    },
  ];

  const partNoList = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
  ];

  const sectionNoList = [
    {
      label: '22',
      value: '22',
    },
    {
      label: '23',
      value: '23',
    },
  ];

  const relationTypeList = [
    {
      label: 'Father',
      value: 'F',
    },
    {
      label: 'Husband',
      value: 'H',
    },
  ];

  const genderList = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
  ];

  const casteList = [
    {
      label: 'Hindu',
      value: 'Hindu',
    },
    {
      label: 'Muslim',
      value: 'Muslim',
    },
  ];

  const marriedList = [
    {
      label: 'Yes',
      value: 'Yes',
    },
    {
      label: 'No',
      value: 'No',
    },
  ];

  const labelValueList = [
    {
      label: 'Test label',
      value: 'Test label',
    },
  ];

  const partyList = [
    {
      label: 'BJP',
      value: 'BJP',
    },
    {
      label: 'Congress',
      value: 'Congress',
    },
  ];

  const deadList = [
    {
      label: 'Dead',
      value: 'Dead',
    },
    {
      label: 'Alive',
      value: 'Alive',
    },
  ];

  const changeProfilePicture = async() =>{
    const options : any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
  
    launchCamera(options, (response:any) => { // Use launchImageLibrary to open image gallery
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        console.log(source)
      }
    });
  }


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
                    <ScrollView>
                      <View>
                        <Text style={{fontSize: 16, fontWeight: '600',color:'#4e4f4f'}}>
                          Update Voter
                        </Text>
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          AC NO
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={acNoList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select AC NO' : '...'}
                          searchPlaceholder="Search..."
                          value={acNo}
                          onChange={item => {
                            setAcNo(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          PART NO
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={partNoList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select PART NO' : '...'}
                          searchPlaceholder="Search..."
                          value={partNo}
                          onChange={item => {
                            setPartNo(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          SECTION NO
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={sectionNoList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select SECTION NO' : '...'}
                          searchPlaceholder="Search..."
                          value={sectionNo}
                          onChange={item => {
                            setSectionNo(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          CH HOUSE NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        CH HOUSE NO V1
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          FM NAME EN
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          LASTNAME EN
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          FM NAME V1
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          LASTNAME V1
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          RLN TYPE
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={relationTypeList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select Relation' : '...'}
                          searchPlaceholder="Search..."
                          value={relation}
                          onChange={item => {
                            setRelation(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          RLN FM NM EN
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          RLN L NM EN
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          RLN FM NM V1
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                         RLN L NM V1
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          EPIC NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          GENDER
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={genderList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select Gender' : '...'}
                          searchPlaceholder="Search..."
                          value={gender}
                          onChange={item => {
                            setGender(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          AGE
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          DOB
                        </Text>
                        <TouchableOpacity onPress={() => setDobOpen(true)}>
                          <TextInput
                            placeholder="Date From"
                            style={styles.inputInner}
                            placeholderTextColor={'gray'}
                            editable={false}
                            value={
                              dob instanceof Date
                                ? moment(dob).format('DD/MM/YYYY')
                                : ''
                            }
                          />
                        </TouchableOpacity>
                        <DatePicker
                          modal
                          mode={'date'}
                          open={dobOpen}
                          date={new Date()}
                          style={{zIndex: 9999}}
                          onConfirm={date => {
                            setDobOpen(false);
                            setDob(date);
                          }}
                          onCancel={() => {
                            setDobOpen(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          MOBILE NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          AC NAME EN
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          AC NAME V1
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        SECTION NAME EN
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        SECTION NAME V1
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        PSBUILDING NAME EN
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        PSBUILDING NAME V1
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        PART NAME EN
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        PART NAME V1
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        AADHAR NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        RELATIVE PART NO
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                        RELATION SLNOINPART
                        </Text>
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          value={''}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          CASTE
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={casteList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select Caste' : '...'}
                          searchPlaceholder="Search..."
                          value={caste}
                          onChange={item => {
                            setCaste(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          Married
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={marriedList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select' : '...'}
                          searchPlaceholder="Search..."
                          value={married}
                          onChange={item => {
                            setMarried(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          Voter Label
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={labelValueList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select Label Value' : '...'}
                          searchPlaceholder="Search..."
                          value={labelValue}
                          onChange={item => {
                            setLabelValue(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          POLITICAL PARTY ASSOCIATED
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={partyList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select Political Party' : '...'}
                          searchPlaceholder="Search..."
                          value={party}
                          onChange={item => {
                            setParty(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 14, fontWeight: '400',color:'#4e4f4f'}}>
                          DEAD/ALIVE
                        </Text>
                        <Dropdown
                          style={[styles.searchDropdown, {marginTop: 15}]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={deadList}
                          itemTextStyle={{color:"#000000"}}
                          search
                          maxHeight={300}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select' : '...'}
                          searchPlaceholder="Search..."
                          value={dead}
                          onChange={item => {
                            setDead(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                      <View style={{marginTop: 10}}>
                      <TouchableOpacity
                      onPress={()=> changeProfilePicture()}
                      >
                          <View style={{height:60,width:'100%',backgroundColor:'#288BC6',alignItems:'center',justifyContent:'center',borderRadius:9}}>
                            <Icon name="camera" color={'#FFFFFF'} size={22} />
                            <Text style={{color:'#FFFFFF'}}>Profile Image</Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                  </FlatListItem>
                </Animated.View>
              </View>
            </View>
          </>
        </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 20,width:'100%'}}>
        <TouchableOpacity style={{marginRight:15,marginLeft:15}}>
          <View style={{height:50,backgroundColor:'#de8100',borderRadius:9,width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#FFF',fontSize:18,fontWeight:'600'}}>Save</Text>
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
    height: '100%',
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
  searchDropdown: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color:'#000000'
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'#000000'
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

export default UpdateVoterScreen;
