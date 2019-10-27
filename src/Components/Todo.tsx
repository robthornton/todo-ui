import React, {useState} from 'react';

export interface WithTodoProps {
  id?: number;
  task?: string;
  completed?: boolean;
}

function Todo({task, completed}: WithTodoProps): React.ReactElement {
  const [text, setText] = useState(task);

  return (
    <div className="todo">
      <input
        type="text"
        className={completed ? 'completed' : undefined}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
}

export default Todo;
