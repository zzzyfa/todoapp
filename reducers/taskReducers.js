import { Alert } from 'react-native';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO, SET_VISIBILITY_FILTER } from './actions/actionTypes';
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
                ]
              


        case TOGGLE_TODO:
            console.log('2');

            return state.map(task => // => is function symbol
                (task.taskId === action.taskId) ? { ...task, completed: !task.completed } : task
            )
        //this function is called once for each el in the array
        //map creates a new array with values which are results of the called function




        case DELETE_TODO:
            console.log('del');

            const newState = Object.assign([], state);
            //copy/clone/assign the property values of (target object, source object)
            const indexOfTaskToDelete = state.findIndex(task => {
                return task.taskId == action.taskId
            })
            newState.splice(indexOfTaskToDelete, 1);
            //splice can remove/add. splice(start, deletecount, item1, item 2,...)
            //start is index at which to start changing the array
            //deletecount, if 0 then delete none so u should specify items to add in the next args (item1 etc)
            return newState;




        case EDIT_TODO:
            console.log('edit reducer');

            return state.map(task =>
                (task.taskId === action.taskId) ? {
                    ...task,
                    taskName: action.taskName

                } : task
            )


        default:
            console.log('3');
            return state; //state doesnt change
    }
}


export default taskReducers;