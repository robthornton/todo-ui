import {Todo, TodoAPI} from '../types';

export class MockAPI implements TodoAPI {
  add(todo: Todo) {}
  complete(id: number) {}
  remove(id: number) {}
  fetchAll(): Promise<Todo[]> {
    return Promise.resolve([]);
  }
}
