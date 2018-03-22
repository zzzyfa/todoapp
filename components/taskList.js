import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import TaskItemContainer from '../containers/taskItemContainer';

export default class TaskList extends Component {
    render() {
        return (
           <FlatList data={this.props.tasks}
           renderItem={({item, index}) => {
               return(
                // how do we add ItemComponent which contains action? use container
                <TaskItemContainer {...item}>
                
                </TaskItemContainer>
               )
           }}
           keyExtractor={(item, index) => item.taskName}>

               </FlatList>
        )
    }
}