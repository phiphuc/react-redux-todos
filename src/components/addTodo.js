import React, { Component } from 'react';

class addTodo extends Component {
    constructor(props){
        super();
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.state = {
            valueAdd: ''
        }
    }

    changeInput = (e) => {
        console.log(e);
    }

    setInput = (value) => {
        console.log(value);
        this.setState({
            valueAdd: value
        })
    }
    handleKeyPress(event) {
        const {valueAdd} = this.state;
        if (event.key === 'Enter' && valueAdd !== ''  && valueAdd.trim() !== '') {
            this.props.addTodoss({type: 'ADD_TODO',valueAdd})
        }
      }
    render() {
        const {valueAdd} = this.state;
        return (
            <div>
                <input  onInput={e => this.setInput(e.target.value)}  onKeyPress={this.handleKeyPress}/>
                <button  onClick = {() => this.props.addTodoss({type: 'ADD_TODO',valueAdd})} >
                    Add Todo
                </button>
            </div>
        );
    }
}



export default addTodo;