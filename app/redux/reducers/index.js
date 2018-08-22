import { combineReducers } from 'redux';
import * as homeReducers from './home'

export default combineReducers(Object.assign(
  homeReducers,
));
