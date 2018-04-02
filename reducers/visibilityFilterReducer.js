import { SET_VISIBILITY_FILTER } from './actions/actionTypes';
import { VisibilityFilters } from './actions';

//const {SHOW_ALL} = VisibilityFilters
console.log('im in VFreducer')
const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      //return action.filter
      return
      if (action.filter === VisibilityFilters.SHOW_ALL) {
        return state;
      } else if (action.filter === VisibilityFilters.SHOW_COMPLETED) {
        return state.completed;
      } else if (action.filter === VisibilityFilters.SHOW_ACTIVE) {
        return !state.completed;
      }

    default:
      return state
  }
}

export default visibilityFilterReducer;
