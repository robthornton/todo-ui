import React, {useState} from 'react';
import './Todo.css';

export interface TodoProps {
  id?: number;
  task?: string;
  completed?: boolean;
}

function Todo({task, completed}: TodoProps): React.ReactElement {
  const [text, setText] = useState(task);

  return (
    <div className="todo">
      <input
        type="text"
        className={completed ? 'completed' : undefined}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type="button"
        className="primary-button"
        onChange={(event) => console.log('complete event')}
      >
        Complete
      </button>
      <button
        type="button"
        className="secondary-button"
        onChange={(event) => console.log('delete event')}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
