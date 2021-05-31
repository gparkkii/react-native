import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const refName = useRef(null);
  const refEmail = useRef(null);

  // useEffect(() => {
  //   console.log(`name: ${name}, email: ${email}`);
  // }, [email]);

  useEffect(() => {
    console.log('=========mount=========');
    refName.current.focus();
    return () => {
      console.log('=========unmount==========');
    };
  }, []);

  return (
    <View>
      <StyledText>Name: {name}</StyledText>
      <StyledInput
        ref={refName}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="name"
        returnKeyType="next"
        onSubmitEditing={() => refEmail.current.focus()}
      />
      <StyledText>Email: {email}</StyledText>
      <StyledInput
        ref={refEmail}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="email"
        returnKeyType="done"
        onSubmitEditing={() => {
          setEmail('');
          setName('');
        }}
      />
    </View>
  );
};

export default Form;

const StyledInput = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
})`
  border: 1px solid #757575;
  padding: 10px;
  margin: 10px 0px;
  width: 200px;
  font-size: 20px;
`;

const StyledText = styled.Text`
  font-size: 12px;
  margin: 2px 0px;
`;
