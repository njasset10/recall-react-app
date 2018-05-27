import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native';


export default class SettingsScreen extends Component {
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
