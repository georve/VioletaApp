import React, {Component} from 'react';
import Calculator from './src/screens/Calculator';
import SOSButton from './src/screens/SOSButton';
import MapsScreen from './src/screens/MapsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Calculadora'}>
          <Stack.Screen name="Calculadora" component={Calculator} />
          <Stack.Screen name="SOS" component={SOSButton} />
          <Stack.Screen name="Mapa" component={MapsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
