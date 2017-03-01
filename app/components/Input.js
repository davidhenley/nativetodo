import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'whitesmoke'
  }
})

export default class Input extends Component {
  state = {
    term: ''
  }

  render() {
    const { term } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          value={term}
          onChangeText={term => this.setState({ term })}
          placeholder={'Enter an item!'}
          style={styles.input} />
      </View>
    );
  }
}
