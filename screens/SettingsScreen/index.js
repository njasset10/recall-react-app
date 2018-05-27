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


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
		return (
			<View>
	    	<Text>
				First Name:
				Last Name:
				Phone Number:
				Email: 
				</Text>
			</View>
		);
  }
}
