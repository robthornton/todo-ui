import {TodoAPI, Todo} from '../types';

export class FetchAPI implements TodoAPI {
  async add(todo: Todo) {
    await fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
  }

  async update(todo: Todo) {
    await fetch('http://localhost:8080/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
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

  fetchAll(): Promise<Todo[]> {
    return fetch('http://localhost:8080/todos').then((response) =>
      response.json()
    );
  }
}
