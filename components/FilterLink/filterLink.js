import React, { Component, PropTypes } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
//import TaskItemContainer from '../TaskItem/container/taskItemContainer';
import { connect } from 'react-redux';
import store from '../../index';
import TaskItemContainer from '../TaskItem/taskItem';
import { SET_VISIBILITY_FILTER } from '../../reducers/actions/actionTypes';
import { VisibilityFilters, setVisibilityFilter } from '../../reducers/actions/index';

state={all: 'SHOW_ALL', completed: 'SHOW_COMPLETED', active: 'SHOW_ACTIVE'}

export class FilterLink extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'navy', marginBottom: 50, flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>Show:</Text>

                <TouchableOpacity onPress={(event) => { this.props.onClick('SHOW_ALL') }} style={{ marginLeft: 4 }}>
                    <Text style={{ color: 'white' }}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={(event) => { this.props.onClick('SHOW_ACTIVE') }} style={{ marginLeft: 4 }}>
                    <Text style={{ color: 'white' }}>Active</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={(event) => { this.props.onClick('SHOW_COMPLETED') }} style={{ marginLeft: 4 }}>
                    <Text style={{ color: 'white' }}>Completed</Text>
                </TouchableOpacity>

            </View>
        )
    }
}


// const mapStateToProps = (filter) => ({

//     active: ownProps.filter === state.visibilityFilterReducer
// })

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (filter) => {
            dispatch(setVisibilityFilter(filter));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterLink)





// export default FilterLink = ({filter, //link
//                 children //contents of the link
//             }) => {
//     return (
//         <View>
//             <TouchableOpacity onPress = {(event) => {
//                 store.dispatch({type: SET_VISIBILITY_FILTER, filter})
//             }}>
//                 <Text>{children}</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// const mapStateToProps = state => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         //new prop onClickAdd, addTask component will pass prop to this
//         onClickFilter: (inputTaskName) => {
//             dispatch(addNewTask(inputTaskName)); //dispatch action addNewTask and pass it prop inputTaskName
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddTask);