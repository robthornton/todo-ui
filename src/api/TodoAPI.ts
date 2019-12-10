import {TodoAPI, Todo} from '../types';
import axios from 'axios';

export class FetchAPI implements TodoAPI {
  async add(todo: Todo) {
    await axios.post('http://localhost:8080/todos', JSON.stringify(todo), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async update(todo: Todo) {
    await axios.put(
      `http://localhost:8080/todos/${todo.id}`,
      JSON.stringify(todo),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  async remove(id: number) {
    await axios.delete(`http://localhost:8080/todos/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  fetchAll(): Promise<Todo[]> {
    return axios
      .get('http://localhost:8080/todos')
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return [];
      });
  }
}
