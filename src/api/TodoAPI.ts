import {TodoAPI, Todo} from '../types';

export class FetchAPI implements TodoAPI {
  async add(todo: Todo) {
    await fetch('http://localhost:8080/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
  }

  async complete(id: number) {
    await fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, complete: true})
    });
  }

  async remove(id: number) {
    await fetch('http://localhost:8080/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: id})
    });
  }

  async fetchAll(): Promise<Todo[]> {
    return fetch('http://localhost:8080/todos')
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }
}
