import React, { Component } from 'react';

import {
	ScrollView,
	View
} from 'react-native';

import ArticleDetail from './ArticleDetail'

const token =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTQ1OTAzNzIsImNsaWVudElkIjoiY2pic2swMXcxMTIwMzAxNzZ1ZDE2MTlndSJ9.9aX0fISOAXfhrdcga5ylwhwJhsA6QLEzjc1Rh1Te21U";
const endpoint = 'https://api.graph.cool/simple/v1/cjbsk01w112020176k3cqrytg';
// const memberId = this.props.memberId;


export default class ArticleList extends Component {
	  constructor(props) {
	    super(props);

	    this.state = {
				allArticles: [],
	    }

	  }

	async componentWillMount() {
		const articlesQuery = `
		query{
		  allArticles {
		    id
				name
		    program{
		      name
		      publisher{
		        name
		      }
		    }
		  }
		}
		`

		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Authorization': token,
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: articlesQuery,
				})
			});

			const data = JSON.parse(response._bodyInit).data

			this.setState({
				allArticles: data.allArticles,
			});

		} catch(error) {
			console.log(error);
		}
	}

	renderArticles() {
		return this.state.allArticles.map( article =>
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
