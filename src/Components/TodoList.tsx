import React from 'react';
import TodoItem, {Todo, TodoItemProps} from './Todo';
import './TodoList.css';

export interface TodoListProps {
  todos: Array<Todo>;
}

function TodoList({todos}: TodoListProps): React.ReactElement {
  return (
    <ul className="task-list">
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          completeAction={() => {}}
          deleteAction={() => {}}
        />
      ))}
    </ul>
  );
}

export default TodoList;
