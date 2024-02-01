import React from 'react';
import { View, StyleSheet } from 'react-native';
const Badge = (props:any) => {
  return (
    <View style={{ ...styles.badge, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  badge: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 6
  }
});
export default Badge;