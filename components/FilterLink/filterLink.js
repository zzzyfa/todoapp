import React, { Component, PropTypes } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import store from '../../index';
import TaskItemContainer from '../TaskItem/taskItem';
import { SET_VISIBILITY_FILTER } from '../../reducers/actions/actionTypes';
import { setVisibilityFilter } from '../../reducers/actions/index';



export class FilterLink extends Component {
    state={toggle: 'SHOW_ALL'}

    _onPress(filterName) {
        const newToggleState = filterName;
        this.setState({ toggle: newToggleState });
    }

    // componentDidUpdate(){
    //     alert('You chose ' + this.state.toggle + ' filter')
    // }

    render() {
        
        return (
            <View style={styles.linkView}>
                <Text style={{ color: 'white' }}>Show:</Text>

                <TouchableOpacity onPress={(event) => { this.props.onClick('SHOW_ALL'), this._onPress('SHOW_ALL') }} 
                style={this.state.toggle == 'SHOW_ALL' ? styles.indiLinkActive : styles.indiLink}>
                    <Text style={this.state.toggle == 'SHOW_ALL' ? styles.linkTextActive : styles.linkText}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={(event) => { this.props.onClick('SHOW_ACTIVE'), this._onPress('SHOW_ACTIVE') }} 
                style={this.state.toggle == 'SHOW_ACTIVE' ? styles.indiLinkActive : styles.indiLink}>
                    <Text style={this.state.toggle == 'SHOW_ACTIVE' ? styles.linkTextActive : styles.linkText}>Active</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={(event) => { this.props.onClick('SHOW_COMPLETED'), this._onPress('SHOW_COMPLETED') }} 
                style={this.state.toggle == 'SHOW_COMPLETED' ? styles.indiLinkActive : styles.indiLink}>
                    <Text style={this.state.toggle == 'SHOW_COMPLETED' ? styles.linkTextActive : styles.linkText}>Completed</Text>
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
    console.log('dispatch onClick')
    return {
        
        onClick: (filter) => {
            dispatch(setVisibilityFilter(filter));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterLink)

const styles = StyleSheet.create({
    linkView:{
        backgroundColor: 'navy', 

        flexDirection: 'row', 
        height: 50,
        justifyContent: 'center',
        alignItems:'center'
    },

    
    indiLinkActive: {
        marginLeft: 10,
        width: 90,
        height: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 30,
    },
    indiLink: {
        marginLeft: 10,
        width: 90,
        height: 20,
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 30,
    },


    linkTextActive: {
        color: 'navy',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems:'center'
    },
    linkText: {
        color: 'white',
        justifyContent: 'center',
        alignItems:'center'
    },

})