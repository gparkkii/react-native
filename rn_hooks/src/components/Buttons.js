import React from 'react';
import styled from 'styled-components';

const Buttons = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Buttons;

const Container = styled.Pressable`
  display: flex;
  background-color: #3498db;
  border-radius: 30px;
  margin: 10px 0px;
  width: 100px;
  height: 48px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;
