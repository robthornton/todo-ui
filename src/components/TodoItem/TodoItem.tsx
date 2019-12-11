import React from 'react';

import {Todo, CompleteCallback, DeleteCallback} from '../../types';
import {Button} from '../Button';
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
      <Button label="Complete" onClick={() => onComplete(todo)} />
      <Button label="Delete" onClick={() => onDelete(todo.id)} />
    </>
  );
}
