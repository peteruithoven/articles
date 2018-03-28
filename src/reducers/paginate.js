// create paginated slice with results of specific action types
// Only stores id's that reference articles in entities slice
export default function paginate(types) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected types to be strings.')
  }
  const [ requestType, successType, failureType ] = types
  return (state = {
    isFetching: false,
    ids: [],
    totalResults: 0,
    error: null
  }, action = {}) => {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          isFetching: true,
          error: null
        }
      case successType:
        const { articles, totalResults } = action.payload;
        return {
          ...state,
          isFetching: false,
          ids: Object.keys(articles),
          totalResults,
          error: null
        }
      case failureType:
        return {
          ...state,
          isFetching: false,
          ids: [],
          totalResults: 0,
          error: action.payload
        }
      default:
        return state
    }
  }
}
