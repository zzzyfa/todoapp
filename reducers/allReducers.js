import { combineReducers } from 'redux';
import taskReducers from './taskReducers';
import visibilityFilterReducer from './visibilityFilterReducer';

console.log('im in allreducers')
const allReducers = combineReducers({
    taskReducers,
    visibilityFilterReducer
});
export default allReducers;