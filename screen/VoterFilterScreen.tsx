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
  Alert,
} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatListItem from '../components/FlatListItem';
import {useState} from 'react';
import {DataTable} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { getTotalRowCount, retrieveVoterData } from '../utils';
import { getTotalRowNo } from '../utils/db';

const VoterFilterScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([50]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );
  const [items, setItems] = React.useState([])
  React.useEffect(()=>{
    listVotersData()
  },[])

  const listVotersData = async()=>{
    const data:any = await retrieveVoterData()
    const totalData = await getTotalRowCount()
    setItems(data?.data)
     console.warn('data-show--->',totalData,data?.data)
 
   }

  // const [items] = React.useState(
  //   [
  //   {
  //     key: 1,
  //     name: 'Praveen Singh',
  //     fatherName: 'Raj Kumar',
  //     address: 'Govt. Adarsh Sr. Sec. School Paota',
  //     mobileNo: 7065317064,
  //     epicId: 'SJV1243971',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 2,
  //     name: 'Priya Kumari',
  //     fatherName: 'Bablu Sahay',
  //     address: 'Laxminagar New Delhi',
  //     mobileNo: 9965317055,
  //     epicId: 'SJV1243971',
  //     partNo: 2,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 33,
  //     gender: 'F',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 3,
  //     name: 'Ram Kumar',
  //     fatherName: 'Ritesh Jha',
  //     address: 'karol bagh New Delhi',
  //     mobileNo: 7895317077,
  //     epicId: 'SJV1243971',
  //     partNo: 3,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 4,
  //     name: 'Sandeep Kumar',
  //     fatherName: 'Sanjay Kumar',
  //     address: 'Sarita Vihar New Delhi',
  //     mobileNo: 9865317222,
  //     epicId: 'SJV12439721',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 5,
  //     name: 'Vishnu',
  //     fatherName: 'Rajesh Singh',
  //     address: 'Badarpur New Delhi',
  //     mobileNo: 8865317000,
  //     epicId: 'SJV1243921',
  //     partNo: 6,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 6,
  //     name: 'Aarti Kumari',
  //     fatherName: 'Raj Kumar',
  //     address: 'Ashok Nagar New Delhi',
  //     mobileNo: 9965317024,
  //     epicId: 'SJV1243932',
  //     partNo: 4,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 7,
  //     name: 'Pankaj Sahay',
  //     fatherName: 'Raj Kumar',
  //     address: 'Mayur Vihar New Delhi',
  //     mobileNo: 9865317064,
  //     epicId: 'SJV12439766',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 8,
  //     name: 'Rahul Shetty',
  //     fatherName: 'Krishana Shetty',
  //     address: 'Badarpur, New Delhi',
  //     mobileNo: 7065317090,
  //     epicId: 'SJV1243971',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 9,
  //     name: 'Ranjan Kumar',
  //     fatherName: 'Sajjan Kumar',
  //     address: 'Surajkund, New Delhi',
  //     mobileNo: 98447378822,
  //     epicId: 'SJV1243911',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 10,
  //     name: 'Shakti Srivastav',
  //     fatherName: 'Prateek Srivastav',
  //     address: 'Jasola Vihar, New Delhi',
  //     mobileNo: 71115317064,
  //     epicId: 'SJV1243998',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 11,
  //     name: 'Praveen Singh',
  //     fatherName: 'Raj Kumar',
  //     address: 'Govt. Adarsh Sr. Sec. School Paota R. No. 12',
  //     mobileNo: 7065317064,
  //     epicId: 'SJV1243971',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 12,
  //     name: 'Praveen Singh',
  //     fatherName: 'Raj Kumar',
  //     address: 'Govt. Adarsh Sr. Sec. School Paota R. No. 12',
  //     mobileNo: 7065317064,
  //     epicId: 'SJV1243971',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 13,
  //     name: 'Praveen Singh',
  //     fatherName: 'Raj Kumar',
  //     address: 'Govt. Adarsh Sr. Sec. School Paota R. No. 12',
  //     mobileNo: 7065317064,
  //     epicId: 'SJV1243971',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 14,
  //     name: 'Praveen Singh',
  //     fatherName: 'Raj Kumar',
  //     address: 'Govt. Adarsh Sr. Sec. School Paota R. No. 12',
  //     mobileNo: 7065317064,
  //     epicId: 'SJV1243971',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  //   {
  //     key: 15,
  //     name: 'Praveen Singh',
  //     fatherName: 'Raj Kumar',
  //     address: 'Govt. Adarsh Sr. Sec. School Paota R. No. 12',
  //     mobileNo: 7065317064,
  //     epicId: 'SJV1243971',
  //     partNo: 1,
  //     surName: 'Singh',
  //     total: 210,
  //     age: 28,
  //     gender: 'M',
  //     voterSlNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //     houseNo: Math.floor(Math.random() * (999 - 100 + 1) + 100),
  //   },
  // ]
  // );

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);
  const [showDropDown, setShowDropDown] = useState(false);
  const DEVICE_HEIGHT = Dimensions.get('window').height;

  /* setting form values */
  const [isFocus, setIsFocus] = useState(false);
  const [gender, setGender] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [caste, setCaste] = useState('');
  const [labelValue, setLabelValue] = useState('');
  const [area, setArea] = useState('');
  const [party, setParty] = useState('');
  const [dead, setDead] = useState('');
  const [dateFrom, setDateFrom] = useState(Object);
  const [dateFromOpen, setDateFromOpen] = useState(false);
  const [dateTo, setDateTo] = useState(Object);
  const [dateToOpen, setDateToOpen] = useState(false);

  const genderList = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ];

  const sortList = [
    {
      label: 'Alphabetical',
      value: 'Alphabetical',
    },
    {
      label: 'Normal',
      value: 'Normal',
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

  const labelValueList = [
    {
      label: 'Test Label',
      value: 'Test Label',
    },
  ];

  const areaList = [
    {
      label: 'Area Name',
      value: 'Area Name',
    },
  ];

  const partyList = [
    {
      label: 'BJP',
      value: 'BJP',
    },
  ];

  const deadList = [
    {
      label: 'Dead',
      value: 'Dead',
    },
    {
      label: 'Alive',
      value: 'BJP',
    },
  ];

  /* setting form values */

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const CustomModal = () => {
    return getModalData();
  };

  const getModalData = () => {
    switch (route?.params?.filterName) {
      case 'Search':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Mobile No.
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Address
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Agewise List':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Agewise List
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
                <View style={{height: 400}}>
                  <ScrollView>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Gender
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={genderList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={gender}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setGender(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Sort
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={sortList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={sortBy}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setSortBy(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </ScrollView>
                </View>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Family Report':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Family Report
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Family Head Report':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Family Head Report
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Age From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Age To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Married Woman Report':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Married Woman Report
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Sort
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={sortList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={sortBy}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setSortBy(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Single Voter List':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Single Voter List
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Gender
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={genderList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={sortBy}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setGender(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Address Wise List':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Address Wise List
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Surname Report':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Surname Report
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Family Labels':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Family Labels
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'SMS':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      SMS Panel
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Relative
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Caste Wise List':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Caste Wise List
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Label Value Filter':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Label Value Filter
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Area Wise List':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Area Wise List
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Party Wise List':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Party Wise List
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Dead List':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Dead List
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      case 'Birthday List':
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
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Birthday List
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
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
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
            </View>
          </Modal>
        );
      default:
        return false;
    }
  };

  const getTopSearchUI = () => {
    switch (route?.params?.filterName) {
      case 'Search':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Agewise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Family Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Family Head Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Married Woman Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Single Voter List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Address Wise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Surname Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Family Labels':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'SMS':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Caste Wise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Label Value Filter':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Area Wise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Party Wise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Dead List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Birthday List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      default:
        return false;
    }
  };
  const getSearchUI = () => {
    switch (route?.params?.filterName) {
      case 'Search':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Name/ Epic Id"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Father"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Alphabetical List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Part From"
                style={styles.input}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Part To"
                style={styles.input}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Agewise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Age From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Age To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Family Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Family Size From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Family Size To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Family Head Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Family Size From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Family Size To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Double Name List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Family Size From"
                style={styles.input}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Family Size To"
                style={styles.input}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Married Woman Report':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <TextInput
                placeholder="Considering marriage age"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Single Voter List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Age From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Age To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Address Wise List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <TextInput
                placeholder="Search Address"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Surname Report':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <TextInput
                placeholder="Search Surname"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Family Labels':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Family Size From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Family Size To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'SMS':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                placeholder="Search Name"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                placeholder="Sarch Surname"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
              />
            </View>
          </>
        );
      case 'Caste Wise List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={casteList}
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
          </>
        );
      case 'Label Value Filter':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={labelValueList}
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
          </>
        );
      case 'Area Wise List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={areaList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Area' : '...'}
                searchPlaceholder="Search..."
                value={area}
                onChange={item => {
                  setArea(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Party Wise List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={partyList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Party' : '...'}
                searchPlaceholder="Search..."
                value={party}
                onChange={item => {
                  setParty(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Dead List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={deadList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Dead/Alive' : '...'}
                searchPlaceholder="Search..."
                value={dead}
                onChange={item => {
                  setDead(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Birthday List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TouchableOpacity onPress={() => setDateFromOpen(true)}>
                <TextInput
                  placeholder="Date From"
                  style={styles.searchInput}
                  placeholderTextColor={'gray'}
                  editable={false}
                  value={
                    dateFrom instanceof Date
                      ? moment(dateFrom).format('DD/MM/YYYY')
                      : ''
                  }
                />
              </TouchableOpacity>
              <DatePicker
                modal
                mode={'date'}
                open={dateFromOpen}
                date={new Date()}
                style={{zIndex: 9999}}
                onConfirm={date => {
                  setDateFromOpen(false);
                  setDateFrom(date);
                }}
                onCancel={() => {
                  setDateFromOpen(false);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TouchableOpacity onPress={() => setDateToOpen(true)}>
                <TextInput
                  placeholder="Date To"
                  style={styles.searchInput}
                  placeholderTextColor={'gray'}
                  editable={false}
                  value={
                    dateTo instanceof Date
                      ? moment(dateTo).format('DD/MM/YYYY')
                      : ''
                  }
                />
              </TouchableOpacity>
              <DatePicker
                modal
                mode={'date'}
                open={dateToOpen}
                date={new Date()}
                style={{zIndex: 9999}}
                onConfirm={date => {
                  setDateToOpen(false);
                  setDateTo(date);
                }}
                onCancel={() => {
                  setDateToOpen(false);
                }}
              />
            </View>
          </>
        );
      default:
        return false;
    }
  };

  const getDataTable = () => {
    switch (route?.params?.filterName) {
      case 'Search':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items && items.slice(from, to).map((item : any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000'
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '400',
                          color: '#000000'
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Alphabetical List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Agewise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Family Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        H/No. - {item?.houseNo}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Family Head Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Double Name List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Married Woman Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Single Voter List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        H/No. - {item?.houseNo}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Address Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        H/No. - {item?.houseNo}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Surname Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Surname</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '600',
                        }}>
                        Aggarwal
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        56
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Family Labels':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 150}}>
                  <Text style={{fontWeight: '600'}}>Label Category</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 100}}>
                  <Text style={{fontWeight: '600'}}>Label Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 50}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 150}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>Test</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 100}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '600',
                        }}>
                        Test
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 50}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        20
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'SMS':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Phone Number</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Profession</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.mobileNo}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        Test
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Caste Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 100}}>
                  <Text style={{fontWeight: '600'}}>Part No</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 150}}>
                  <Text style={{fontWeight: '600'}}>Caste Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 50}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 100}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>1</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '600',
                        }}>
                        Test
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 50}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        20
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Label Value Filter':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 100}}>
                  <Text style={{fontWeight: '600'}}>Label Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 150}}>
                  <Text style={{fontWeight: '600'}}>Label Value</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 50}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 100}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>Test</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '600',
                        }}>
                        Test
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 50}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        20
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Area Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 100}}>
                  <Text style={{fontWeight: '600'}}>Part</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 150}}>
                  <Text style={{fontWeight: '600'}}>Area Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 50}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 50}}>
                  <Text style={{fontWeight: '600'}}>Male</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 50}}>
                  <Text style={{fontWeight: '600'}}>Female</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 100}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>1</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '600',
                        }}>
                        Test
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        Test
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 50}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        10
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 50}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        20
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 50}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        30
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Party Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 100}}>
                  <Text style={{fontWeight: '600'}}>Part</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 150}}>
                  <Text style={{fontWeight: '600'}}>Party Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 50}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 50}}>
                  <Text style={{fontWeight: '600'}}>Male</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 50}}>
                  <Text style={{fontWeight: '600'}}>Female</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 100}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>1</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '600',
                        }}>
                        Test
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 50}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        10
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 50}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        20
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 50}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        30
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Dead List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Birthday List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 100}}>
                  <Text style={{fontWeight: '600'}}>DOB</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 100}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        10-12-1995
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Education Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Edu Q</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Male</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Female</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>Graduate</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                    <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                         100
                        </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                       22
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        23
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Shifted Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Shifted To</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Shifted From</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'New Voter List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000'
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '400',
                          color: '#000000'
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.epicId}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.gender}-{item?.age}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.address}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Profession Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Profession Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Male</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Female</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>Test</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>100</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                       50
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        50
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Outside Location List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Location To</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Male</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Female</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>Test</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>100</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                       50
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        50
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Labharthi By Center Govt':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Phone No</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 160}}>
                  <Text style={{fontWeight: '600'}}>Scheme Name</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.partNo}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000'
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '400',
                          color: '#000000'
                        }}>
                        {item?.fatherName}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.mobileNo}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 160}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                       Test
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Labharthi By State Govt':
          return (
            <>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={{width: 60}}>
                    <Text style={{fontWeight: '600'}}>Part No.</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 80}}>
                    <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 140}}>
                    <Text style={{fontWeight: '600'}}>Voter Name</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 80}}>
                    <Text style={{fontWeight: '600'}}>Phone No</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 160}}>
                    <Text style={{fontWeight: '600'}}>Scheme Name</Text>
                  </DataTable.Title>
                </DataTable.Header>
  
                {items.slice(from, to).map(item => (
                  <DataTable.Row key={item.key}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.partNo}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{alignSelf: 'center'}}>
                        <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <View style={{width: '100%'}}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('ViewVoterScreen', {
                              routeFrom: 'Part A',
                              filterName: 'Search List',
                            });
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              fontWeight: '600',
                              color: '#000000'
                            }}>
                            {item?.name}
                          </Text>
                        </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '400',
                            color: '#000000'
                          }}>
                          {item?.fatherName}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.mobileNo}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 160}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                         Test
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </>
          );
      case 'Labharthi By Candidate':
            return (
              <>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title style={{width: 60}}>
                      <Text style={{fontWeight: '600'}}>Part No.</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 80}}>
                      <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 140}}>
                      <Text style={{fontWeight: '600'}}>Voter Name</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 80}}>
                      <Text style={{fontWeight: '600'}}>Phone No</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 160}}>
                      <Text style={{fontWeight: '600'}}>Scheme Name</Text>
                    </DataTable.Title>
                  </DataTable.Header>
    
                  {items.slice(from, to).map(item => (
                    <DataTable.Row key={item.key}>
                      <DataTable.Cell style={{width: 60}}>
                        <Text style={{color: '#000000'}}>{item.partNo}</Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 80}}>
                        <View style={{alignSelf: 'center'}}>
                          <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 140}}>
                        <View style={{width: '100%'}}>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('ViewVoterScreen', {
                                routeFrom: 'Part A',
                                filterName: 'Search List',
                              });
                            }}>
                            <Text
                              style={{
                                fontSize: 12,
                                flexWrap: 'wrap',
                                fontWeight: '600',
                                color: '#000000'
                              }}>
                              {item?.name}
                            </Text>
                          </TouchableOpacity>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              fontWeight: '400',
                              color: '#000000'
                            }}>
                            {item?.fatherName}
                          </Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 80}}>
                        <View style={{width: '100%'}}>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              color: '#000000',
                            }}>
                            {item?.mobileNo}
                          </Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 160}}>
                        <View style={{width: '100%'}}>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              color: '#000000',
                            }}>
                           Test
                          </Text>
                        </View>
                      </DataTable.Cell>
                    </DataTable.Row>
                  ))}
                </DataTable>
              </>
            );
      case 'Approached Qty':
            return (
              <>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title style={{width: 60}}>
                      <Text style={{fontWeight: '600'}}>Part No.</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 80}}>
                      <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 140}}>
                      <Text style={{fontWeight: '600'}}>Voter Name</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 120}}>
                      <Text style={{fontWeight: '600'}}>Approached No</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 160}}>
                      <Text style={{fontWeight: '600'}}>Approached Record</Text>
                    </DataTable.Title>
                  </DataTable.Header>
    
                  {items.slice(from, to).map(item => (
                    <DataTable.Row key={item.key}>
                      <DataTable.Cell style={{width: 60}}>
                        <Text style={{color: '#000000'}}>{item.partNo}</Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 80}}>
                        <View style={{alignSelf: 'center'}}>
                          <Text style={{color: '#000000'}}>{item?.voterSlNo}</Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 140}}>
                        <View style={{width: '100%'}}>
                          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('ViewVoterScreen', {
                                routeFrom: 'Part A',
                                filterName: 'Search List',
                              });
                            }}>
                            <Text
                              style={{
                                fontSize: 12,
                                flexWrap: 'wrap',
                                fontWeight: '600',
                                color: '#000000'
                              }}>
                              {item?.name}
                            </Text>
                          </TouchableOpacity>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              fontWeight: '400',
                              color: '#000000'
                            }}>
                            {item?.fatherName}
                          </Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 120}}>
                        <View style={{width: '100%'}}>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              color: '#000000',
                            }}>
                            36
                          </Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 160}}>
                        <View style={{width: '100%'}}>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              color: '#000000',
                            }}>
                           Test
                          </Text>
                        </View>
                      </DataTable.Cell>
                    </DataTable.Row>
                  ))}
                </DataTable>
              </>
            );
      case 'Campaign Abhiyan':
            return (
              <>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title style={{width: 60}}>
                      <Text style={{fontWeight: '600'}}>Part No.</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 160}}>
                      <Text style={{fontWeight: '600'}}>Campaign Name</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{width: 110}}>
                      <Text style={{fontWeight: '600'}}>Apply</Text>
                    </DataTable.Title>
                  </DataTable.Header>
    
                  {items.slice(from, to).map(item => (
                    <DataTable.Row key={item.key}>
                      <DataTable.Cell style={{width: 60}}>
                        <Text style={{color: '#000000'}}>{item.partNo}</Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 160}}>
                        <View style={{alignSelf: 'center'}}>
                          <Text style={{color: '#000000'}}>Test</Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 110}}>
                        <View style={{alignSelf: 'center'}}>
                          <Text style={{color: '#000000'}}>20</Text>
                        </View>
                      </DataTable.Cell>
                    </DataTable.Row>
                  ))}
                </DataTable>
              </>
            );
      case 'Social Media':
          return (
            <>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={{width: 60}}>
                    <Text style={{fontWeight: '600'}}>Part No.</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 140}}>
                    <Text style={{fontWeight: '600'}}>Voter Name</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 100}}>
                    <Text style={{fontWeight: '600'}}>Phone No</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 300}}>
                    <Text style={{fontWeight: '600'}}>Address</Text>
                  </DataTable.Title>
                </DataTable.Header>
  
                {items.slice(from, to).map(item => (
                  <DataTable.Row key={item.key}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.partNo}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <View style={{width: '100%'}}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('ViewVoterScreen', {
                              routeFrom: 'Part A',
                              filterName: 'Search List',
                            });
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              fontWeight: '600',
                              color: '#000000'
                            }}>
                            {item?.name}
                          </Text>
                        </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '400',
                            color: '#000000'
                          }}>
                          {item?.fatherName}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 100}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.mobileNo}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 300}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.address}
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </>
          );
      case 'Voter Survey':
          return (
            <>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={{width: 60}}>
                    <Text style={{fontWeight: '600'}}>Part No.</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 140}}>
                    <Text style={{fontWeight: '600'}}>Voter Name</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 160}}>
                    <Text style={{fontWeight: '600'}}>Party Like</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 160}}>
                    <Text style={{fontWeight: '600'}}>Candidate Like</Text>
                  </DataTable.Title>
                </DataTable.Header>
  
                {items.slice(from, to).map(item => (
                  <DataTable.Row key={item.key}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.partNo}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <View style={{width: '100%'}}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('ViewVoterScreen', {
                              routeFrom: 'Part A',
                              filterName: 'Search List',
                            });
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              fontWeight: '600',
                              color: '#000000'
                            }}>
                            {item?.name}
                          </Text>
                        </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '400',
                            color: '#000000'
                          }}>
                          {item?.fatherName}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 160}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          Test
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 160}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          Test
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </>
          );
      case 'Religion':
          return (
            <>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={{width: 60}}>
                    <Text style={{fontWeight: '600'}}>Part No.</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 140}}>
                    <Text style={{fontWeight: '600'}}>Religion Name</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 80}}>
                    <Text style={{fontWeight: '600'}}>Total</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 80}}>
                    <Text style={{fontWeight: '600'}}>Male</Text>
                  </DataTable.Title>
                  <DataTable.Title style={{width: 80}}>
                    <Text style={{fontWeight: '600'}}>Female</Text>
                  </DataTable.Title>
                </DataTable.Header>
  
                {items.slice(from, to).map(item => (
                  <DataTable.Row key={item.key}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.partNo}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <Text style={{color: '#000000'}}>Hindu</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          100
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          50
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          50
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </>
          );
      default:
        return false;
    }
  };

  const getSearchBtn = () => {
    switch (route?.params?.filterName) {
      case 'Search':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Agewise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Family Report':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Family Head Report':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Married Woman Report':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Single Voter List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Address Wise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Surname Report':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Family Labels':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'SMS':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Caste Wise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Label Value Filter':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Area Wise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Party Wise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Dead List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Birthday List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      default:
        return false;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.innerContainer}>
          <View style={styles.parent}>
            <View style={styles.child}>
              <View style={{marginTop: '17%', marginLeft: 15, marginRight: 15}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontWeight: '600',
                    marginTop: 10,
                  }}>
                  {route?.params?.filterName}
                </Text>
                <Animated.View entering={FadeInDown.duration(1000).springify()}>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    {getTopSearchUI()}
                  </View>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    {getSearchUI()}
                    {getSearchBtn()}
                  </View>
                </Animated.View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <FlatListItem style={styles.card}>
          <ScrollView>
            <ScrollView horizontal={true}>{getDataTable()}</ScrollView>
          </ScrollView>
        </FlatListItem>
        <View style={{display:'flex',flexDirection:'row'}}>
          <View style={{flex:1}}>
            <View style={{display:'flex',flexDirection:'row'}}>
                <View style={{flex:1}}>

                </View>
            </View>  
          </View>
        </View>
        {/* <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          // onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          // selectPageDropdownLabel={'Rows per page'}
        /> */}
      </View>
      <CustomModal />
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
    width: '100%',
    transform: [{scaleX: 2}],
    overflow: 'hidden',
  },
  child: {
    height: 180,
    transform: [{scaleX: 0.5}],
    backgroundColor: '#288BC6',
  },
  input: {
    borderRadius: 9,
    height: 50,
    marginTop: 15,
    padding: 16,
    backgroundColor: '#FFFFFF',
    color: '#121F26',
  },
  searchInput: {
    borderRadius: 4,
    height: 30,
    marginTop: 7,
    paddingTop: 3,
    paddingBottom: 3,
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
    height: '80%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
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
    // marginTop: 52,
    backgroundColor: '#FFFFFF',
    marginBottom: '12%',
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
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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
    borderColor: '#FFFFFF',
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
});

export default VoterFilterScreen;
