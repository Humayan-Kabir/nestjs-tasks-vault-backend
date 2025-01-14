import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Task } from './task.entity';

@Entity()
@Unique(['name', 'taskId'])
export class TaskLabel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({ name: 'task_id' })
  taskId: string;

  @ManyToOne(() => Task, (task) => task.labels, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'task_id' })
  task: Task;
}
