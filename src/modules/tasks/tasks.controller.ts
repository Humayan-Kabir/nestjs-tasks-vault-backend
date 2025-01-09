import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
import { TaskResponseDto } from './dto/task.response.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  public async findAll(): Promise<TaskResponseDto[]> {
    return this.tasksService.findAll();
  }

  @Get('/:id')
  public async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TaskResponseDto> {
    return this.tasksService.findOne(id);
  }

  @Post()
  public async createNewTask(
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<TaskResponseDto> {
    return this.tasksService.createNewTask(createTaskDto);
  }

  @Patch('/:id')
  public async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskResponseDto> {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete('/:id')
  public async deleteTask(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.tasksService.deleteTask(id);
  }
}
