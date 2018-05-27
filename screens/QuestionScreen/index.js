import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import Quiz from '../../components/Quiz';

const styles = require('../../assets/Styles.js');

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Today Questions',
  };

  render() {
    return (
      <View>
        <Quiz />
      </View>
    );
  }
}
