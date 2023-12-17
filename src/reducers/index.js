import { combineReducers } from 'redux';
import { x } from '../actions';

const allReducers = combineReducers({
    x: x
});
export default allReducers;