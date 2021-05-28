import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components';

export const GlobalStyles = StyleSheet.create({
  text: {
    padding: 10,
    color: '#505050',
  },
  error: {
    padding: 10,
    color: 'navy',
  },
});

export const whiteText = css`
  color: #fff;
  font-size: ${RFValue(30)}px;
`;

export const BoldText = styled.Text`
  ${whiteText}
  font-family: 'NotoSansKR-Bold';
`;

export const MediumText = styled.Text`
  ${whiteText}
  font-family: 'NotoSansKR-Medium';
`;

export const RegularText = styled.Text`
  ${whiteText}
  font-family: 'NotoSansKR-Regular';
`;

export const LightText = styled.Text`
  ${whiteText}
  font-family: 'NotoSansKR-Light';
`;

export const ErrorText = styled(BoldText)`
  color: red;
  margin-top: 20px;
`;
