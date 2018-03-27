import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './actionTypes';

//action creators
let newTaskId=0;
export const addNewTask = (inputTaskName) => {
    console.log("Im in");
    
    return{
        type: ADD_TODO,
        taskId: newTaskId++,
        taskName: inputTaskName,
    }
}

export const toggleTask = (taskId) => {
    
    return{
        type: TOGGLE_TODO,
        taskId: taskId,

    }
}

export const deleteTask = (inputTaskName) => {
   console.log("Im in deleteTask");
    return{
        type: DELETE_TODO,
        //taskId: taskId,
        taskName: inputTaskName,

    }
}