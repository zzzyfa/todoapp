import React, { Component, PropTypes } from 'react';
import { AppRegistry, FlatList, View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
//import TaskItemContainer from '../TaskItem/container/taskItemContainer';
import { connect } from 'react-redux';
import store from '../../index';
import TaskItemContainer from '../TaskItem/taskItem';
import { SET_VISIBILITY_FILTER } from '../../reducers/actions/actionTypes';
import { VisibilityFilters, setVisibilityFilter } from '../../reducers/actions/index';


export default class FilterLink extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'navy', marginBottom: 50, flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>Show:</Text>
                <Link filter={VisibilityFilters.SHOW_ALL}><Text style={{ color: 'white' }}>All</Text></Link>
                <Link filter={VisibilityFilters.SHOW_ACTIVE}><Text style={{ color: 'white' }}>Active</Text></Link>
                <Link filter={VisibilityFilters.SHOW_COMPLETED}><Text style={{ color: 'white' }}>Completed</Text></Link>
            </View>
        )
    }
}

const Link = ({ active, children, onClick }) => (
    console.log('Im in Link'),
    <TouchableOpacity
        onPress={(event) => {this.props.onClick}}
        disabled={active}
        style={{
            marginLeft: 4,
        }}
    >
        {children}
    </TouchableOpacity>
)

// Link.propTypes = {
//     active: PropTypes.bool.isRequired,
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func.isRequired
//   }

const mapStateToProps = (state, ownProps) => ({
    
    active: ownProps.filter === state.visibilityFilterReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

connect(mapStateToProps, mapDispatchToProps)(Link)





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