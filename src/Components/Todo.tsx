import React, {useState} from 'react';
import './Todo.css';

export type TodoCallback = (id: number) => void;

export interface Todo {
  id: number;
  task: string;
  completed?: boolean;
}
export interface TodoProps {
  todo: Todo;
  completeAction: TodoCallback;
  deleteAction: TodoCallback;
}

function Todo({
  todo,
  completeAction,
  deleteAction
}: TodoProps): React.ReactElement {
  return (
    <div className="todo">
      <span className={todo.completed ? 'completed' : undefined}>
        {todo.task}
      </span>
      <button
        type="button"
        className="complete primary-button"
        onClick={() => completeAction(todo.id)}
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
    </div>
  );
}

export default Todo;
