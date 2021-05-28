import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { GlobalStyles, BoldText, ErrorText } from 'styles/Globalstyles';
import ShadowBox from 'components/ShadowBox';

const MainScreen = ({ style }) => {
  const [color, setColor] = useState(GlobalStyles.text);
  const [pressed, setPressed] = useState('press!');

  return (
    <View style={style}>
      <ShadowBox>
        <Pressable
          hitSlop={80}
          onPressIn={() => {
            setColor(GlobalStyles.error);
            setPressed('pressing!');
          }}
          onLongPress={() => {
            setPressed('too long!');
          }}
          onPressOut={() => {
            setPressed('press!');
            setColor(GlobalStyles.text);
          }}
        >
          <BoldText style={color}>{pressed}</BoldText>
        </Pressable>
      </ShadowBox>
      {pressed === 'too long!' && <ErrorText>Error</ErrorText>}
    </View>
  );
};

export default MainScreen;
