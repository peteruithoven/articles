import createNewsRequest from './createNewsRequest.js';
import * as constants from '../constants.js';

export const LOAD_ARTICLES_REQUEST = 'LOAD_ARTICLES_REQUEST';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_FAILURE = 'LOAD_ARTICLES_FAILURE';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export function loadArticles(page) {
  return createNewsRequest({
    q: 'sustainability',
    sortBy: 'publishedAt',
    page,
    pageSize: constants.NUM_ARTICLES_PER_PAGE
  }, [
    LOAD_ARTICLES_REQUEST,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLES_FAILURE
  ]);
}
export function search(query) {
  return createNewsRequest({
    q: `sustainability AND ${query}`,
    sortBy: 'relevancy',
    pageSize: constants.NUM_SEARCH_RESULTS_PER_PAGE
  },
  [
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
  ]);
}
