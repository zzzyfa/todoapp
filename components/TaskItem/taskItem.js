import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import store from '../../index';
import { deleteTask, toggleTask, editTask } from '../../reducers/actions/index'
import taskReducers from '../../reducers/taskReducers';

//to show information of each task
export class TaskItem extends Component {
    constructor(props) {
        super(props);
    }

    state = { isEdit: false, newTaskName: '' }

    onEdit() {
        const newEditState = !this.state.isEdit;
        this.setState({ isEdit: newEditState })
    }
    
    //render the edit button or not, depending on completed/not
    _renderEdit() {
        if (this.props.completed == false) {
            return (
                <TouchableOpacity  onPress={(event) => { console.log('i clicked edit'), this.onEdit() }}
                    style={styles.editButton} >
                    <Image
                        style={{ width: 35, height: 30 }}
                        source={this.state.isEdit ? require('../../icons/save.png') : require('../../icons/edit.png')}
                        resizeMode='stretch'
                    />
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }


    render() {
        const { isEdit } = this.state;
        const textValue = this.props.completed == true ? 'Done' : 'Pending'

        return (
            this.state.isEdit ? (

                <View style={styles.itemStyle}>


                    <TouchableOpacity onPress={(event) => { this.props.onClickToggle(this.props.taskId) }}
                        style={[styles.toggleButton, { backgroundColor: this.props.completed == true ? 'green' : 'white', }]}
                    >
                        <Text style={[styles.textButton, { color: this.props.completed == true ? 'white' : 'black' }]}>
                            {textValue}</Text>
                    </TouchableOpacity>



                    <TextInput style={[styles.itemTextStyle, {
                        margin: 20, fontSize: 16,
                        color: this.props.completed == true ? 'darkgreen' : 'black',
                        borderBottomColor: 'black'
                    }]} placeholder={this.props.taskName}
                        onChangeText={(text) => {
                            this.setState({ newTaskName: text })
                        }}
                    >
                    </TextInput>



                    <TouchableOpacity onPress={(event) => {
                        console.log('i clicked edit')
                      
                        let index = this.props.tasks.findIndex(el => el.taskName == this.state.newTaskName);

                        if (this.state.newTaskName.trim() == '') {
                            return Alert.alert('Oops!','Please enter a task'); 
                        }
                        else if (index == -1){
                            this.props.onClickSave(this.props.taskId, this.state.newTaskName), 
                            this.onEdit()
                        }
                        else {
                            Alert.alert('Uh-Oh', 'There is a task with the exact same name. Do you want to enter it again?', [
                                {
                                    text: 'Yes', onPress: () => {
                                        console.log('Enter twice pressed'),
                                        this.props.onClickSave(this.props.taskId, this.state.newTaskName), 
                                        this.onEdit()
                                        console.log(state)
                                    }
                                },
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            ])
                        }
                      

                    }}
                        style={styles.editButton}
                    >
                        <Image
                            style={{ width: 35, height: 30 }}
                            source={isEdit ? require('../../icons/save.png') : require('../../icons/edit.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>



                    <TouchableOpacity onPress={(event) => { this.props.onClickDelete(this.props.taskId); }}
                        style={styles.deleteButton} >
                        <Image
                            style={{ width: 35, height: 30 }}
                            source={require('../../icons/PS_X.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                </View>

            )

                : (<View style={styles.itemStyle}>

                    <TouchableOpacity onPress={(event) => { this.props.onClickToggle(this.props.taskId) }}
                        style={[styles.toggleButton,
                        { backgroundColor: this.props.completed == true ? 'green' : 'white' }]}
                    >
                        <Text style={[styles.textButton, { color: this.props.completed == true ? 'white' : 'black' }]}>{textValue}</Text>
                    </TouchableOpacity>

                    

                    <Text style={[styles.itemTextStyle, {
                        margin: 20, fontSize: 16,
                        color: this.props.completed == true ? 'darkgreen' : 'black',
                        textDecorationLine: this.props.completed == true ? 'line-through' : 'none'
                    }]}>
                        {this.props.taskName}
                    </Text>

                    {this._renderEdit()}

                    <TouchableOpacity onPress={(event) => { this.props.onClickDelete(this.props.taskId); }}
                        style={styles.deleteButton} >
                        <Image
                            style={{ width: 35, height: 30 }}
                            source={require('../../icons/PS_X.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>

                </View>)

        )
    }

}


const mapStateToProps = state => {
    return {
        tasks: state.taskReducers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickDelete: (taskId) => {
            dispatch(deleteTask(taskId));
        },
        onClickToggle: (taskId) => {
            dispatch(toggleTask(taskId));
        },
        onClickSave: (taskId, newTaskName) => {
            console.log('im in onclickSave'),
                dispatch(editTask(taskId, newTaskName))
        }
    }
}

const TaskItemContainer = connect(mapStateToProps, mapDispatchToProps)(TaskItem);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    textButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 30,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 30
    },
    deleteButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    editButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 50,
        marginRight: 20,

    },
    itemStyle: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    itemTextStyle: {
        paddingLeft: 10,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
});

export default TaskItemContainer;