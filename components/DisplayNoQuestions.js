import React from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import quizStyles from '../styles/styleSheet';

const styles = quizStyles.makeStyleSheet();

const DisplayNoQuestions = () => (
  <ScrollView style={styles.scrollViewStyle}>
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.displayQuestionBox} >
          <Text style={styles.displayQuestionText}>
            No questions today - check out your progress!
          </Text>
        </View>
      </View>
    </View>
  </ScrollView>
);

export default DisplayNoQuestions;
