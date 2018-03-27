import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import store from '../../index';
import {deleteTask} from '../../reducers/actions/index'


//to show information of each task
export class TaskItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    //Call this action in Container
                }}
                    style={{
                        position: 'absolute', top: 0, bottom: 0,
                        left: 0, right: 0,
                    }}
                >
                </TouchableOpacity>
                <Text style={{
                    margin: 20,
                    color: this.props.completed == true ? 'darkgreen' : 'black'
                }}>
                    {this.props.taskName}
                </Text>

                <TouchableOpacity onPress={(event) => {this.props.onClickDelete(this.props.taskName);}} >
                        <Text>Delete</Text>
                    </TouchableOpacity>



            </View>

        )
    }

}


const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onClickDelete: (inputTaskName) => {
            dispatch(deleteTask(inputTaskName)); 
        }
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

const TaskItemContainer = connect(mapStateToProps, mapDispatchToProps)(TaskItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
});

export default TaskItemContainer;