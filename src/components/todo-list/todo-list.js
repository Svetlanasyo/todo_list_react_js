import React from "react";
import Todo from "../todo/todo";
import './todo-list.css';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <Todo {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
           {elements}
        </ul>
    );
};

export default TodoList;