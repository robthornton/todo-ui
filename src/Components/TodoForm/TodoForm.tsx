import React, {useState, ChangeEvent, KeyboardEvent} from 'react';

import {CreateCallback} from '../../types';
import styles from './TodoForm.module.css';

export interface TodoFormProps {
  createAction: CreateCallback;
}

function TodoForm({createAction}: TodoFormProps): JSX.Element {
  const [text, setText] = useState('');

  function submitNewTodo() {
    createAction({id: 0, task: text});
    setText('');
  }

  console.log(styles);

  return (
    <div className={styles.form}>
      <input
        className={styles.input}
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

export default TodoForm;
