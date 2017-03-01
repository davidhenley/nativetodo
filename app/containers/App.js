import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import Title from '../components/Title';
import Footer from '../components/Footer';
import Input from '../components/Input';

import { actionCreators } from '../redux/todoRedux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Title>
          Todo List
        </Title>
        <Input />
        <ScrollView />
        <Footer>
          Remove completed items
        </Footer>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
