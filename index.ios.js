import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just big blue</Text>
        <Text style={[styles.bigblue, styles.red]}>big blue then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red then big blue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red'
  }
});

AppRegistry.registerComponent('ReactPlayground', () => LotsOfStyles);
