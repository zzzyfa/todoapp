import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { addNewTask } from '../../reducers/actions/index';
import {connect} from 'react-redux';
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
                    <TextInput value = {this.state.newTaskName} placeholder='Enter task name' style={styles.inputtext} onChangeText={(text) => {
                        this.setState({ newTaskName: text })
                    }} />
                
                    <TouchableOpacity style={styles.addbutton} 
                        onPress={(event) => {

                           
                            if (!this.state.newTaskName.trim()) {
                                return alert('Please enter a task'); 
                            }
                            
                            this.props.onClickAdd(this.state.newTaskName), this.setState({newTaskName:''})
                            
                            
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
        
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('im in add dispatch')
    return{
        //new prop onClickAdd, addTask component will pass prop to this
        
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
    inputtext:{
        backgroundColor: 'white',
        width: 300,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,

    },
    addbutton:{
        
        marginTop:15,
        
        height: 40,
        width: 100,
        //backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
 
    }
  });