//root component to manage all containers

import React, {Component} from 'react';
import { AppRegistry, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
//import addContainer from '../containers/addContainer';
import taskListContainer from '../containers/taskListContainer';
import AddContainer from '../containers/addContainer';
import TaskListContainer from '../containers/taskListContainer';

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
