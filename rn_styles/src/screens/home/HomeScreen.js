import React from 'react';
import Button from 'components/Button';
import { Text, View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';

const HomeScreen = ({ style }) => {
  return (
    <View style={style}>
      <View style={styles.top}>
        <Text style={styles.title}>APP</Text>
      </View>
      <View style={styles.bottom}>
        <Button text="로그인" />
        <Button text="회원가입" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  top: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: RFValue(40),
    color: '#867ae9',
  },
});
