import React, {useState, ChangeEvent, KeyboardEvent, useCallback} from 'react';

import {CreateCallback} from '../../types';
import styles from './TodoForm.module.css';

export interface TodoFormProps {
  onCreate: CreateCallback;
}

// rename to CreateInput
function TodoForm({onCreate}: TodoFormProps): JSX.Element {
  const [text, setText] = useState('');

  // handleOnClick vs onCreate vs onSubmit
  function submitNewTodo() {
    onCreate({id: 0, task: text});
    setText('');
  }

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
