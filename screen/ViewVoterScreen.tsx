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
  Linking,
  Alert,
} from 'react-native';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import Card from '../components/Card';
import Badge from '../components/Badge';
import HyperLink from '../components/HyperLink';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatListItem from '../components/FlatListItem';
import {useState} from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {IMAGE_BASE_URL} from '../config';
import Snackbar from 'react-native-snackbar';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import {RadioButton} from 'react-native-paper';

interface IBLEPrinter {
  device_name: string;
  inner_mac_address: string;
}

const ViewVoterScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWhatsappVisible, setModalWhatsappVisible] = useState(false);
  const DEVICE_HEIGHT = Dimensions.get('window').height;
  const voterData = route?.params?.item;
  const {data} = useSelector((state: any) => state?.MasterData);
  const [voterLabelList, setVoterLabelList] = React.useState<any>([]);
  const [selectedPrinter, setSelectedPrinter] = React.useState<any>(null);
  const [voterLabel, setVoterLabel] = React.useState<any>('');
  const [selectedValue, setSelectedValue] = useState('');


  React.useEffect(() => {
    setVoterLabelList(data?.label_value);
  }, []);

  const filterVoterLabel = (labelId: any) => {
    const labelData = voterLabelList.filter((item: any) =>
      item?.id.includes(labelId),
    );
    return labelData?.length > 0 && labelData[0]?.label;
  };

  const showPrintAlert = () => {
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
                  Select option
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
            <View style={styles.radioGroup}>
              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="option1"
                  status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setSelectedValue('option1');
                    setModalVisible(!modalVisible);
                    navigation.navigate('PrintScreen',{
                      data : voterData,
                      isImage : true,
                      filterName: 'Print Receipt',
                    })
                  }}
                  color="#007BFF"
                />
                <Text style={styles.radioLabel}>With Image</Text>
              </View>

              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="option2"
                  status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setSelectedValue('option2');
                    setModalVisible(!modalVisible);
                    navigation.navigate('PrintScreen',{
                      data : voterData,
                      isImage : false,
                      filterName: 'Print Receipt',
                    })
                  }}
                  color="#007BFF"
                />
                <Text style={styles.radioLabel}>Without Image</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const showWhatsappAlert = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalWhatsappVisible}
        onRequestClose={() => {
          setModalWhatsappVisible(!modalWhatsappVisible);
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
                  Select option
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity
                  onPress={() =>
                    setModalWhatsappVisible(!modalWhatsappVisible)
                  }>
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
            <View style={styles.radioGroup}>
              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="option1"
                  status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setSelectedValue('option1');
                    setModalWhatsappVisible(!modalWhatsappVisible);
                    sendWhatsappWithImage();
                  }}
                  color="#007BFF"
                />
                <Text style={styles.radioLabel}>With Image</Text>
              </View>

              <View style={styles.radioButton}>
                <RadioButton.Android
                  value="option2"
                  status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setSelectedValue('option2');
                    setModalWhatsappVisible(!modalWhatsappVisible);
                    sendWhatsappWithoutImage();
                  }}
                  color="#007BFF"
                />
                <Text style={styles.radioLabel}>Without Image</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const dataWithImage = () => {
    let image = ``;
    {
      voterData?.profile_image && voterData?.profile_image != 'null'
        ? (image += `<img style="width:80px;height:80px;" src="${
            voterData?.profile_image?.substring(0, 4) == 'file'
              ? voterData?.profile_image
              : IMAGE_BASE_URL + voterData?.profile_image
          }" />`)
        : (image += `<img style="width:80px;height:80px;" src="https://candidate.pracharstore.com/assets/img/dummy-user.jpg" />`);
    }
    let html = `<div style="width:260px;word-wrap: break-word;">`;
    html += image;
    html += `<p style="font-size:20px">भाग सं. : ${voterData?.PART_NO}</p>`;
    html += `<p style="font-size:20px">अनु.सं. : ${voterData?.SLNOINPART}</p>`;
    html += `<p style="font-size:20px">नाम : ${voterData?.FM_NAME_V1} ${voterData?.LASTNAME_V1}</p>`;
    html += `<p style="font-size:20px">पिता/पति: ${voterData?.RLN_FM_NM_V1} ${voterData?.RLN_L_NM_V1}</p>`;
    html += `<p style="font-size:20px">मकान संख्या: ${voterData?.C_HOUSE_NO_V1}</p>`;
    html += `<p style="font-size:20px">कार्ड सं. : ${voterData?.EPIC_NO}</p>`;
    html += `<p style="font-size:20px">बुथ : ${voterData?.PSBUILDING_NAME_V1}</p>`;
    html += `</div>`;

    return html;
  };

  const dataWithoutImage = () => {
    let html = `<div style="width:260px;word-wrap: break-word;">`;
    html += `<p style="font-size:20px">भाग सं. : ${voterData?.PART_NO}</p>`;
    html += `<p style="font-size:20px">अनु.सं. : ${voterData?.SLNOINPART}</p>`;
    html += `<p style="font-size:20px">नाम : ${voterData?.FM_NAME_V1} ${voterData?.LASTNAME_V1}</p>`;
    html += `<p style="font-size:20px">पिता/पति: ${voterData?.RLN_FM_NM_V1} ${voterData?.RLN_L_NM_V1}</p>`;
    html += `<p style="font-size:20px">मकान संख्या: ${voterData?.C_HOUSE_NO_V1}</p>`;
    html += `<p style="font-size:20px">कार्ड सं. : ${voterData?.EPIC_NO}</p>`;
    html += `<p style="font-size:20px">बुथ : ${voterData?.PSBUILDING_NAME_V1}</p>`;
    html += `</div>`;

    return html;
  };

  const printWithImagePDF = async () => {
    let html = await dataWithImage();
    const results: any = await RNHTMLtoPDF.convert({
      html: html,
      fileName: 'test',
      base64: true,
    });
    // Printer.BluetoothManager
    await RNPrint.print({filePath: results?.filePath});
  };

  const printWithoutImagePDF = async () => {
    let html = await dataWithoutImage();
    const results: any = await RNHTMLtoPDF.convert({
      html: html,
      fileName: 'test',
      base64: true,
    });
    // Printer.BluetoothManager
    await RNPrint.print({filePath: results?.filePath});
  };

  const sendWhatsappWithImage = async () => {
    let html = await dataWithImage();
    const url = `whatsapp://send?phone=${voterData?.MOBILE_NO}&text=${html}`;
    try{
      Linking.openURL(url)
    }catch(error : any){
      console.warn("error--->",error)
    }
  };

  const sendWhatsappWithoutImage = async () => {
    let html = await dataWithoutImage();
    const url = `whatsapp://send?phone=${voterData?.MOBILE_NO}&text=${html}`;
    Linking.openURL(url);
  };

  const getEducation = (education: any) => {
    switch (education) {
      case '0':
        return 'Uneducated';
      case '1':
        return '10th';
      case '2':
        return '12th';
      case '3':
        return 'Undergraduate';
      case '4':
        return 'Graduate';
      case '5':
        return 'Post Graduate';
      case '6':
        return 'PHD';
      case '7':
        return 'Other';
      default:
        return 'N/A';
    }
  };

  const getProfession = (profession: any) => {
    switch (profession) {
      case '0':
        return 'Student';
        break;
      case '1':
        return 'Unemployed';
        break;
      case '2':
        return 'Self Employed';
        break;
      case '3':
        return 'Farmer';
        break;
      case '4':
        return 'Teacher';
        break;
      case '5':
        return 'Govt Forces';
        break;
      case '6':
        return 'Job Pvt Sector';
        break;
      case '7':
        return 'Job Govt Sector';
        break;
      case '8':
        return 'Police officer';
        break;
      case '9':
        return 'Dentist';
        break;
      case '10':
        return 'Doctor';
        break;
      case '11':
        return 'Journalist';
        break;
      case '12':
        return 'CA / Account';
        break;
      case '13':
        return 'Advocates';
        break;
      case '14':
        return 'Engineer';
        break;
      case '15':
        return 'Local Market Business';
        break;
      case '16':
        return 'Corporate Business';
        break;
      case '17':
        return 'School Owner';
        break;
      case '18':
        return 'Hospital Owner';
        break;
      case '19':
        return 'Multiple Business';
        break;
      case '20':
        return 'Barber Salon';
        break;
      case '21':
        return 'Driving Work Business';
        break;
      case '22':
        return 'GIG WORKER';
        break;
      case '23':
        return 'Daily Mazdoor';
        break;
      case '24':
        return 'Local Market Worker';
        break;
      case '25':
        return 'Other';
      default:
        return 'N/A';
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.parent}>
          <View style={styles.child}></View>
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
          //   backgroundColor: '#DEDEDE',
        }}>
        <ScrollView>
          <>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
              <View style={{flex: 1}}>
                <Animated.View
                  entering={FadeInUp.delay(400).duration(1000).springify()}>
                  <FlatListItem style={styles.card}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <View style={{flex: 4}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                          <View style={{flex: 2}}>
                            <Badge style={styles.part}>
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: '#ffffff',
                                  zIndex: 1111,
                                  fontWeight: '600',
                                }}>
                                Part No. : {voterData?.PART_NO}
                              </Text>
                            </Badge>
                          </View>
                          <View style={{flex: 2, marginLeft: 5}}>
                            <Badge style={styles.voterId}>
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: '#ffffff',
                                  zIndex: 1111,
                                  fontWeight: '600',
                                }}>
                                SR No. {voterData?.SLNOINPART}
                              </Text>
                            </Badge>
                          </View>
                          <View style={{flex: 1}}></View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 12,
                          }}>
                          <View style={{flex: 2}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: '400',
                                color: '#949292',
                                marginTop: 4,
                              }}>
                              VOTER ID : {voterData?.EPIC_NO}
                            </Text>
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: '#424242',
                              }}>
                              {voterData?.FM_NAME_EN} {voterData?.LASTNAME_EN}
                            </Text>
                          </View>
                        </View>

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#949292',
                            marginTop: 4,
                          }}>
                          FATHER NAME : {voterData?.RLN_FM_NM_EN}{' '}
                          {voterData?.RLN_L_NM_EN}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '400',
                            color: '#949292',
                            marginTop: 4,
                          }}>
                          HOUSE NO. : {voterData?.C_HOUSE_NO}
                        </Text>

                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          <View style={{flex: 1}}>
                            <Icon name="calendar" color={'#424242'} size={16} />
                          </View>
                          <View style={{flex: 10}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#424242',
                              }}>
                              {voterData?.DOB
                                ? moment(voterData?.DOB).format('DD/MM/YYYY')
                                : ''}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          <View style={{flex: 1}}>
                            <Icon name="mars" color={'#424242'} size={16} />
                          </View>
                          <View style={{flex: 10}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#424242',
                              }}>
                              {voterData?.GENDER}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          <View style={{flex: 1}}>
                            <Icon name="home" color={'#424242'} size={16} />
                          </View>
                          <View style={{flex: 10}}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: '600',
                                color: '#424242',
                              }}>
                              {voterData?.SECTION_NAME_EN}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          {/* <>
                            <View style={{flex: 1}}>
                              <Icon
                                name="envelope"
                                color={'#424242'}
                                size={16}
                              />
                            </View>
                            <View style={{flex: 10}}>
                              <TouchableOpacity>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    fontWeight: '600',
                                    color: '#424242',
                                  }}>
                                  praveen@gmail.com
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </> */}
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 6,
                          }}>
                          <View style={{flex: 1}}>
                            <Icon
                              name="crosshairs"
                              color={'#424242'}
                              size={16}
                            />
                          </View>
                          <View style={{flex: 10}}>
                            <TouchableOpacity>
                              <Text
                                style={{
                                  fontSize: 12,
                                  fontWeight: '600',
                                  color: '#424242',
                                }}>
                                {voterData?.PSBUILDING_NAME_EN}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>

                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 26,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              PHONE NO. :{' '}
                            </Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              {voterData?.MOBILE_NO != 'null' &&
                              voterData?.MOBILE_NO != ''
                                ? voterData?.MOBILE_NO
                                : 'N/A'}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              EDUCATION :{' '}
                            </Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              {voterData?.education == '7'
                                ? voterData?.other_education
                                : getEducation(voterData?.education)}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              CASTE :
                            </Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              {voterData?.caste == '0' && 'HINDU'}
                              {voterData?.caste == '1' && 'MUSLIM'}
                              {voterData?.caste != '1' &&
                                voterData?.caste != '0' &&
                                'N/A'}
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              PROFESSION :{' '}
                            </Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              {voterData?.profession == '25'
                                ? voterData?.other_profession
                                : getProfession(voterData?.profession)}
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 2,
                          }}>
                          <View style={{flex: 4}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              CATEGORY :{' '}
                            </Text>
                          </View>
                          <View style={{flex: 8}}>
                            <Text style={{color: '#949292', fontSize: 12}}>
                              {voterData?.voter_label &&
                              voterData?.voter_label != 'null'
                                ? filterVoterLabel(voterData?.voter_label)
                                : 'N/A'}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={{flex: 1}}>
                        {voterData?.profile_image &&
                        voterData?.profile_image != 'null' ? (
                          <Image
                            style={{width: 70, height: 70, borderRadius: 70}} // required Dimensions and styling of Image
                            source={{
                              uri:
                                voterData?.profile_image?.substring(0, 4) ==
                                'file'
                                  ? voterData?.profile_image
                                  : IMAGE_BASE_URL + voterData?.profile_image,
                            }} // enter your avatar image path
                          />
                        ) : (
                          <Image
                            style={{width: 55, height: 55}} // required Dimensions and styling of Image
                            source={require('../assets/images/user.png')} // enter your avatar image path
                          />
                        )}
                        <View
                          style={{
                            marginTop: 20,
                            alignItems: 'flex-end',
                            marginRight: 30,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              if (
                                voterData?.MOBILE_NO != 'null' &&
                                voterData?.MOBILE_NO != ''
                              ) {
                                // const url = `whatsapp://send?phone=${
                                //   voterData?.MOBILE_NO
                                // }&text=${''}`;
                                // Linking.openURL(url);
                                setSelectedValue('');
                                setModalWhatsappVisible(!modalWhatsappVisible);
                              } else {
                                Snackbar.show({
                                  text: 'Phone number not available',
                                  duration: Snackbar.LENGTH_LONG,
                                  backgroundColor: '#e33443',
                                });
                              }
                            }}>
                            <Icon name="whatsapp" color={'#075e54'} size={24} />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            marginTop: 20,
                            alignItems: 'flex-end',
                            marginRight: 30,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              if (
                                voterData?.MOBILE_NO != 'null' &&
                                voterData?.MOBILE_NO != ''
                              ) {
                                const url = `sms:${
                                  voterData?.MOBILE_NO
                                }body=${''}`;
                                Linking.openURL(url);
                              } else {
                                Snackbar.show({
                                  text: 'Phone number not available',
                                  duration: Snackbar.LENGTH_LONG,
                                  backgroundColor: '#e33443',
                                });
                              }
                            }}>
                            <Icon name="send" color={'#f5c542'} size={24} />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            marginTop: 20,
                            alignItems: 'flex-end',
                            marginRight: 30,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              if (
                                voterData?.MOBILE_NO != 'null' &&
                                voterData?.MOBILE_NO != ''
                              ) {
                                Linking.openURL(`tel:${voterData?.MOBILE_NO}`);
                              } else {
                                Snackbar.show({
                                  text: 'Phone number not available',
                                  duration: Snackbar.LENGTH_LONG,
                                  backgroundColor: '#e33443',
                                });
                              }
                            }}>
                            <Icon name="phone" color={'#2d75eb'} size={24} />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            marginTop: 20,
                            alignItems: 'flex-end',
                            marginRight: 30,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              setSelectedValue('');
                              setModalVisible(!modalVisible);
                            }}>
                            <Icon name="print" color={'#000'} size={24} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </FlatListItem>
                </Animated.View>
                {showPrintAlert()}
                {showWhatsappAlert()}
              </View>
            </View>
          </>
        </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 20, width: '100%'}}>
        <TouchableOpacity
          style={{marginRight: 15, marginLeft: 15}}
          onPress={() =>
            navigation.navigate('UpdateVoterScreen', {
              item: voterData,
            })
          }>
          <View
            style={{
              // marginRight: 15,
              // marginLeft: 15,
              height: 50,
              backgroundColor: '#de8100',
              borderRadius: 9,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize: 18, fontWeight: '600'}}>
              Edit
            </Text>
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
    height: 440,
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
  radioGroup: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
});

export default ViewVoterScreen;
