import React, { Component } from 'react';

import {
	Text
} from 'react-native';

import Card from './Card'
import CardSection from './CardSection'

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
	}

	render() {
			return (
				<Card>
					<CardSection>
						<Text>{this.props.article.name}</Text>
					</CardSection>

					<CardSection>
						<Text>{this.props.article.name}</Text>
					</CardSection>
				</Card>
			);
		}

}
