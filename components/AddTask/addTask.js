import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { addNewTask } from '../../reducers/actions/index';
import { connect } from 'react-redux';
import store from '../../index';
import taskReducers from '../../reducers/taskReducers';

export class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: '',
            
        })
       

    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput value={this.state.newTaskName} placeholder='Enter task name' style={styles.inputtext} onChangeText={(text) => {
                        this.setState({ newTaskName: text })
                    }} />

                    <TouchableOpacity style={styles.addbutton}
                        onPress={(event) => {

                            let index = this.props.tasks.findIndex(el => el.taskName == this.state.newTaskName);
                            //findIndex(callback) callback is function to execute once for every array index
                            //until it finds one where callback return a truthy value
                            //return value: if found then gives the index, else -1

                            if (this.state.newTaskName.trim() == '') {
                                return Alert.alert('Oops!', 'Please enter a task');
                            }
                            //use trim so that space isnt counted

                            else if (index == -1) {
                                this.props.onClickAdd(this.state.newTaskName) 
                                this.setState({ newTaskName: '' })
                            }
                            else {
                                Alert.alert('Uh-Oh', 'This task already exists. Do you want to enter it again?', [
                                    {
                                        text: 'Yes', onPress: () => {
                                            console.log('Enter twice pressed'),
                                                this.props.onClickAdd(this.state.newTaskName), 
                                                this.setState({ newTaskName: '' })
                                          
                                        }
                                    },
                                    {
                                        text: 'No', style: 'cancel', onPress: () => {
                                            console.log('Cancel Pressed')
                                            this.setState({ newTaskName: '' })
                                        }
                                    },
                                ])

                            }


                        }}
                    >

                        <Image
                            style={{ width: 100, height: 35 }}
                            source={require('../../icons/add-button-blue-hi.png')}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>

                   
                    

                </View>

            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        tasks: state.taskReducers,
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('im in add dispatch')
    return {

        onClickAdd: (inputTaskName) => {

            dispatch(addNewTask(inputTaskName)); //dispatch action addNewTask and pass it prop inputTaskName

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);



const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        backgroundColor: 'navy',
        alignItems: 'center',
        justifyContent: 'center',



    },
    inputtext: {
        backgroundColor: 'white',
        width: 300,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,

    },
    addbutton: {

        marginTop: 15,

        height: 40,
        width: 100,
        //backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,

    }
});