import React from 'react';

import TodoItem from './Todo';
import {Todo, CompleteCallback, DeleteCallback} from '../types';
import './TodoList.css';

export interface TodoListProps {
  todos: Array<Todo>;
  completeAction: CompleteCallback;
  deleteAction: DeleteCallback;
}

function TodoList({
  todos,
  completeAction,
  deleteAction
}: TodoListProps): React.ReactElement {
  return (
    <ul className="task-list">
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeAction={completeAction}
          deleteAction={deleteAction}
        />
      ))}
    </ul>
  );
}

export default TodoList;
