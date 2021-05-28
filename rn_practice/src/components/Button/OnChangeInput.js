import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const OnChangeInput = () => {
  const [value, setValue] = useState('');
  return (
    <View>
      <TextInput
        onChangeText={text => {
          setValue(text);
        }}
        placeholder="텍스트를 입력하세요"
        style={styles.input}
      />
      <Text>{value}</Text>
    </View>
  );
};

export default OnChangeInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: 200,
  },
});
