import {ADD_TODO, TOGGLE_TODO} from '../actions/actionTypes';

const taskReducers = (tasks = [], action) => {
    switch(action.type){
        case ADD_TODO:
        return [
            ...tasks,
            //new task object, no array push bcoz it mutates
            {
                taskId: action.taskId,
                taskName: taskName,
                completed: false,

            }
        ]
        case TOGGLE_TODO:
        //iterate the tasks array, find match, clone to new object, then change
        return tasks.map(task => 
        (task.taskId === action.taskId) ? {...task, completed: !task.completed} : task
        )
        default: return tasks; //state doesnt change
    }
}

export default taskReducers;