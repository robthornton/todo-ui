import React, {useState, ChangeEvent} from 'react';

import './NewTodoForm.css';

export type CreateCallback = (input: string) => void;

export interface NewTodoFormProps {
  createAction: CreateCallback;
}

function NewTodoForm({createAction}: NewTodoFormProps): JSX.Element {
  const [text, setText] = useState('');

  return (
    <div className="new-todo-form">
      <input
        value={text}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          createAction(text);
        }}
      >
        Create
      </button>
    </div>
  );
}

export default NewTodoForm;
