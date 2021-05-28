import React from 'react';
import { Text, useColorScheme, StyleSheet, View } from 'react-native';
import OnChangeInput from '../../components/Button/OnChangeInput';
import TextButton from '../../components/Button/TextButton';
import PressButton from '../../components/Button/PressButton';

const Main = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <View style={styles.container}>
        <Text>Hello</Text>
        <OnChangeInput />
        <TextButton />
        <PressButton />
      </View>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
