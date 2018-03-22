import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './Note';

export default class Main extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          itemArray: [],
          itemText: '',

      }
  }
  
    render() {
        let items = this.state.itemArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
            deleteMethod={() => this.deleteItem(key)} />
        })
    return (
      <View style={styles.container}>
        
        <View>
        <Text>Todo List</Text>
        </View>

        <ScrollView>
            {items}
        </ScrollView>

        <View> 
            <TextInput 
            placeholder='Add new item'
            onChangeText={(itemText) => this.setState({itemText})}
            value={this.state.itemText} 
            ></TextInput>
        </View>

        <TouchableOpacity
            onPress={this.addItem.bind(this)}
        >
            <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
  addItem(){
    if(this.state.itemText){
        this.state.itemArray.push({
            'item': this.state.itemText
        })
        this.setState({itemArray: this.state.itemArray})
        this.setState({itemText: ''});
    };
};
deleteItem(key){
this.state.itemArray.splice(key, 1);
this.setState({itemArray: this.state.itemArray})
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