// container will:
// help component dispatch action,
// convert component's state to prop,
// convert component's dispatch to prop

import AddTask from '../components/addTask';
import {addNewTask} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return{

    }
}

const mapDispatchToProp = (dispatch) => {
    return{
        //new prop onClickAdd, addTask component will pass prop to this
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName)); //dispatch action addNewTask and pass it prop inputTaskName
        }
    }
}

const AddContainer = connect(mapStateToProps, mapDispatchToProp)(AddTask);

export default AddContainer;