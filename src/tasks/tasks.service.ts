import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks : Task[] = [];

  getAllTasks(): Task[]{
    return this.tasks;
  }

  createTask(CreateTaskDto: CreateTaskDto){
    const { title, description } = CreateTaskDto;

    const task: Task = {
      id: Math.round(Math.random()),
      title,
      description,
      status: TaskStatus.OPEN,
    };

  this.tasks.push(task);
  return task;
  }
}
