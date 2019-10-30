import React from 'react';
import Todo, {TodoProps} from './Todo';

interface WithTodoListProps {
  todos: Array<TodoProps>;
}

function TodoList({todos}: WithTodoListProps): React.ReactElement {
  return (
    <ul>
      {todos.map((todo: TodoProps) => (
        <li key={todo.id}>
          <Todo />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
