import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import HomeScreen from './src/screens/home/HomeScreen';
import MainScreen from './src/screens/main/MainScreen';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import { darkTheme, lightTheme } from './src/styles/theme';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'light' ? lightTheme : darkTheme}>
      <SafeAreaWrapper>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <Header style={[styles.header, styles.common]} />
        <HomeScreen style={[styles.content, styles.common]} />
        {/* <MainScreen style={[styles.content, styles.common]} /> */}
        <Footer style={[styles.footer, styles.common]} />
      </SafeAreaWrapper>
    </ThemeProvider>
  );
};

export default App;

const SafeAreaWrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.background};
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  common: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 60,
  },
  content: {
    flex: 1,
  },
  footer: {
    height: 60,
  },
});
