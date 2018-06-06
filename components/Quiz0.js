import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import 'moment-timezone';
import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from './animbutton';

const { width } = Dimensions.get('window');
const B = (props) => <Text style={{ fontWeight: 'bold' }}>{ props.children }</Text>;

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.questionNumber = 0;
    this.testNumber = 0;
    this.score = 0;
    this.state = {
      data: null,
      allQuestions: {},
      addedToRecall: null,
      articleName: null,
      programName: null,
      publisherName: null,
      question: '',
      options: {},
      correctoption: '',
      countCheck: 0,
      quizLength: 0,
      testLength: 0,
      totalTestCount: 0,
    };
  }

  componentWillMount() {
    const todayDate = moment.tz('America/New_York').format("YYYY-MM-DD");
    const tomorrowDate = moment.tz('America/New_York').add(1, 'd').format("YYYY-MM-DD");

  prev = () => {
    if (this.questionNumber > 0) {
      this.questionNumber--
      this.setState({
				question: this.state.data.allQuestions[this.questionNumber].fullText,
				options : arrayToObj(this.state.data.allQuestions[this.questionNumber].possibleAnswers, function( item ) {
	         return {key:item.value, value:item.value};
	      }),
				correctoption : this.state.data.allQuestions[this.questionNumber].correctAnswer.value,
			})
    }
  }
  next = () => {
	//	first check to see if the test is over, if it is over, then move on to the next test, if this is the last test, then submit complete
		if (this.questionNumber >= this.state.testLength - 1 && this.testNumber >= this.totalTestCount) {
			// TODO: display done and submit
			this.props.quizFinish(this.score*100/this.state.quizLength)
		} else if (this.questionNumber >= this.state.testLength - 1) {
			this.testNumber++;
			this.questionNumber = 0
			this.setState((prevState) => ({
				countCheck: 0,
				question: this.state.data.allTests[this.testNumber].questions[this.questionNumber].fullText,
				options : arrayToObj(this.state.data.allTests[this.testNumber].questions[this.questionNumber].possibleAnswers, function( item ) {
					 return {key:item.value, value:item.value};
				}),
				correctoption : this.state.data.allTests[this.testNumber].questions[this.questionNumber].correctAnswer.value,
			}))
		} else if (this.questionNumber < this.state.testLength - 1) {
			this.questionNumber++
			this.setState((prevState) => ({
				countCheck: 0,
				question: this.state.data.allTests[this.testNumber].questions[this.questionNumber].fullText,
				options : arrayToObj(this.state.data.allTests[this.testNumber].questions[this.questionNumber].possibleAnswers, function( item ) {
					 return {key:item.value, value:item.value};
				}),
				correctoption : this.state.data.allTests[this.testNumber].questions[this.questionNumber].correctAnswer.value,
			}))
		}
	}

  _answer( status, answer ) {
    if (status == true) {
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(answer == this.state.correctoption ){
          this.score += 1
        }
      } else {
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || answer == this.state.correctoption){
        this.score -= 1
       }
      }

  }

  render() {
    let _this = this
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(function( option ) {
      return (
				<View key={option} style={styles.possibleAnswers}>
        	<Animbutton countCheck={_this.state.countCheck} onColor={"blue"} effect={"pulse"} _onPress={(status) => _this._answer(status, option)} text={currentOptions[option]} />
      	</View>
			)
    });

		if ( this.state.data == null) {
			return (
				<ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 10}}>
				<View style={styles.container}>
					<View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
						<View style={styles.displayQuestionBox} >
							<Text style={styles.displayQuestionText}>
								No questions today :(
							</Text>
						</View>
					</View>
				</View>
				</ScrollView>
			);
		} else {
    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 10}}>
      <View style={styles.container}>
      	<View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
		      <View style={styles.displayQuestionBox} >
		        <Text style={styles.displayQuestionText}>
		          {this.state.question}
		        </Text>
		     	</View>
      	<View>
        { options }
      </View>
        <View style={{flexDirection:"row"}}>

				<TouchableOpacity onPress={() => this.prev()} >
          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, marginRight:20, backgroundColor:"#f08080"}}>
            <Icon name="md-arrow-round-back" size={30} color="white" />
          </View>
        </TouchableOpacity >


        <TouchableOpacity onPress={() => this.next()} >
          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, paddingLeft: 20, borderRadius:10, marginLeft:20, backgroundColor:"#90ee90"}}>
            <Icon name="md-arrow-round-forward" size={30} color="white" />
          </View>
        </TouchableOpacity >
        </View>
        </View>
				<View style={styles.seenContentBox}>
					<Text style={styles.seenContent} >*This question comes <B>from...</B></Text>
					<Text style={styles.seenContent} >{this.state.publisherName} - {this.state.programName} - {this.state.articleName}</Text>
					<Text style={styles.seenContent} >Which you added to Recall on {this.state.addedToRecall}</Text>
				</View>
      </View>
      </ScrollView>
    );
  }
}
}


function arrayToObj (array, fn) {
    var obj = {};
    var len = array.length;
    for (var i = 0; i < len; i++) {
        var item = fn(array[i], i, array);
        obj[item.key] = item.value;
    }
    return obj;
};

function countProperties(obj) {
    var count = 0;
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            count++;
    }
    return count;
}

const styles = StyleSheet.create({
  displayQuestionBox: {
	  width: width * 95/100,
	  borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
	seenContentBox: {
		marginTop: 30,
	},
	seenContent: {
		fontSize: 15,
		color: "grey"
	},
  displayQuestionText: {
    fontSize: 20,
    margin: 15,
    color: "grey"
  },
	possibleAnswers: {
    margin: 15,
	},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
