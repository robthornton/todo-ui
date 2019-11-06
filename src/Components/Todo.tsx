import React, {useState} from 'react';
import './Todo.css';

export type TodoDeleteCallback = () => void;

export interface TodoProps {
  id?: number;
  task?: string;
  completed?: boolean;
  deleteAction?: TodoDeleteCallback;
}

function Todo(
  {id, task, completed, deleteAction}: TodoProps = {id: 0}
): React.ReactElement {
  const [text, setText] = useState(task);
  const [complete, setComplete] = useState(completed);

  return (
    <div className="todo">
      <input
        type="text"
        name={`todo[${id || 0}]`}
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
