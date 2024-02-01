import React from 'react';
import { View, StyleSheet } from 'react-native';
const HyperLink = (props:any) => {
  return (
    <View style={{ ...styles.hyperLink, ...props.style }}>{props.children}</View>  
  );
};
const styles = StyleSheet.create({
  hyperLink: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
export default HyperLink;