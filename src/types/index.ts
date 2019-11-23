export interface Todo {
  id: number;
  task: string;
  completed?: boolean;
}

export type CompleteCallback = (id: number) => void;
export type DeleteCallback = (id: number) => void;
