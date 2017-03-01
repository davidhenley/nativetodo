import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: 'white'
  }
});

export default class Title extends Component {

  render() {
    const { children } = this.props;
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{children}</Text>
      </View>
    );
  }
}
