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
import Animbutton from './animbutton';

import DisplayNoQuestions from './DisplayNoQuestions';
import quizStyles from '../styles/styleSheet';

const styles = quizStyles.makeStyleSheet();

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'ull',
      possibleAnswers: { Yes1: 'Yes', No1: 'No' },
      selectedAnswer: '',
      correctAnswer: '',
    };
  }

  componentWillMount() {
    // decide which questions to show the user
    const todayDate = moment.tz('America/New_York').format('YYYY-MM-DD');
    const tomorrowDate = moment.tz('America/New_York').add(1, 'd').format('YYYY-MM-DD');
  }

  evaluateResponse(status, answer) {
    if (status) {
      this.setState({
        selectedAnswer: answer,
      });
    }
    // if any other status' are true - turn that one off and turn the new one on
    // set state for all the other animbuttons to false
    console.log(this.state.selectedAnswer);
  }

  submitResponse(status, answer) {
    if (this.state.correctAnswer === answer) {
      // tell the user if it's correct or not then
    }
    // make mutation on database // handle response
  }

  render() {
    const possibleAnswersFromState = this.state.possibleAnswers;
    const possibleAnswers = Object.keys(this.state.possibleAnswers).map((possibleAnswer) => (
      <View key={possibleAnswer} style={styles.possibleAnswers}>
        <Animbutton
          countCheck={this.state.countCheck}
          onColor="blue"
          effect="pulse"
          onTap={(status) => this.evaluateResponse(status, possibleAnswer)}
          text={possibleAnswersFromState[possibleAnswer]}
        />
      </View>
    ),
    );

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
              {possibleAnswers}
            </View>
            <View key="submit" style={styles.possibleAnswers}>
              <Animbutton
                onColor="blue"
                effect="pulse"
                text="Submit and Next Question"
                onTap={(status) => this.submitResponse(status, 'null')}
              />
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
            <Text style={styles.seenContent}>This question comes from...</Text>
            <Text style={styles.seenContent}>{this.state.publisherName} - {this.state.programName} - {this.state.articleName}</Text>
            <Text style={styles.seenContent}>Which you added to Recall on {this.state.addedToRecall}</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}
