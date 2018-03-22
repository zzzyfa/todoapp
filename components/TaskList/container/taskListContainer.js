// container will:
// help component dispatch action,
// convert component's state to prop,
// convert component's dispatch to prop

import TaskList from '../taskList';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    //to show state after changed by reducer. It will then go to Provider in index.js
    
    return{
        tasks: !state.taskReducers ? [] : state.taskReducers
        //after changing the state, we have the new state here ^
    }
}
// no action, just displaying task list, so no mapDispatchToProps


const TaskListContainer = connect(mapStateToProps)(TaskList);

export default TaskListContainer;
