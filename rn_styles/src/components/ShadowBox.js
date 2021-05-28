import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

const ShadowBox = ({ children }) => {
  return <View style={styles.shadow}>{children}</View>;
};

export default ShadowBox;

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#1abf9c',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
