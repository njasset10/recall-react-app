import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import quizStyles from '../styles/styleSheet';

const styles = quizStyles.makeStyleSheet();

export default class Animbutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  onTap() {
    this.props.onTap(!this.state.status);
    this.setState({
      status: !this.state.status,
    });
    switch (this.props.effect) {
      default: this.refs.view.bounce(800);
        break;
      case 'bounce':
        this.refs.view.bounce(800);
        break;
      case 'flash':
        this.refs.view.flash(800);
        break;
      case 'jello':
        this.refs.view.jello(800);
        break;
      case 'pulse':
        this.refs.view.pulse(400);
        break;
      case 'rotate':
        this.refs.view.rotate(800);
        break;
      case 'rubberBand':
        this.refs.view.rubberBand(800);
        break;
      case 'shake':
        this.refs.view.shake(800);
        break;
      case 'swing':
        this.refs.view.swing(800);
        break;
      case 'tada':
        this.refs.view.tada(800);
        break;
      case 'wobble':
        this.refs.view.wobble(800);
        break;
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.onTap()}>
        <Animatable.View
          ref="view"
          style={this.state.status ? styles.correctSelection : styles.unselectedButton}
        >
          <Text
            style={this.state.status ? styles.selectedText : styles.unselectedText}
          >
            {this.props.text}
          </Text>
        </Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}
