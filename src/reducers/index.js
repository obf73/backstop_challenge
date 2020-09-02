import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';
import appReducer from './appReducer';

export default combineReducers({
  poke: pokeReducer,
  app: appReducer
});