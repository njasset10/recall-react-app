import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import 'moment-timezone';
import Icon from 'react-native-vector-icons/Ionicons';

import DisplayNoQuestions from './DisplayNoQuestions';
import quizStyles from '../styles/styleSheet';

const styles = quizStyles.makeStyleSheet;

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'ull',
    };
  }

  componentWillMount() {
    const todayDate = moment.tz('America/New_York').format('YYYY-MM-DD');
    const tomorrowDate = moment.tz('America/New_York').add(1, 'd').format('YYYY-MM-DD');
  }

  render() {
    if (this.state.data === null) {
      return (
        <DisplayNoQuestions />
      );
    }
    return (
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.container}>
          <View style={styles.box}>

            <View style={styles.displayQuestionBox} >
              <Text style={styles.displayQuestionText}>
                Is this an interesting question?
              </Text>
            </View>

            <View>
              <Text>
                Options will go here
              </Text>
            </View>

            <View style={styles.forwardAndBackSection}>

              <TouchableOpacity onPress={() => this.prev()} >
                <View style={styles.previousButton}>
                  <Icon
                    name="md-arrow-round-back"
                    size={30}
                    color="white"
                  />
                </View>
              </TouchableOpacity >

              <TouchableOpacity onPress={() => this.next()} >
                <View style={styles.nextButton}>
                  <Icon name="md-arrow-round-forward" size={30} color="white" />
                </View>
              </TouchableOpacity >
            </View>
          </View>

          <View style={styles.seenContentBox}>
            <Text style={styles.seenContent}>*This question comes from...</Text>
            <Text style={styles.seenContent}>{this.state.publisherName} - {this.state.programName} - {this.state.articleName}</Text>
            <Text style={styles.seenContent}>Which you added to Recall on {this.state.addedToRecall}</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}
