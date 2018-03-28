import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import store from '../../index';
import { deleteTask, toggleTask } from '../../reducers/actions/index'

//to show information of each task
export class TaskItem extends Component {
    state = {toggle: false}

    _onPress(){
        const newToggleState = !this.state.toggle;
        this.setState({toggle: newToggleState})
    }
    render() {
        const {toggle} = this.state;
        const textValue = toggle ? "Done":"Pending";
        const buttonBg = toggle ? 'green':'white';
        const textColor = toggle ? 'white':'black';

        return (
            <View style={styles.itemStyle}>
                <TouchableOpacity onPress={(event) => { this.props.onClickToggle(this.props.taskId), this._onPress()  }}
                    style={[styles.toggleButton, {backgroundColor: buttonBg, borderColor:'green', borderWidth:2, borderRadius:30}]}
                >
                <Text style={[styles.textButton, {color: textColor}]}>{textValue}</Text>
                </TouchableOpacity>
                <Text style={[styles.itemTextStyle, {
                    margin: 20, fontSize:16,
                    color: this.props.completed == true ? 'darkgreen' : 'black'
                }]}>
                    {this.props.taskName}
                </Text>

                <TouchableOpacity onPress={(event) => { this.props.onClickDelete(this.props.taskId); }}
                style={styles.deleteButton} >
                    {/* <Text style={{color:'white'}}>X</Text> */}
                    <Image
                        style={{ width: 35, height: 30 }}
                        source={require('../../icons/PS_X.png')}
                        resizeMode='stretch'
                    />
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
    return {
        onClickDelete: (taskId) => {
            dispatch(deleteTask(taskId));
        },
        onClickToggle: (taskId) => {
            dispatch(toggleTask(taskId));
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
    toggleButton:{
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
    itemStyle: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    itemTextStyle: {
        paddingLeft: 10,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },
});

export default TaskItemContainer;