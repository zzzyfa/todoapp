// import React from 'react';
// import Main from './components/Main';
// import Note from './components/Note';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Main />
//     );
//   }
// }

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import allReducers from './reducers/index';
import taskReducers from './reducers/taskReducers';
import TaskManager from './components/taskManager';
//import AddTask from './components/addTask';

let store = createStore(taskReducers);
const App = () => (
    <Provider store={store}>
        <TaskManager />
        {/* calls containers which are mapped to views */}
    </Provider>
)

AppRegistry.registerComponent('todoapp', () => App);
