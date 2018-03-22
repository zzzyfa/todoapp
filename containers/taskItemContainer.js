// container will:
// help component dispatch action,
// convert component's state to prop,
// convert component's dispatch to prop

import TaskItem from '../components/taskItem';
import {toggleTask} from '../actions';
import {connect} from 'react-redux';


//no state/action/dispatch so no mapStateToProps/mapDispatchToProps 
//so just straight to connect with component

const TaskItemContainer = connect()(TaskItem);


export default TaskItemContainer;