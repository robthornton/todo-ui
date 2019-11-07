export interface Todo {
  id: number;
  task: string;
  completed?: boolean;
}

export type TodoCallback = (id: number) => void;
