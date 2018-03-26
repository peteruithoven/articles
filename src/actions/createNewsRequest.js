import { RSAA } from 'redux-api-middleware';
const crypto = require('crypto');

// generate News API request action for redux-api-middleware
export default function createNewsRequest(params, actionTypes) {
  console.log('createNewsRequest: ', params);
  const queryString = getQueryString({
    apiKey: process.env.REACT_APP_API_KEY,
    // Note: limiting to one source to work around
    // publishedAt sorting inconsistency
    sources: 'cnn',
    ...params
  })
  const [ requestType, successType, failureType ] = actionTypes;
  return {
    [RSAA]: {
      endpoint: `https://newsapi.org/v2/everything?${queryString}`,
      method: 'GET',
      types: [
        requestType,
        {
          type: successType,
          payload: (action, state, res) => {
            return processResponse(res)
          }
        },
        failureType
      ]
    }
  }
}

function getQueryString(params) {
  var esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}

function processResponse(res) {
  return res.json().then(json => {
    const { totalResults, articles } = json;
    return {
      totalResults,
      articles: articles.reduce((data, article) => {
        const { title, description, publishedAt } = article;
        const id = generateArticleID(article);
        data[id] = {
          id,
          title,
          description,
          publishedAt
        };
        return data;
      }, {})
    }
  })
}

// generate id's by hashing url
function generateArticleID(article){
  return crypto.createHash('md5').update(article.url).digest('hex');
}
