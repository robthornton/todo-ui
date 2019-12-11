import React from 'react';

import {TodoItem} from '../TodoItem';
import {Todo, CompleteCallback, DeleteCallback} from '../../types';
import {List} from '../List';
import {ListItem} from '../ListItem';

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
  const itemRenderer = (i: number): React.ReactElement => {
    const todo = todos[i];

    return (
      <ListItem key={todo.id}>
        <TodoItem todo={todo} onComplete={onComplete} onDelete={onDelete} />
      </ListItem>
    );
  };

  return <List count={todos.length} itemRenderer={itemRenderer} />;
}
