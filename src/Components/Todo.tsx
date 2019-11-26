import React from 'react';

import {Todo, CompleteCallback, DeleteCallback} from '../types';
import './Todo.css';

export interface TodoItemProps {
  todo: Todo;
  completeAction: CompleteCallback;
  deleteAction: DeleteCallback;
}

function TodoItem({
  todo,
  completeAction,
  deleteAction
}: TodoItemProps): React.ReactElement {
  return (
    <li className="todo">
      <div className={todo.completed ? 'completed' : undefined}>
        {todo.task}
      </div>
      <button
        type="button"
        className="complete primary-button"
        onClick={() => completeAction(todo)}
      >
        Complete
      </button>
      <button
        type="button"
        className="delete secondary-button"
        onClick={() => {
          if (deleteAction) deleteAction(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
