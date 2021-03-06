import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import ArticleDetail from './ArticleDetail';
import GraphService from '../service/GraphService';
// const memberId = this.props.memberId;

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
      isLoading: false,
    };
  }

  componentWillMount() {
    this.setState({
      isLoading: true,
    });

    GraphService.getAllArticles()
      .then(data => {
        this.setState({
          allArticles: data,
          isLoading: false,
        });
      }).catch(error => {
        this.setState({
          allArticles: [],
        });
      });
  }

  renderArticles() {
    if (this.state.isLoading) {
      return (
        <Text>
          Loading...
        </Text>
      );
    }
    if (this.state.allArticles.length === 0) {
      return (
        <Text>
          No articles to show here...
        </Text>
      );
    }
    return this.state.allArticles.map(article =>
      <ArticleDetail
        key={article.id}
        article={article}
      />
    );
  }


  render() {
    return (
      <View>
        {this.renderArticles()}
      </View>
    );
  }
}
