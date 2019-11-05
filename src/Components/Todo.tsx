import React, {useState} from 'react';
import './Todo.css';

export interface TodoProps {
  id?: number;
  task?: string;
  completed?: boolean;
}

function Todo({task, completed}: TodoProps): React.ReactElement {
  const [text, setText] = useState(task);
  const [complete, setComplete] = useState(completed);

  return (
    <div className="todo">
      <input
        type="text"
        className={complete ? 'completed' : undefined}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type="button"
        className="complete primary-button"
        onClick={() => setComplete(!complete)}
      >
        Complete
      </button>
      <button
        type="button"
        className="delete secondary-button"
        onClick={(event) => console.log('delete event')}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
