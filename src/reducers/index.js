import { combineReducers } from 'redux';
import * as actions from '../actions';

function articles(state = {}, action = {}) {
  return state;
}

function apiHanding(reducer, types) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected types to be strings.')
  }
  const initialState = {
    isFetching: false,
    data: reducer(undefined, {})
  }
  const [ requestType, successType, failureType ] = types;

  return (state = initialState, action = {}) => {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          isFetching: true
        }
      case successType:
        return {
          ...state,
          isFetching: false,
          data: action.payload
        }
      case failureType:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        }
      default:
        return state
    }
  }
}

export default combineReducers({
  // articles
  articles: apiHanding(articles, [
    actions.LOAD_ARTICLES_REQUEST,
    actions.LOAD_ARTICLES_SUCCESS,
    actions.LOAD_ARTICLES_FAILURE
  ])
})
