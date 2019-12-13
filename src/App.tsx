import React, {useCallback, useEffect, useState} from 'react';
import {CreateTodoInput, Title, TodoList} from './components';
import {Todo, TodoAPI} from './types';

import * as styles from './App.module.css';

export interface AppProps {
  api: TodoAPI;
}

function App({api}: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function addTodo(todo: Todo) {
    todo.completed = false;
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
    <div className={styles.body}>
      <Title text="To-do" />
      <CreateTodoInput onCreate={addTodo} />
      <TodoList todos={todos} onComplete={completeTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
