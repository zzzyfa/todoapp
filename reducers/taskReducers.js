import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actions/actionTypes';
const initState = {
    taskId: 0,
    taskName: 'test',
    completed: false,
}
const taskReducers = (state = [], action) => {
    console.log('ji', state);
    switch (action.type) {
        case ADD_TODO:
            console.log('1');
            return [
                ...state,
                {
                    taskId: action.taskId,
                    taskName: action.taskName,
                    completed: false,
                }
            ];
        case TOGGLE_TODO:
            console.log('2');
            //iterate the tasks array, find match, clone to new object, then change
            return state.map(task =>
                (task.taskId === action.taskId) ? { ...task, completed: !task.completed } : task
            )
        case DELETE_TODO:
            console.log('del');
            return state.map(task =>
                (task.taskName === action.taskName) ? { ...task.splice } : task
            )
        default:
            console.log('3');
            return state; //state doesnt change
    }
}

// deleteItem(key){
//     this.state.state.splice(taskName);
//     this.setState({state: this.state.state})
//     }



export default taskReducers;