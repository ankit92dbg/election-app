/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { LoginStack } from './NavigationStack';
import { InnerStack } from './NavigationStack';
import EncryptedStorage from "react-native-encrypted-storage";


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  if (__DEV__) {
    import("./ReactotronConfig").then(() => {});
  }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
     <View style={{flex:1}}>
        {/* <NavigationContainer>
          {!isLoggedIn ? (
          <LoginStack />
          ) : (
            <InnerStack />
          )}
        </NavigationContainer> */}
        <NavigationContainer>
          <InnerStack />
        </NavigationContainer>
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex:1
  }
});

export default App;
