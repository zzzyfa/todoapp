import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import store from '../../index';
import TaskItemContainer from '../TaskItem/taskItem';
import SortableListView from 'react-native-sortable-listview';

export class TaskList extends Component {
    constructor(props) {
        super(props);
    }
    // renderHeader() {
    //     return (
    //         <View style={styles.header}>
    //             <Text style={styles.headerText}>Tasks</Text>
    //         </View>
    //     )
    // }


    // renderItem(data) {
    //     let { item, index } = data;
    //     return (
    //         <TaskItemContainer {...item} />
    //     )
    // }


    render() {
        console.log('im in tasklist', this.props.tasks, store.getState());

        return (
            <FlatList
                //ListHeaderComponent={this.renderHeader}
                data={this.props.todos}
                renderItem={({ item, index }) => {
                    return (
                        <TaskItemContainer {...item}>

                        </TaskItemContainer>)
                }}
                //takes an item from "data" and renders it into the list

                //takes an object parameter that has the current instance item 
                //and the index as the fields, extracting the item and index 
                //and using it inside the return.

                // renderItem={this.renderItem.bind(this)}

                keyExtractor={(item, index) => index}
            >
                {/* ^ keyExtractor to choose a unique key prop (taskId etc) or the array index */}


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
        case 'SHOW_SEARCH':
        console.log(this.state.newTaskName)
            return todos.filter(t => t.taskName == this.state.newTaskName)
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
    header: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 24
    }
});