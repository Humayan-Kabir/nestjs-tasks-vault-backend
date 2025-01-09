import { TaskStatus } from '../interfaces/task.status';

export class TaskResponseDto {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
}
