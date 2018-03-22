import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval}>

      <Text>{this.props.val.item}</Text>
    
        <TouchableOpacity onPress={this.props.deleteMethod} >
        <Text>Delete</Text>
        </TouchableOpacity>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});