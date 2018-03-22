//root component to manage all containers

import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
//import addContainer from '../containers/addContainer';
//import taskListContainer from '../containers/taskListContainer';
import AddContainer from './AddTask/container/addContainer';
import TaskListContainer from './TaskList/container/taskListContainer';

//this is the root presentational component that calls the containers mapped to 
//their relevant presentational components to be displayed under View
export default class TaskManager extends Component {
    render() {
        return (
            <View>
                <AddContainer />
                <TaskListContainer />
            </View>
        )
    }
}

//it is called in App.js to be displayed