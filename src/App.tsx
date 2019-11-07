import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';
import Title from './Components/Title';
import NewTodoForm from './Components/NewTodoForm';

function App() {
  return (
    <div className="App">
      <Title text="To-do" />
      <NewTodoForm createAction={() => {}} />
      <TodoList
        todos={[
          {id: 0, task: 'Example text', completed: false},
          {id: 1, task: 'Example text 2', completed: true}
        ]}
      />
    </div>
  );
}

export default App;
