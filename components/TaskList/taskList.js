import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
//import TaskItemContainer from '../TaskItem/container/taskItemContainer';
import { connect } from 'react-redux';
import store from '../../index';
import TaskItemContainer from '../TaskItem/taskItem';

export class TaskList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const dummy = [1, 2, 3];
        console.log('hey 12', this.props.tasks, store.getState() );

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


const mapStateToProps = (state) => {
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
};

const TaskListContainer = connect(mapStateToProps)(TaskList);
export default TaskListContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});