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
  PermissionsAndroid,
  Platform,
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
import {err} from 'react-native-svg';
import {BleManager} from 'react-native-ble-plx';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';

import {
  USBPrinter,
  NetPrinter,
  BLEPrinter,
} from '@tumihub/react-native-thermal-receipt-printer';
import { hsdLogo } from './dummy-logo';

interface IBLEPrinter {
  device_name: string;
  inner_mac_address: string;
}

const PrintScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const bleManager = new BleManager();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalWhatsappVisible, setModalWhatsappVisible] = useState(false);
  const DEVICE_HEIGHT = Dimensions.get('window').height;
  const voterData = route?.params?.data;
  const {data} = useSelector((state: any) => state?.MasterData);
  const [voterLabelList, setVoterLabelList] = React.useState<any>([]);
  const [selectedPrinter, setSelectedPrinter] = React.useState<any>(null);
  const [voterLabel, setVoterLabel] = React.useState<any>('');
  const [printers, setPrinters] = useState<any>([]);
  const [currentPrinter, setCurrentPrinter] = useState<any>();
  const [selectedValue, setSelectedValue] = useState('');

  React.useEffect(() => {
    (async () => {
      // await requestBLEPermission()
      // await requestLocationPermission()
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]);
      if (
        result['android.permission.BLUETOOTH_CONNECT'] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        enableBluetooth();
      }
    })();
  }, []);

  React.useEffect(() => {
    getPrinters();
  }, []);

  const isDuplicteDevice = (devices: any, nextDevice: any) => {
    return devices.findIndex((device: any) => nextDevice.id === device.id) > -1;
  };

  const scanForPeripherals = () => {
    console.warn('device--->hello');
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.warn('searchErr-->', error);
      }
      console.warn('device--->', device);
      if (device) {
        setPrinters((prevState: any) => {
          if (!isDuplicteDevice(prevState, device)) {
            return [...prevState, device];
          }
          return prevState;
        });
      }
    });
  };

  const getPrinters = async () => {
    if (Platform.OS === 'android') {
      await BLEPrinter.init()
        .then(async () => {
          await BLEPrinter.getDeviceList()
            .then(result => {
            //   console.warn('Printers', result);
              if (result) setPrinters(result);
            })
            .catch(err => console.warn('err--->', err));
        })
        .catch(err => console.warn('Bluetooth Error', err));
    }
  };

  const enableBluetooth = async () => {
    const isBluetoothEnabled = await BluetoothStateManager.requestToEnable();
    if (!isBluetoothEnabled) {
      await BluetoothStateManager.enable();
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Location permission for bluetooth scanning',
          message: 'wahtever',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission for bluetooth scanning granted');
        return true;
      } else {
        console.log('Location permission for bluetooth scanning revoked');
        return false;
      }
    } catch (err) {
      console.warn('errs0-->', err);
      return false;
    }
  };

  const connectPrinter = (printer: any) => {
    //connect printer
    BLEPrinter.connectPrinter(printer.inner_mac_address).then(
      setCurrentPrinter,
      (error: any) => console.warn('errs-->', error),
    );
  };

  React.useEffect(() => {
    setVoterLabelList(data?.label_value);
  }, []);

  const filterVoterLabel = (labelId: any) => {
    const labelData = voterLabelList.filter((item: any) =>
      item?.id.includes(labelId),
    );
    return labelData?.length > 0 && labelData[0]?.label;
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
  

  const printTextTest = async () => {
    const options: any = {
      encoding: 'UTF-8',
      codepage: 0,
      widthtimes: 0,
      heigthtimes: 0,
      fonttype: 1,
    };
    //   await BLEPrinter.printImageBase64(hsdLogo, {});
      await BLEPrinter.printImageBase64(hsdLogo, {
        imageWidth: 50,
        paddingX: 0,
      });
    // BLEPrinter.printImage('https://sportshub.cbsistatic.com/i/2021/04/09/9df74632-fde2-421e-bc6f-d4bf631bf8e5/one-piece-trafalgar-law-wano-anime-1246430.jpg')
    // BLEPrinter.printImage('https://sportshub.cbsistatic.com/i/2021/04/09/9df74632-fde2-421e-bc6f-d4bf631bf8e5/one-piece-trafalgar-law-wano-anime-1246430.jpg',{imageHeight:50,imageWidth:40})
    //         .then(result => {
    //           console.warn('result--->', result);
    //         })
    //         .catch(err => console.warn('err--->', err));
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
        //   height: 800,
          //   maxHeight: 700,
          position: 'absolute',
          zIndex: 9999,
          paddingLeft: 15,
          paddingRight: 15,
          flex: 1,
          //   backgroundColor: '#DEDEDE',
        }}>
        <>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
              <View style={styles.card}>
                <ScrollView>
                  {printers.map((printer: any) => (
                    <View style={styles.radioGroup}>
                      <View style={styles.radioButton}>
                        <RadioButton.Android
                          value={printer.inner_mac_address}
                          status={
                            selectedValue === printer.inner_mac_address
                              ? 'checked'
                              : 'unchecked'
                          }
                          onPress={() => {
                            setSelectedValue(printer.inner_mac_address);
                            connectPrinter(printer);
                          }}
                          color="#007BFF"
                        />
                        <Text
                          style={
                            styles.radioLabel
                          }>{`device_name: ${printer.device_name}, inner_mac_address: ${printer.inner_mac_address}`}</Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </>
      </View>
      <View style={{position: 'absolute', bottom: 20, width: '100%'}}>
        <TouchableOpacity
          style={{marginRight: 15, marginLeft: 15}}
          onPress={() => printTextTest()}>
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
              PRINT
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
    height: 450,
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

export default PrintScreen;
