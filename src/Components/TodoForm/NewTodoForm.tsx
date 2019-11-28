import React, {useState, ChangeEvent, KeyboardEvent} from 'react';

import {CreateCallback} from '../types';
import './NewTodoForm.css';

export interface NewTodoFormProps {
  createAction: CreateCallback;
}

function NewTodoForm({createAction}: NewTodoFormProps): JSX.Element {
  const [text, setText] = useState('');

  function submitNewTodo() {
    createAction({id: 0, task: text});
    setText('');
  }

  return (
    <div className="new-todo-form">
      <input
        value={text}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value);
        }}
        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
          const code = event.keyCode | event.which;
          if (code === 13) {
            submitNewTodo();
          }
        }}
      />
      <button type="button" onClick={submitNewTodo}>
        Create
      </button>
    </div>
  );
}

export default NewTodoForm;
