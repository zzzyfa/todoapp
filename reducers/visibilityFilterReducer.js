import { SET_VISIBILITY_FILTER } from './actions/actionTypes';
import taskReducers from './taskReducers';


console.log('im in VFreducer')

const initState = {
  filter: 'SHOW_ALL',
}

const visibilityFilterReducer = (state = initState, action) => {
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
