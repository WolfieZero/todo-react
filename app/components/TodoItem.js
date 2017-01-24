// =============================================================================
// Component > Todo Item
// =============================================================================


import React from 'react';

import Delete from '../components/Delete';


class TodoItem extends React.Component {

    render() {
        const deleteHandle = this.props.delete;
        const todo = this.props.todo;

        return (
            <li className="todo-item">
                <Delete className="todo-item__delete" onClick={deleteHandle}>X</Delete>
                <span className="todo-item__description">{todo}</span>
            </li>
        );
    }

}


export default TodoItem;