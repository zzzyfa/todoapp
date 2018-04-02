import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import store from '../../index';
import { deleteTask, toggleTask,editTask } from '../../reducers/actions/index'

//to show information of each task
export class TaskItem extends Component {
    constructor(props) {
        super(props);
    }

    state = { toggle: false, isEdit: false,  newTaskName: '', }
    onEdit() {
        const newEditState = !this.state.isEdit;
        this.setState({ isEdit: newEditState })
    }
    _onPress() {
        const newToggleState = !this.state.toggle;
        this.setState({ toggle: newToggleState })
    }
    render() {
        const { toggle, isEdit } = this.state;
        const textValue = toggle ? "Done" : "Pending";
        const buttonBg = toggle ? 'green' : 'white';
        const textColor = toggle ? 'white' : 'black';

        return (
            this.state.isEdit ? (

                <View style={styles.itemStyle}>


                    <TouchableOpacity onPress={(event) => { this.props.onClickToggle(this.props.taskId), this._onPress() }}
                        style={[styles.toggleButton, { backgroundColor: buttonBg, borderColor: 'green', borderWidth: 2, borderRadius: 30 }]}
                    >
                        <Text style={[styles.textButton, { color: textColor }]}>{textValue}</Text>
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



                    <TouchableOpacity onPress={(event) => { console.log('i clicked edit'), 
                    this.props.onClickSave(this.props.taskId, this.state.newTaskName), this.onEdit()  }}
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

                    <TouchableOpacity onPress={(event) => { this.props.onClickToggle(this.props.taskId), this._onPress() }}
                        style={[styles.toggleButton, { backgroundColor: buttonBg, borderColor: 'green', borderWidth: 2, borderRadius: 30 }]}
                    >
                        <Text style={[styles.textButton, { color: textColor }]}>{textValue}</Text>
                    </TouchableOpacity>


                    <Text style={[styles.itemTextStyle, {
                        margin: 20, fontSize: 16,
                        color: this.props.completed == true ? 'darkgreen' : 'black',
                        textDecorationLine: this.props.completed == true ? 'line-through' : 'none'
                    }]}>
                        {this.props.taskName}
                    </Text>


                    <TouchableOpacity onPress={(event) => { console.log('i clicked edit'), this.onEdit() }}
                        style={styles.editButton} >
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



                </View>)


        )
    }

}


const mapStateToProps = state => {
    return {

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
    },
    deleteButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    editButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2980b9',
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