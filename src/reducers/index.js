import { combineReducers } from 'redux';
import arrayMemoizer from '../utils/arrayMemoizer.js';
import * as actions from '../actions';
import articles from './articles.js';
import paginate from './paginate.js';
import * as constants from '../constants.js';

export default combineReducers({
  entities: combineReducers({
    articles
  }),
  list: paginate([
    actions.LOAD_ARTICLES_REQUEST,
    actions.LOAD_ARTICLES_SUCCESS,
    actions.LOAD_ARTICLES_FAILURE
  ]),
  search: paginate([
    actions.SEARCH_REQUEST,
    actions.SEARCH_SUCCESS,
    actions.SEARCH_FAILURE
  ])
})

// selectors
const getArticles = state => state.entities.articles;
export const getArticle = (state, id) => getArticles(state)[id];
export const getArticlesList = arrayMemoizer(state => (
  state.list.ids.map(id => getArticle(state, id))
));
export const getNumArticlesPages = state => (
  Math.ceil(state.list.totalResults / constants.NUM_ARTICLES_PER_PAGE)
)
export const getSearchResults = arrayMemoizer(state => (
  state.search.ids.map(id => getArticle(state, id))
));
