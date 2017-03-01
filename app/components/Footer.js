import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  footerText: {
    color: 'red'
  }
});

export default class Footer extends Component {
  render() {
    const { children } = this.props;
    return (
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footerText}>{ children }</Text>
      </TouchableOpacity>
    );
  }
}
