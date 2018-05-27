import fetch from 'isomorphic-fetch';

const GRAPH_ENDPOINT = 'https://api.graph.cool/simple/v1/cjbsk01w112020176k3cqrytg';
const GRAPH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTQ1OTAzNzIsImNsaWVudElkIjoiY2pic2swMXcxMTIwMzAxNzZ1ZDE2MTlndSJ9.9aX0fISOAXfhrdcga5ylwhwJhsA6QLEzjc1Rh1Te21U';

const ARTICLES_QUERY = `
  query {
    allArticles {
      id
      title
      program{
        name
        publisher{
          name
        }
      }
    }
  }
`;

export default {
  getAllArticles() {
    return fetch(GRAPH_ENDPOINT, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: GRAPH_TOKEN,
      },
      body: JSON.stringify({ query: ARTICLES_QUERY }),
    }).then((response) => response.json()).then(data => {
      const articles = data.data.allArticles;
      return articles;
    });
  },
};
