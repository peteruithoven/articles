import { combineReducers } from 'redux';
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
export function getArticlesList(state) {
  return state.list.ids.map(id => state.entities.articles[id]);
}
export function getNumArticlesPages(state) {
  return Math.ceil(state.list.totalResults / constants.NUM_ARTICLES_PER_PAGE)
}
export function getArticle(state, id) {
  return state.entities.articles[id];
}
export function getSearchResults(state) {
  return state.search.ids.map(id => state.entities.articles[id]);
}
