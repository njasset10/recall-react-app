import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class CardSection extends Component {
	constructor(props) {
		super(props);
	}

	render() {

			return (
				<View style={styles.constainerStyle}>
					{this.props.children}
				</View>
			);
		}


};


const styles = {
	constainerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
}
