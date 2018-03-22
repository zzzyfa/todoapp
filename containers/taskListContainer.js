// container will:
// help component dispatch action,
// convert component's state to prop,
// convert component's dispatch to prop

import TaskList from '../components/taskList';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    //alert(`state send to task list = ${JSON.stringify(state)}`);
    //to show state after changed by reducer. It will then go to Provider in index.js
    return{
        tasks: !state.taskReducers ? [] : state.taskReducers
        //after changing the state, we have the new state here ^
    }
}
// no action so no mapDispatchToProps


const TaskListContainer = connect(mapStateToProps)(TaskList);

export default TaskListContainer;
