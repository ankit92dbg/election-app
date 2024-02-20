import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
const Loader = (props:any) => {
  return (
    <>
    {props?.loading && (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={'#fff'} />
      </View>
    )}  
    </>
  );
};
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000',
    opacity:0.7,
    zIndex:9999
  },
});
export default Loader;
