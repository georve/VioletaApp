import React, {Component} from 'react';
import {Text, View} from 'react-native';
export default class SOSButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'SOS',
    };
  }


  render() {
    return (
      <View style={styles.welcome}>
        <Text style={styles.welcome}>SOS</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
