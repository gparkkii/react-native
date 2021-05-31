import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import styled from 'styled-components';
import Buttons from './src/components/Buttons';
import Dog from './src/components/Dog';
import DogButton from './src/components/DogButton';
import Form from './src/components/Form';
import Length from './src/components/Length';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [Count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StyledView>
        <ScrollView>
          <Title>Practice Hooks</Title>
          <Buttons
            title={isVisible ? 'UnMount' : 'Mount'}
            onPress={() => {
              setIsVisible(prev => !prev);
            }}
          />
          {isVisible && <Form />}
          <Title>Pressed {Count}</Title>
          <Buttons
            onPress={() => {
              setCount(prev => prev + 1);
              setCount(prev => prev + 1);
              console.log('add :', Count);
            }}
            title="+"
          />
          <Buttons
            onPress={() => {
              setCount(prev => prev - 1);
              setCount(prev => prev - 1);
              console.log('reduce:', Count);
            }}
            title="-"
          />
          <Length />
          <Dog />
          <DogButton />
        </ScrollView>
      </StyledView>
    </Container>
  );
};

export default App;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledView = styled.View`
  margin-top: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: #000;
`;
