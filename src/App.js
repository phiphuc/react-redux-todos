import React, {Component} from 'react';
import './App.css';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import {connect} from 'react-redux'

class App extends Component {
  constructor(props){
    super();
  }
  render(){
    return (
      <div className="App">
        <AddTodo addTodoss={this.props.addTodoss} />
        <TodoList lstTodo = {this.props.lstTodo} del={this.props.del} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      addTodoss: (actionCreator) => {
          dispatch(actionCreator)
      }
      
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      lstTodo: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
