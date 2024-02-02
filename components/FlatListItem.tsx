import React from 'react';
import { View, StyleSheet } from 'react-native';
const FlatListItem = (props:any) => {
  return (
    <View style={{ ...styles.itemList, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  itemList: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 2
  }
});
export default FlatListItem;