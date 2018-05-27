import React from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';

import UserProgress from '../../components/userProgress';

const styles = require('../../assets/Styles.js');

export default class ProgressScreen extends React.Component {
  static navigationOptions = {
    title: 'Progress',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>
          This is where you will see a list of articles you are in the process of learning,
          as well as your performance on the related questions. You may also decide to skip content
        </Text>

      </ScrollView>
    );
  }
}
