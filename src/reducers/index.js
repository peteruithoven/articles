import { combineReducers } from 'redux';
import * as actions from '../actions';

function articles(state = {}, action = {}) {
  switch (action.type) {
    case actions.LOAD_ARTICLES_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

function pagination(state = {
  isFetching: false,
  ids: [],
  error: null
}, action = {}) {
  switch (action.type) {
    case actions.LOAD_ARTICLES_REQUEST:
      return {
        ...state,
        isFetching: true,
        // ids: [],
        error: null
      }
    case actions.LOAD_ARTICLES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        // TODO verify by date sorting
        ids: Object.keys(action.payload),
        error: null
      }
    case actions.LOAD_ARTICLES_FAILURE:
      return {
        ...state,
        isFetching: false,
        ids: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  entities: combineReducers({
    articles
  }),
  pagination
})

export function getArticlesList(state) {
  return state.pagination.ids.map(id => state.entities.articles[id]);
}
