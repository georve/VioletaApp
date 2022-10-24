import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Calculator from './../screens/Calculator';
import SOSButton from './../screens/SOSButton';
import MapsScreen from './../screens/MapsScreen';

class Stack extends Component {
  render() {
    return <AppContainer />;
  }
}

const myStack = createStackNavigator(
  {
    Calculator: Calculator,
    SOSButton: SOSButton,
    MapsScreen: MapsScreen,
  },
  {
    initialRouteName: 'Calculator',
  },
);

const AppContainer = createAppContainer(myStack);

export default Stack;
