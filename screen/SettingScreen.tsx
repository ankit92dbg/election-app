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

const SettingScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.parent}>
          <View style={styles.child}>
            <View style={{marginTop:30,paddingLeft:15}}>
                <Text style={{color:'#FFFFFF'}}>{`Home > Settings`}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          top: '10%',
          width: '100%',
          height:'80%',
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
                <View style={{marginTop:22}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>SMS API</Text>
                </View>
                <View style={{marginTop:15}}>
                    <View>
                        <Text>API KEY</Text>
                        <TextInput
                        placeholder="API KEY"
                        placeholderTextColor={"gray"}
                        style={styles.input}
                        secureTextEntry
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <Text>Phone Number</Text>
                        <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor={"gray"}
                        style={styles.input}
                        secureTextEntry
                        />
                    </View>
                </View>
                <View style={{marginTop:40}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>WHATSAPP API</Text>
                </View>
                <View style={{marginTop:15}}>
                    <View>
                        <Text>API KEY</Text>
                        <TextInput
                        placeholder="API KEY"
                        placeholderTextColor={"gray"}
                        style={styles.input}
                        secureTextEntry
                        />
                    </View>
                    <View style={{marginTop:32}}>
                    <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('DashboardScreen')}}>
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
    backgroundColor: "#ebe6e6",
    color: "#121F26",
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
    backgroundColor: "#288BC6",
    width: 340,
  },
  btnText: { color: "#FFFFFF", textAlign: "center", fontSize: 18 },
});

export default SettingScreen;
