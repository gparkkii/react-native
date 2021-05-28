import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const PressButton = () => {
  const [colors, setColors] = useState('#000');
  const [pressState, setPressState] = useState('Pressable Button');
  return (
    <View>
      <Pressable
        onPress={() => setPressState('onPress')}
        onLongPress={() => setPressState('onLongPress')}
        onPressOut={() => {
          setPressState('onPressOut');
          setColors('red');
        }}
        onPressIn={() => {
          setPressState('onPressIn');
        }}
        delayLongPress={5000}
        hitSlop={20}
      >
        <Text>{pressState}</Text>
      </Pressable>
    </View>
  );
};

export default PressButton;

const styles = StyleSheet.create({
  PressedText: {
    color: '#000',
  },
});
