import React, { Component } from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
	ListView,
  TouchableOpacity,
  View
} from 'react-native';

import ArticleList  from '../../components/ArticleList';

const styles = require('../../assets/Styles.js');

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: "Search",
  };

  render() {
    return (
			<ArticleList />
    );
  }
}
