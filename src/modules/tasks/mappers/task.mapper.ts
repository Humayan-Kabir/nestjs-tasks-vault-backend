import { Injectable } from '@nestjs/common';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/create.task.dto';
import { UpdateTaskDto } from '../dto/update.task.dto';
import { TaskResponseDto } from '../dto/task.response.dto';

@Injectable()
export class TaskMapper {
  toEntity(dto: CreateTaskDto): Task {
    const task = new Task();
    task.title = dto.title;
    task.description = dto.description;
    task.status = dto.status;
    return task;
  }

  toResponseDto(entity: Task): TaskResponseDto {
    const dto = new TaskResponseDto();
    dto.id = entity.id;
    dto.title = entity.title;
    dto.description = entity.description;
    dto.status = entity.status;
    dto.createdAt = entity.createdAt;
    dto.updatedAt = entity.updatedAt;
    return dto;
  }

  toResponseDtoList(entities: Task[]): TaskResponseDto[] {
    return entities.map((entity) => this.toResponseDto(entity));
  }

  mergeToEntity(entity: Task, dto: UpdateTaskDto): Task {
    const merged = new Task();
    merged.id = entity.id;
    merged.createdAt = entity.createdAt;
    merged.title = dto.title ?? entity.title;
    merged.description = dto.description ?? entity.description;
    merged.status = dto.status ?? entity.status;
    return merged;
  }
}
