import makeRequest from '../api';

export const initialLoad = () => (dispatch, getState) => {
  const { initialSelectionNumber } = getState().app;
  makeRequest(`https://pokeapi.co/api/v2/pokemon/`)
    .then(response => {
      const { count, results } = response.data;
      dispatch({type: 'INITIAL_FETCH_SUCCESS', payload: {totalCount: count}})
      return results
    })
    .then(results => {
      const initialLoad = Array(initialSelectionNumber).fill(0).map((x, idx) => results[idx])
      return Promise.all([...initialLoad.map(p => makeRequest(p.url))])
    })
    .then(poke => {
      poke.forEach(p => {
        dispatch({type: 'FETCH_POKE_DETAIL', payload: {poke: p.data, initialSelectionNumber}});
      })
    })
} 

export const getRandomPoke = () => async (dispatch, getState) => {
  const { totalCount, initialSelectionNumber } = getState().app;
  const idx = getRandomInt(initialSelectionNumber - 1, totalCount)
  makeRequest(`https://pokeapi.co/api/v2/pokemon/${idx}`)
    .then(response => {
      dispatch({type: 'FETCH_RANDOM_POKE', payload: response.data})
    }).catch(err => {
      console.log({err})
    })
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}