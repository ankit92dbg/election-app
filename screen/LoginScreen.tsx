import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.bulbContainer}>
        <View style={styles.bulbInnerContainer}>
          <View style={styles.bulbView}>
            <Animated.Image
              entering={FadeInUp.delay(400).duration(1000).springify()}
              source={require("../assets/images/light.png")}
              style={styles.bulbOne}
            />
          </View>
          <View style={styles.bulbView}>
            <Animated.Image
              entering={FadeInUp.delay(500).duration(1000).springify()}
              source={require("../assets/images/light.png")}
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
            source={require("../assets/images/background.png")}
            style={styles.coverImage}
          />
        </View>
        <View style={{ marginTop: 300 }}>
          <Animated.View entering={FadeInDown.duration(1000).springify()}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              placeholderTextColor={"gray"}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              style={styles.input}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
          >
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Home')}}>
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
    flexDirection: "column",
  },
  bulbInnerContainer: {
    flexDirection: "row",
    position: "absolute",
  },
  bulbView: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  bulbOne: {
    position: "absolute",
    top: 0,
    height: 160,
    resizeMode: "contain",
  },
  bulbTwo: {
    position: "absolute",
    top: 0,
    height: 120,
    resizeMode: "contain",
  },
  loginTextView: {
    zIndex: 2,
    top: 200,
    alignContent: "center",
    alignItems: "center",
  },
  loginText: { fontSize: 34, fontWeight: "600", color: "#FFFFFF" },
  coverView: {
    position: "absolute",
  },
  coverImage: { resizeMode: "contain", height: 900 },
  loginBox: {
    flex: 1,
    alignItems: "center",
  },
  topCover: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 9,
    height: 50,
    marginTop: 15,
    padding: 16,
    backgroundColor: "#DEDEDE",
    color: "#121F26",
    width: 340,
  },
  btn: {
    borderRadius: 9,
    height: 60,
    marginTop: 20,
    padding: 16,
    backgroundColor: "#288BC6",
    width: 340,
  },
  btnText: { color: "#FFFFFF", textAlign: "center", fontSize: 18 },
});

export default LoginScreen;
