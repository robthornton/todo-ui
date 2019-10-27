import React from 'react';

interface WithTodoProps {
  task: string;
  completed: boolean;
}

function Todo({task, completed}: WithTodoProps): React.ReactElement {
  return (
    <div className="todo">
      <input
        type="text"
        className={completed ? 'completed' : undefined}
        value={task}
      />
    </div>
  );
}

export default Todo;
