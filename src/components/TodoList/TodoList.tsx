import React from 'react';

import TodoItem from './TodoItem/TodoItem';
import {Todo, CompleteCallback, DeleteCallback} from '../../types';
import styles from './TodoList.module.css';

export interface TodoListProps {
  todos: Todo[];
  onComplete: CompleteCallback;
  onDelete: DeleteCallback;
}

export function TodoList({
  todos,
  onComplete,
  onDelete
}: TodoListProps): React.ReactElement {
  return (
    <ul className={styles.list}>
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
