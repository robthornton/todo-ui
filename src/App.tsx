import React, {useCallback, useEffect, useState} from 'react';
import TodoList from './components/TodoList';
import Title from './components/Title';
import NewTodoForm from './components/NewTodoForm';

import './App.css';
import {Todo, TodoAPI} from './types';

export interface AppProps {
  api: TodoAPI;
}

function App({api}: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function addTodo(todo: Todo) {
    await api.add(todo);
    await fetchTodos();
  }

  async function completeTodo(todo: Todo) {
    todo.completed = !todo.completed;
    await api.update(todo);
    await fetchTodos();
  }

  async function deleteTodo(id: number) {
    await api.remove(id);
    await fetchTodos();
  }

  const fetchTodos = useCallback(async () => {
    setTodos(await api.fetchAll());
  }, [api]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="App">
      <Title text="To-do" />
      <NewTodoForm createAction={addTodo} />
      <TodoList
        todos={todos}
        completeAction={completeTodo}
        deleteAction={deleteTodo}
      />
    </div>
  );
}

export default App;
