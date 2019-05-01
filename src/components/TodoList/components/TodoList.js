import React from 'react';

import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {
    <u>
        {todos.map((todo, index) => {
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
        })}
    </u>
}

export default TodoList;