import { SET_VISIBILITY_FILTER } from './actions/actionTypes';
import { VisibilityFilters } from './actions';
import taskReducers from './taskReducers';


console.log('im in VFreducer')

const initState = {
  activeFilter: 'SHOW_ACTIVE',
}

const visibilityFilterReducer = (state = {filter:'SHOW_ALL'}, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      console.log('change VFR', action.filter)

      return Object.assign({}, state, {filter:
       action.filter}
      ) 

    default:
      console.log('default VFR')
      return state
  }
}

export default visibilityFilterReducer;
