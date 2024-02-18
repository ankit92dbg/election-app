import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import Snackbar from 'react-native-snackbar';
import Loader from '../components/Loader';
import { postRequest } from '../networkInterface';
import { retrieveUserSession, storeUserSession } from '../utils';

const LoginScreen = ({navigation}: {navigation: any}) => {
  // const dispatch = useDispatch();
  // const {data} = useSelector((state: any) => state?.BMData);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(()=>{
    checkLogin()
  },[])

  const checkLogin = async() =>{
    const session : any = await retrieveUserSession()
    if(Object.keys(session).length > 0){
      navigation.navigate('Home');
    }
  }

  const handleLogin = async() => {
    if (email == '') {
      Snackbar.show({
        text: 'Please enter your email !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    if (password == '') {
      Snackbar.show({
        text: 'Please enter your password !',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#e33443',
      });
      return false;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response : any = await postRequest('login.php',formData)
    if(response?.message=='success'){
          await storeUserSession(response?.data);
          setTimeout(() => {
            setLoading(false);
            Snackbar.show({
              text: 'Logged in successfully !',
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: '#3db362',
            });
          }, 1000);
          setTimeout(() => {
            navigation.navigate('Home');
          }, 2000);
    }else if(response?.message=='Invalid email or password!'){
          setTimeout(() => {
            setLoading(false);
            Snackbar.show({
              text: response?.data?.message,
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: '#e33443',
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

  // const getBM = async()=>{
  //   dispatch(await getAllBM({ leader_id: 17 }))
  //   console.warn('sss',data)
  // }


  return (
    <View style={styles.mainContainer}>
      <Loader loading={loading} />
      <View style={styles.bulbContainer}>
        <View style={styles.bulbInnerContainer}>
          <View style={styles.bulbView}>
            <Animated.Image
              entering={FadeInUp.delay(400).duration(1000).springify()}
              source={require('../assets/images/light.png')}
              style={styles.bulbOne}
            />
          </View>
          <View style={styles.bulbView}>
            <Animated.Image
              entering={FadeInUp.delay(500).duration(1000).springify()}
              source={require('../assets/images/light.png')}
              style={styles.bulbTwo}
            />
          </View>
        </View>
        <View style={styles.loginTextView}>
          <Animated.View entering={FadeInDown.duration(1000).springify()}>
            <Text style={styles.loginText}>Login</Text>
          </Animated.View>
        </View>
      </View>
      <View style={styles.topCover}>
        <View style={styles.coverView}>
          <Animated.Image
            entering={FadeInUp.delay(200).duration(1000).springify()}
            source={require('../assets/images/background.png')}
            style={styles.coverImage}
          />
        </View>
        <View style={{marginTop: 300}}>
          <Animated.View entering={FadeInDown.duration(1000).springify()}>
            <TextInput
              placeholder="Email"
              onChangeText={value => {
                setEmail(value);
              }}
              style={styles.input}
              placeholderTextColor={'gray'}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}>
            <TextInput
              placeholder="Password"
              onChangeText={value => {
                setPassword(value);
              }}
              placeholderTextColor={'gray'}
              style={styles.input}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                handleLogin();
              }}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bulbContainer: {
    zIndex: 1,
    flexDirection: 'column',
  },
  bulbInnerContainer: {
    flexDirection: 'row',
    position: 'absolute',
  },
  bulbView: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  bulbOne: {
    position: 'absolute',
    top: 0,
    height: 160,
    resizeMode: 'contain',
  },
  bulbTwo: {
    position: 'absolute',
    top: 0,
    height: 120,
    resizeMode: 'contain',
  },
  loginTextView: {
    zIndex: 2,
    top: 200,
    alignContent: 'center',
    alignItems: 'center',
  },
  loginText: {fontSize: 34, fontWeight: '600', color: '#FFFFFF'},
  coverView: {
    position: 'absolute',
  },
  coverImage: {resizeMode: 'contain', height: 900},
  loginBox: {
    flex: 1,
    alignItems: 'center',
  },
  topCover: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 9,
    height: 50,
    marginTop: 15,
    padding: 16,
    backgroundColor: '#DEDEDE',
    color: '#121F26',
    width: 340,
  },
  btn: {
    borderRadius: 9,
    height: 60,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#288BC6',
    width: 340,
  },
  btnText: {color: '#FFFFFF', textAlign: 'center', fontSize: 18},
});

export default LoginScreen;
