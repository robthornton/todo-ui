import React from 'react';

interface WithTodoProps {
  task: string;
  completed: boolean;
}

function Todo({task, completed}: WithTodoProps) {
  return (
    <div className="todo">
      <input type="text" className={completed && 'completed'}>
        {task}
      </input>
    </div>
  );
}

export default Todo;
