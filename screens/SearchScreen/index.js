import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import ArticleList from '../../components/ArticleList';

const styles = require('../../assets/Styles.js');

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <View>
        <Text>
          First Name:
          Last Name:
          Phone Number:
          Email:
        </Text>
        <ArticleList />
      </View>
    );
  }
}
