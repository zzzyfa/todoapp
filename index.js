// import React, {Component} from 'react';
// import {AppRegistry} from 'react-native';
import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import allReducers from './reducers/allReducers';
// import TaskManager from './components/taskManager';

const store = createStore(allReducers);
console.log('test', store);

export default store;
// const App = () => (
//     <Provider store={store}>
//     <TaskManager />
//     </Provider>
// )

// AppRegistry.registerComponent('todoapp', () => App);
