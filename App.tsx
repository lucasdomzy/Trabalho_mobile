import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'font': require('./assets/fonts/font.ttf'),
  });
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;