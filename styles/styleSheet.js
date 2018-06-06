import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default {
  makeStyleSheet() {
    return (
      StyleSheet.create({
        correctSelection: {
          margin: 10,
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 20,
          paddingLeft: 20,
          backgroundColor: 'blue',
          borderRadius: 20,
        },
        unselectedButton: {
          margin: 10,
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 20,
          paddingLeft: 20,
          backgroundColor: '#bdbdbd',
          borderRadius: 20,
        },
        selectedText: {
          color: 'white',
          fontWeight: 'bold',
        },
        unselectedText: {
          color: '#696969',
          fontWeight: 'bold',
        },
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
      })
    );
  },
};
