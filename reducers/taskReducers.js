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
            let index = state.findIndex(el => el.taskName == action.taskName);
            if (index == -1)
                return [
                    ...state,
                    {
                        taskId: action.taskId,
                        taskName: action.taskName,
                        completed: false,
                    }
                ];
            alert('This task exists');

        case TOGGLE_TODO:
            console.log('2');
            return state.map(task =>
                (task.taskId === action.taskId) ? { ...task, completed: !task.completed } : task
            )
        case DELETE_TODO:
            console.log('del');

            const newState = Object.assign([], state);
            const indexOfTaskToDelete = state.findIndex(task => {
                return task.taskId == action.taskId
            })
            newState.splice(indexOfTaskToDelete, 1);
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