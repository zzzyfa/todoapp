//root component to manage all containers

import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import {Header} from 'native-base';
//import addContainer from '../containers/addContainer';
//import taskListContainer from '../containers/taskListContainer';
import AddTask from './AddTask/addTask';
import TaskListContainer from './TaskList/taskList';
import FilterLink from './FilterLink/filterLink';

//this is the root presentational component that calls the containers mapped to 
//their relevant presentational components to be displayed under View
export default class TaskManager extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
            
                <AddTask />
                <ScrollView>
                    <TaskListContainer />
                </ScrollView>
                <FilterLink />
                
            </View>
        )
    }
}


//it is called in App.js to be displayed