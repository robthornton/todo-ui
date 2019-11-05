import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
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
