import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskMapper } from './mappers/task.mapper';
import { TaskLabel } from './entities/task.label.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskLabel])],
  controllers: [TasksController],
  providers: [TasksService, TaskMapper],
})
export class TasksModule {}
