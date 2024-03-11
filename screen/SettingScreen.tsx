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
import { Dropdown } from 'react-native-element-dropdown';
import Card from '../components/Card';
import Badge from '../components/Badge';
import HyperLink from '../components/HyperLink';
import Icon from 'react-native-vector-icons/FontAwesome';
import { retrieveSelectedLanguage, storeSelectedLanguage } from '../utils';
import Snackbar from 'react-native-snackbar';
import Loader from '../components/Loader';


const SettingScreen = ({navigation}: {navigation: any}) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [state, setState] = React.useState('');
  const [loading, setLoading] = React.useState(false);


  React.useEffect(()=>{
    checkLanguage()
  },[])

  const checkLanguage = async() =>{
    const session : any = await retrieveSelectedLanguage()
    setState(session?.language)
  }

  const languageList = [
    {
      "label" : "English",
      "value" : "English"
    },
    {
      "label" : "Hindi",
      "value" : "Hindi"
    }
  ]

  const saveLanguage = async() =>{
    const lang = {"language" : state}
    await storeSelectedLanguage(lang);
    setTimeout(() => {
      setLoading(false);
      Snackbar.show({
        text: 'Language saved successfully !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#3db362',
      });
    }, 1000);
  }

  return (
    <View style={styles.mainContainer}>
      <Loader loading={loading} />
      <View style={styles.innerContainer}>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={{marginTop: 30, paddingLeft: 15}}>
              <Text style={{color: '#FFFFFF'}}>{`Home > Settings`}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          top: '10%',
          width: '100%',
          height: '80%',
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
              <View style={{marginTop: 22}}>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#4e4f4f'}}>
                  Select Language
                </Text>
                <Dropdown
                        style={[styles.topSearchDropdown, {marginTop: 8}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={languageList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select Language' : '...'}
                        searchPlaceholder="Search..."
                        value={state}
                        onChange={(item: any) => {
                          setState(item.value);
                          setIsFocus(false);
                        }}
                      />
              </View>
              {/* <View style={{marginTop: 15}}>
                <View>
                  <Text
                    style={{
                      color: '#4e4f4f',
                    }}>
                    API KEY
                  </Text>
                  <TextInput
                    placeholder="API KEY"
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
                    Phone Number
                  </Text>
                  <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
              </View>
              <View style={{marginTop: 22}}>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#4e4f4f'}}>
                  SMS API
                </Text>
              </View>
              <View style={{marginTop: 15}}>
                <View>
                  <Text
                    style={{
                      color: '#4e4f4f',
                    }}>
                    API KEY
                  </Text>
                  <TextInput
                    placeholder="API KEY"
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
                    Phone Number
                  </Text>
                  <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
              </View>
              <View style={{marginTop: 40}}>
                <Text
                  style={{fontSize: 16, fontWeight: '600', color: '#4e4f4f'}}>
                  WHATSAPP API
                </Text>
              </View>
              <View style={{marginTop: 15}}>
                <View>
                  <Text
                    style={{
                      color: '#4e4f4f',
                    }}>
                    API KEY
                  </Text>
                  <TextInput
                    placeholder="API KEY"
                    placeholderTextColor={'gray'}
                    style={styles.input}
                    secureTextEntry
                  />
                </View>
              </View> */}
              <View style={{marginTop: 32}}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    saveLanguage()
                  }}>
                  <Text style={styles.btnText}>Update</Text>
                </TouchableOpacity>
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
    width: '95%',
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

export default SettingScreen;
