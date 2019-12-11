import React from 'react';

import {Todo, CompleteCallback, DeleteCallback} from '../../types';
import styles from './TodoItem.module.css';

export interface TodoItemProps {
  todo: Todo;
  onComplete: CompleteCallback;
  onDelete: DeleteCallback;
}

export function TodoItem({
  todo,
  onComplete,
  onDelete
}: TodoItemProps): React.ReactElement {
  return (
    <>
      <div className={`${styles.div} ${todo.completed ? styles.complete : ''}`}>
        {todo.task}
      </div>
      <button
        type="button"
        className="complete primary-button"
        onClick={() => onComplete(todo)}
      >
        Complete
      </button>
      <button
        type="button"
        className="delete secondary-button"
        onClick={() => {
          if (onDelete) onDelete(todo.id);
        }}
      >
        Delete
      </button>
    </>
  );
}
