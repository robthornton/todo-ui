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

  function completeTodo(id: number) {
    api.complete(id);
    setSync(true);
  }

  function deleteTodo(id: number) {
    api.remove(id);
    setSync(true);
  }

  useEffect(() => {
    async function fetchTodos() {
      setTodos(await api.fetchAll());
    }

    fetchTodos();
  }, [sync, api]);

  return (
    <div className="App">
      <Title text="To-do" />
      <NewTodoForm createAction={api.add} />
      <TodoList
        todos={todos}
        completeAction={completeTodo}
        deleteAction={deleteTodo}
      />
    </div>
  );
}

export default App;
