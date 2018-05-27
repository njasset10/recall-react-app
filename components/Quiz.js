import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import 'moment-timezone';
import Icon from 'react-native-vector-icons/Ionicons';

const B = (props) => <Text style={{ fontWeight: 'bold' }}>{ props.children }</Text>;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  displayQuestionBox: {
    width: width * 95 / 100,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  seenContentBox: {
    marginTop: 30,
  },
  seenContent: {
    fontSize: 15,
    color: 'grey',
  },
  displayQuestionText: {
    fontSize: 20,
    margin: 15,
    color: 'grey',
  },
  possibleAnswers: {
    margin: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  box: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollViewStyle: {
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
  },
  forwardAndBackSection: {
    flexDirection: 'row',
  },
  previousButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: '#f08080',
  },
  nextButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    marginLeft: 20,
    backgroundColor: '#90ee90',
  },
});

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
            <Text style={styles.seenContent}>*This question comes <B from="from..." /> </Text>
            <Text style={styles.seenContent}>{this.state.publisherName} - {this.state.programName} - {this.state.articleName}</Text>
            <Text style={styles.seenContent}>Which you added to Recall on {this.state.addedToRecall}</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}


function arrayToObj(array, fn) {
  const obj = {};
  const len = array.length;
  for (let i = 0; i < len; i += 1) {
    const item = fn(array[i], i, array);
    obj[item.key] = item.value;
  }
  return obj;
}
