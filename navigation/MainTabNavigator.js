import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import SearchScreen from '../screens/SearchScreen';
import QuestionScreen from '../screens/QuestionScreen';
import ProgressScreen from '../screens/ProgressScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createBottomTabNavigator({
  Search: {
    screen: SearchScreen,
  },
  Questions: {
    screen: QuestionScreen,
  },
  Progress: {
    screen: ProgressScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case 'Search':
          iconName =
            Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search';
          break;
        case 'Questions':
          iconName =
            Platform.OS === 'ios' ? `ios-help-circle${focused ? '' : '-outline'}` : 'md-help-circle';
          break;
        case 'Progress':
          iconName = Platform.OS === 'ios' ? `ios-analytics${focused ? '' : '-outline'}` : 'md-analytics';
          break;
        case 'Settings':
          iconName =
            Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings';
          break;
        default:
          iconName =
          Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search';
      }
      return (
        <Ionicons
          name={iconName}
          size={28}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    },
  }),
  animationEnabled: false,
  swipeEnabled: false,
  initialRouteName: 'Questions',
},
);
