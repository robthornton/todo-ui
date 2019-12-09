import React from 'react';

import TodoItem from './TodoItem/TodoItem';
import {Todo, CompleteCallback, DeleteCallback} from '../../types';
import './TodoList.css';

export interface TodoListProps {
  todos: Todo[];
  completeAction: CompleteCallback;
  onDelete: DeleteCallback;
}

function TodoList({
  todos,
  completeAction,
  onDelete
}: TodoListProps): React.ReactElement {
  return (
    <ul className="task-list">
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeAction={completeAction}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
