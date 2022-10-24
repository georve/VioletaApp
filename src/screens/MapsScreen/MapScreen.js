import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Maps</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
