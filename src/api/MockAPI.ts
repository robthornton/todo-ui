import {Todo, TodoAPI} from '../types';

export class MockAPI implements TodoAPI {
  add(todo: Todo) {}
  update(todo: Todo) {}
  remove(id: number) {}
  fetchAll(): Promise<Todo[]> {
    return Promise.resolve([]);
  }
}
