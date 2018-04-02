import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, ListView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
//import TaskItemContainer from '../TaskItem/container/taskItemContainer';
import { connect } from 'react-redux';
import store from '../../index';
import TaskItemContainer from '../TaskItem/taskItem';
import SortableListView from 'react-native-sortable-listview';
import { List, ListItem, Button, Icon } from 'native-base';

var data = ['Varun', 'Syfa']

export class TaskList extends Component {


    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = { listViewData: data}
    }

    render() {

        console.log('im in tasklist', this.props.tasks, store.getState());

        return (
            //    <FlatList data={this.props.tasks}
            //    renderItem={({item, index}) => {
            //        return(

            //         <TaskItemContainer {...item}>

            //         </TaskItemContainer>

            //        )
            //    }}
            //    keyExtractor={(item, index) => item.taskName}>

            //        </FlatList>
            <List dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={data =>
                    <ListItem>
                        <Text>{data}</Text>
                    </ListItem>
                }
                renderLeftHiddenRow={data =>
                    <Button full danger>
                        <Icon name="information-circle" />
                    </Button>
                }
                renderRightHiddenRow={data =>
                    <Button full>
                        <Icon name="trash" />
                    </Button>
                }
                leftOpenValue={-75}
                rightOpenValue={-75}

            />


        )
    }
}

// const getVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case 'SHOW_ALL':
//             return todos
//         case 'SHOW_COMPLETED':
//             return todos.filter(t => t.completed)
//         case 'SHOW_ACTIVE':
//             return todos.filter(t => !t.completed)
//         default:
//             throw new Error('Unknown filter: ' + filter)
//     }
// }

const mapStateToProps = (state) => {
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers,
       // todos: getVisibleTodos(state.taskReducers, state.visibilityFilterReducer)
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