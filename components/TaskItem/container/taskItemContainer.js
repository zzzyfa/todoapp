// container will:
// help component dispatch action,
// convert component's state to prop,
// convert component's dispatch to prop

import TaskItem from '../taskItem';
import {toggleTask} from '../../../reducers/actions';
import {connect} from 'react-redux';


//not doing the toggle action yet, so leave it for now

const TaskItemContainer = connect()(TaskItem);

export default TaskItemContainer;