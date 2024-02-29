import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
const Loader = (props:any) => {
  return (
    <>
    {props?.loading && (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={'#fff'} />
        <Text style={styles.indicatorText}>{props?.text}</Text>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000000',
    opacity:0.7,
    zIndex:999999,
  },
  indicatorText:{
    marginTop:10,
    color:'#fff',
    fontSize:14,
    fontWeight:'500',
  }
});
export default Loader;
