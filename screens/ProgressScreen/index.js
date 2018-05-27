import UserProgress  from '../../components/userProgress';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
	ListView,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = require('../../assets/Styles.js');

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Progress',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>
				This is where you will see a list of articles you are in the process of learning, as well as your performance on the related questions
				</Text>

      </ScrollView>
    );
  }
}
