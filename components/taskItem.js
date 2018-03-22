import React, { Component } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class TaskItem extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() =>{
                    //how do we call action toggleTask? call thru container
                }}
                    >

                </TouchableOpacity>

                <Text style={{ margin: 20, color: this.props.completed == true ? 'darkgreen' : 'black' }}>
                    {this.props.taskName}
                </Text>
            </View>

        )
    }
}