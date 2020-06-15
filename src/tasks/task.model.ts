export interface Task{
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus{
  OPEN = "OPEN",
  IN_POGRESS = "IN_POGRESS",
  DONE = "DONE",
} 