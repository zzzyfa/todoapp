import {ADD_TODO, TOGGLE_TODO} from './actionTypes';

//action creators
export const addNewTask = (inputTaskName) => {
    let newTaskId=0;
    return{
        type: ADD_TODO,
        taskId: newTaskId++,
        taskName: inputTaskName,

    }
}

export const toggleTask = (taskId) => {
    let newTaskId=0;
    return{
        type: TOGGLE_TODO,
        taskId: taskId,

    }
}