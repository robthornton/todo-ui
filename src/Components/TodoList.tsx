import React from 'react';
import Todo, {TodoProps} from './Todo';
import './TodoList.css';

interface WithTodoListProps {
  todos: Array<TodoProps>;
}

function TodoList({todos}: WithTodoListProps): React.ReactElement {
  return (
    <ul className="task-list">
      {todos.map((todo: TodoProps) => (
        <li key={todo.id}>
          <Todo task={todo.task} completed={todo.completed} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
