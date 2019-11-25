export interface Todo {
  id: number;
  task: string;
  completed?: boolean;
}

export interface TodoAPI {
  add(todo: string): void;
  complete(id: number): void;
  fetchAll(): Promise<Todo[]>;
  remove(id: number): void;
}

export type CreateCallback = (todo: string) => void;
export type CompleteCallback = (id: number) => void;
export type DeleteCallback = (id: number) => void;
