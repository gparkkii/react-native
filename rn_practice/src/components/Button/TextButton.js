import React from 'react';
import { Button, Alert } from 'react-native';

const TextButton = () => {
  return (
    <Button
      title="I am Text Button"
      onPress={() => Alert.alert('Simple Button pressed')}
    />
  );
};

export default TextButton;
