const INITIAL_STATE = {
  initialSelectionNumber: 3,
  totalCount: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'INITIAL_FETCH_SUCCESS':
      return {
        ...state,
        totalCount: action.payload.totalCount
      }
    default:
      return state
  }
}