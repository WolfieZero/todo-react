// =============================================================================
// Component > Todo
// =============================================================================


import React from 'react';

import TodoItem from '../components/TodoItem';


class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                'Talk to Sergio',
                'Ask to get out of here',
                'Mention it\'s getting kind of hot in here',
            ]
        };
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            const newTodo = event.target.value;
            this.addTodo(newTodo);
            event.target.value = null;
        }
    }

    addTodo(todo) {
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({
            todos: todos
        });
    }

    removeTodo(key) {
        let todos = this.state.todos;
        todos.splice(key, 1);
        this.setState({
            todos: todos
        });
    }

    render() {
        const todoItems = this.state.todos.map((todo, key) => {
            return (
                <TodoItem todo={todo} key={key} delete={this.removeTodo.bind(this, key)} />
            );
        });

        return (
            <div>
                <h1>todoFive</h1>
                <div>
                    <input
                        autoFocus
                        name="todo"
                        type="text"
                        placeholder="Add todo"
                        className="input input--block"
                        onKeyPress={this.handleKeyPress.bind(this)}
                    />
                </div>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }

}


export default Todo;