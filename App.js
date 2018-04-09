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

// import React, { Component } from 'react';
// import { AppRegistry } from 'react-native';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import allReducers from './reducers/allReducers';
// import taskReducers from './reducers/taskReducers';
// import TaskManager from './components/taskManager';
// //import AddTask from './components/addTask';



import React from 'react';
import AddTask from './components/AddTask/addTask';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducers from './reducers/taskReducers';
import TaskListContainer from './components/TaskList/taskList';
import store from './index';
import TaskManager from './components/taskManager';

// let store = createStore(taskReducers);
// const App = () => (
//     <Provider store={store}>
//         <AddTask />
//     </Provider>
// )

// AppRegistry.registerComponent('todoapp', () => App);
//  const store = createStore(allReducers);
console.log ('no', store.getState());
export default class App extends React.Component {

    render() {
        
        return (
            <Provider store={store}>
                <TaskManager />
            </Provider>

        );
    }
}