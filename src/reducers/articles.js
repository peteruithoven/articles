// storing all articles loaded through page loads or search queries
export default function articles(state = {}, action = {}) {
  if (action.payload && action.payload.articles) {
    return {
      ...state,
      ...action.payload.articles
    }
  }
  return state;
}
