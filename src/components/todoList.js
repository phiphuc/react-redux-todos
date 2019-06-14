import React, { Component } from 'react';
import Todo from './todo';
class todoList extends Component {
    render() {
        let { lstTodo } = this.props;
        lstTodo = (lstTodo === undefined || lstTodo === null ) ? [{id: 0, valueAdd: 'using react-redux'}] : lstTodo;
        return (
            <ul>
                  {
                    lstTodo.map((item, i) => (
                        <Todo value = {item} key={i} />
                    ))
                  }
            </ul>
        );
    }
}

export default todoList;