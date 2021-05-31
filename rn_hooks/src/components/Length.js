/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Buttons from './Buttons';

const Length = () => {
  const getLength = text => {
    console.log(`Target Text : ${text}`);
    return text.length;
  };

  const List = ['JavaScript', 'Expo', 'Expo', 'React Native'];
  let idx = 0;

  const [text, setText] = useState(List[0]);
  const [length, setLength] = useState('');

  const onPressText = () => {
    ++idx;
    if (idx < List.length) {
      setText(List[idx]);
    }
    // const length = useMemo(() => getLength(text), [text]);
  };

  return (
    <View>
      <StyledText>useMemo</StyledText>
      <StyledText>Text: {text}</StyledText>
      <StyledText>Length: {length}</StyledText>
      <Buttons title="Length" onPress={onPressText} />
    </View>
  );
};

export default Length;

const StyledText = styled.Text`
  font-size: 15px;
`;
