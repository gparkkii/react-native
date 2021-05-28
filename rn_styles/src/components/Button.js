import React, { useState } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import styled from 'styled-components';

const Button = ({ text }) => {
  const [opacity, setOpacity] = useState(false);
  return (
    <View>
      <StyledButton
        opacity={opacity}
        value={text}
        onPressIn={() => {
          setOpacity(!opacity);
        }}
        onPressOut={() => {
          setOpacity(!opacity);
        }}
      >
        <StyledText value={text}>{text}</StyledText>
      </StyledButton>
    </View>
  );
};

export default Button;

const StyledButton = styled.Pressable`
  width: ${responsiveWidth(80)}px;
  height: 48px;
  margin: 6px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.opacity ? 0.5 : 1)};
  ${props =>
    props.value === '로그인'
      ? { backgroundColor: '#867ae9' }
      : { border: '1px solid #867ae9' }}
`;

const StyledText = styled.Text`
  color: ${props => (props.value === '로그인' ? '#fff' : '#867ae9')};
  font-size: ${RFValue(14)}px;
  font-family: 'NotoSansKR-Regular';
`;
