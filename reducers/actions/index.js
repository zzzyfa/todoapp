import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_VISIBILITY_FILTER, EDIT_TODO } from './actionTypes';

//action creators
let newTaskId = 0;


export const addNewTask = (inputTaskName) => {
    console.log("Im in");

    return {
        type: ADD_TODO,
        taskId: newTaskId++,
        taskName: inputTaskName,
   
    }
}

export const toggleTask = (taskId) => {

    return {
        type: TOGGLE_TODO,
        taskId: taskId,

    }
}

export const editTask = (taskId, newTaskName) => {
    console.log('im in edittask')
    return {
        
        type: EDIT_TODO,
        taskId: taskId,
        taskName: newTaskName,

    }
}

export const deleteTask = (taskId) => {
    console.log("Im in deleteTask");
    return {
        type: DELETE_TODO,
        taskId: taskId,

    }
}

export const setVisibilityFilter = (filter) => {
    return{
    type: SET_VISIBILITY_FILTER,
    filter
}
}

