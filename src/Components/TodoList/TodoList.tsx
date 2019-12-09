import React from 'react';

import TodoItem from './TodoItem/TodoItem';
import {Todo, CompleteCallback, DeleteCallback} from '../../types';
import './TodoList.css';

export interface TodoListProps {
  todos: Todo[];
  onComplete: CompleteCallback;
  onDelete: DeleteCallback;
}

function TodoList({
  todos,
  onComplete,
  onDelete
}: TodoListProps): React.ReactElement {
  return (
    <ul className="task-list">
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
