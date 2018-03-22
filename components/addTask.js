import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { addNewTask } from '../actions';

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            newTaskName: ''
        })

    }

    render() {
        return (
            <View>
                <View>
                    <TextInput onChangeText={(text) => {
                        this.setState({ newTaskName: text })
                    }} />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={(event) => {
                            if (!this.state.newTaskName.trim()) {
                                return; //if it is blank then return nothing
                            }
                            //call click event using container here
                            this.props.onClickAdd(this.state.newTaskName);
                            //pass the newTaskName as value for prop onClickAdd which
                            //is in addContainer that dispatches Add action
                        }}
                    >

                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
