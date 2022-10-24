import React, {Component} from 'react';
import {StatusBar, StyleSheet, SafeAreaView, View,Modal} from 'react-native';

import Display from './../../components/Display';
import Buttons from './../../components/Buttons';
import colors from './../../utils/colors';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    display: '',
    result: '',
  };

  handleOperation = operation => {
    if (operation === 'C') {
      this.setState({
        display: '',
        result: '',
      });
      this.props.navigation.navigate('SOS');
    } else if (operation === '=') {
      this.setState({
        display: this.state.result,
        result: '',
      });
    } else {
      const display = this.state.display + operation;
      let result = this.state.result;
      try {
        let fixedOperation = display.split('×').join('*');
        fixedOperation = fixedOperation.split('÷').join('/');
        fixedOperation = fixedOperation.split(',').join('.');

        result = new String(eval(fixedOperation)).toString();
      } catch (e) {}
      this.setState({
        display,
        result,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Display state={this.state} />
        <Buttons operation={this.handleOperation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.darker,
  },
});