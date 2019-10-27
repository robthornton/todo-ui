import React from 'react';
import Todo, {WithTodoProps} from './Todo';

interface WithTodoListProps {
  todos: Array<WithTodoProps>;
}

function TodoList({todos}: WithTodoListProps): React.ReactElement {
  return (
    <ul>
      {todos.map((todo: WithTodoProps) => (
        <li key={todo.id}>
          <Todo />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
