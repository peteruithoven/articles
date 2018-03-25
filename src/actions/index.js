import { RSAA } from 'redux-api-middleware';
const crypto = require('crypto');

export const LOAD_ARTICLES_REQUEST = 'LOAD_ARTICLES_REQUEST';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_FAILURE = 'LOAD_ARTICLES_FAILURE';

export function loadArticles(page) {
  const query = getQueryString({
    // TODO: move to env variables
    apiKey: 'b82f9cb6f4094c13aa002a3dff392def',
    q: 'sustainability',
    page,
    pageSize: 5
  })
  return {
    [RSAA]: {
      endpoint: `https://newsapi.org/v2/everything?${query}`,
      method: 'GET',
      types: [
        LOAD_ARTICLES_REQUEST,
        {
          type: LOAD_ARTICLES_SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => {
              return processArticles(json);
            })
          }
        },
        LOAD_ARTICLES_FAILURE
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

function processArticles(json) {
  return json.articles.reduce((data, article) => {
      const { title, description, publishedAt } = article;
      const id = generateArticleID(article);
      data[id] = {
        id,
        title,
        description,
        publishedAt
      };
      return data;
  }, {});
}

function generateArticleID(article){
  return crypto.createHash('md5').update(article.url).digest('hex');
}
