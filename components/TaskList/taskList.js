import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
//import TaskItemContainer from '../TaskItem/container/taskItemContainer';
import { connect } from 'react-redux';
import store from '../../index';
import TaskItemContainer from '../TaskItem/taskItem';
import SortableListView from 'react-native-sortable-listview';



export class TaskList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('im in tasklist', this.props.tasks, store.getState() );

        return (
               <FlatList 
             data={this.props.todos}
               renderItem={({item, index}) => {
                   return(
                     <TaskItemContainer {...item}>

                        </TaskItemContainer>)
                   
               }}
               keyExtractor={(item, index) => index}>
                   </FlatList>
        )
    }
}


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      default:
      return todos  
    }
  }

const mapStateToProps = (state) => {
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers,
        todos: getVisibleTodos(state.taskReducers, state.visibilityFilterReducer.filter)
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