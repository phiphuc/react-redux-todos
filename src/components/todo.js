import React, { Component } from 'react';
import {connect} from 'react-redux';

class todo extends Component {

    render() {
        const id = this.props.value.id;
        console.log(id);
        return (
            <div>
                <button onClick={ () => this.props.del({type: 'DEL_TODO',id})}>xoa</button>
                <button>sua</button>
                <li>
                    {this.props.value.text}
                </li>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        del: (temp) => {
            dispatch(temp)
        }
    }
}



export default connect('',mapDispatchToProps)(todo);