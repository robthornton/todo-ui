import {TodoAPI, Todo} from '../types';

export class FetchAPI implements TodoAPI {
  async complete(id: number) {
    await fetch('http://localhost:8080/todos/complete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
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
    return fetch('http://localhost:8080/todos').then((response) =>
      response.json()
    );
  }
}
