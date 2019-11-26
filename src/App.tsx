import React, {useState, useEffect} from 'react';
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
  const [sync, setSync] = useState(true);

  async function addTodo(todo: Todo) {
    await api.add(todo);
    setSync(true);
  }

  async function completeTodo(id: number) {
    await api.complete(id);
    setSync(true);
  }

  async function deleteTodo(id: number) {
    await api.remove(id);
    setSync(true);
  }

  useEffect(() => {
    async function fetchTodos() {
      setTodos(await api.fetchAll());
    }

    if (sync) {
      fetchTodos();
      setSync(false);
    }
  }, [sync, api]);

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
