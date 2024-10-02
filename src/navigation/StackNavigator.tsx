import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ContatosScreen from '../screens/ContatosScreen/ContatosScreen';
import HabilidadesScreen from '../screens/HabilidadesScreen/HabilidadesScreen';

export type RootStackParamList = {
  Home: undefined;
  Contatos: undefined;
  Habilidades: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Contatos" component={ContatosScreen} />
      <Stack.Screen name="Habilidades" component={HabilidadesScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;