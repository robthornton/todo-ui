import React, {useState} from 'react';
import './Todo.css';

export type TodoDeleteCallback = () => void;

export interface TodoProps {
  task?: string;
  completed?: boolean;
  deleteAction?: TodoDeleteCallback;
}

function Todo({task, completed, deleteAction}: TodoProps): React.ReactElement {
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
        onClick={() => {
          if (deleteAction) deleteAction();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
