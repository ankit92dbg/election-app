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
import Animated, {FadeInDown} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatListItem from '../components/FlatListItem';
import {useState} from 'react';
import {DataTable} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';

const VoterFilterScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([10]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      key: 1,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 2,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 3,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 4,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 5,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 6,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 7,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 8,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 9,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 10,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 11,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 12,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 13,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 14,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
    {
      key: 15,
      name: 'Praveen Singh',
      fatherName: 'Raj Kumar',
      mobileNo: 7065317064,
      epicId: 'SJV1243971',
      partNo: 1,
      age: 28,
    },
  ]);

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
  const [date, setDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);

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
                    <View style={{marginTop: 14}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Full Name / Epic ID
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
                        Father Name
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

      case 'Alphabetical List':
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
                      Alphabetical List
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
                        Gender
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
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
                        Family Size From
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
                        Family Size To
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
                        Family Size From
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
                        Family Size To
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

      case 'Double Name List':
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
                      Double Name List
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
                        Considering Marriage Age
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
                        Sort
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
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
                        Search
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
                        Search
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
                        Family Size From
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
                        Family Size To
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
                        Name
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
                        Surname
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
                        Caste
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={casteList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={caste}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setCaste(item.value);
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
                        Label Value
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={labelValueList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={labelValue}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setLabelValue(item.value);
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
                        Area
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={areaList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={area}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setArea(item.value);
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
                        Party
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={partyList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={party}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setParty(item.value);
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
                        Dead/Alive
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={deadList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={dead}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setDead(item.value);
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
                        Date From
                      </Text>
                      <TouchableOpacity
                        onPress={() => setDateOpen(true)}
                      >
                        <TextInput
                          style={styles.inputInner}
                          placeholderTextColor={'#000'}
                          editable={false}
                        />
                      </TouchableOpacity>
                      <DatePicker
                        modal
                        open={dateOpen}
                        date={date}
                        onConfirm={(date) => {
                          setDateOpen(false);
                          setDate(date);
                        }}
                        onCancel={() => {
                          setDateOpen(false);
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
                    <View style={{flex: 4, width: '90%'}}>
                      <TextInput
                        placeholder="Search By Name/ Father/ Epic Id"
                        style={styles.input}
                        placeholderTextColor={'gray'}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.filterBtn}>
                          <Icon name="filter" color={'#FFFFFF'} size={22} />
                        </View>
                      </TouchableOpacity>
                    </View>
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
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Part</DataTable.Title>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Father</DataTable.Title>
              </DataTable.Header>

              {items.slice(from, to).map(item => (
                <DataTable.Row key={item.key}>
                  <DataTable.Cell>
                    <Text
                      style={{
                        fontSize: 14,
                        flexWrap: 'wrap',
                        color: '#9a9c9a',
                      }}>
                      {item.partNo}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ViewVoterScreen', {
                          routeFrom: 'Part A',
                          filterName: 'Search List',
                        });
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          flexWrap: 'wrap',
                          color: '#0590fa',
                          textDecorationLine: 'underline',
                        }}>
                        {item?.name}(A-{item?.age})
                      </Text>
                    </TouchableOpacity>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Text
                      style={{
                        fontSize: 14,
                        flexWrap: 'wrap',
                        color: '#9a9c9a',
                      }}>
                      {item?.fatherName}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </ScrollView>
        </FlatListItem>
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          // onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          // selectPageDropdownLabel={'Rows per page'}
        />
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
    height: 200,
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
    height: 498,
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
  },
  selectedTextStyle: {
    fontSize: 16,
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

export default VoterFilterScreen;
