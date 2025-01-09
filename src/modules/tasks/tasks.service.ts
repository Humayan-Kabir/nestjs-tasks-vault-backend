import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create.task.dto';
import { TaskMapper } from './mappers/task.mapper';
import { TaskResponseDto } from './dto/task.response.dto';
import { ResourceNotFoundException } from './exceptions/resource.not.found.exception';
import { UpdateTaskDto } from './dto/update.task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
    private readonly taskMapper: TaskMapper,
  ) {}

  public async findAll(): Promise<TaskResponseDto[]> {
    return this.taskMapper.toResponseDtoList(await this.tasksRepository.find());
  }

  public async findOne(id: number): Promise<TaskResponseDto> {
    const task = await this.tasksRepository.findOneBy({ id });
    if (!task) {
      throw new ResourceNotFoundException(`Task with ID ${id} not found`);
    }
    return this.taskMapper.toResponseDto(task);
  }

  public async createNewTask(
    createTaskDto: CreateTaskDto,
  ): Promise<TaskResponseDto> {
    const savedTask = await this.tasksRepository.save(
      this.taskMapper.toEntity(createTaskDto),
    );
    return this.taskMapper.toResponseDto(savedTask);
  }

  public async updateTask(
    id: number,
    updateTaskDto: UpdateTaskDto,
  ): Promise<TaskResponseDto> {
    const task = await this.tasksRepository.findOneBy({ id });
    if (!task) {
      throw new ResourceNotFoundException(`Task with ID ${id} not found`);
    }
    const updatedTask = this.taskMapper.mergeToEntity(task, updateTaskDto);
    await this.tasksRepository.save(updatedTask);
    return this.taskMapper.toResponseDto(updatedTask);
  }

  public async deleteTask(id: number): Promise<void> {
    const deleteResult = await this.tasksRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new ResourceNotFoundException(`Task with ID ${id} not found`);
    }
  }
}
