const INITIAL_STATE = {
  poke: [],
  initialSelectionNumber: 0
}

export default (state = INITIAL_STATE, action) => {
  const { initialSelectionNumber } = state;
  switch(action.type) {
    case 'FETCH_POKE_DETAIL':
      return {
        ...state, 
        poke: state.poke.concat(action.payload.poke),
        initialSelectionNumber: action.payload.initialSelectionNumber
      }
    case 'FETCH_RANDOM_POKE':
      return {
        ...state,
        poke: state.poke.length > initialSelectionNumber ? state.poke.map((p, idx) => {
          if(idx === initialSelectionNumber) {
            return action.payload
          }
          return p
        }) : state.poke.concat(action.payload)
      }
    default:
      return state
  }
}