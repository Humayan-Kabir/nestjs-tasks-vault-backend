import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskStatus } from '../interfaces/task.status';
import { TaskLabel } from './task.label.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.OPEN,
    nullable: false,
  })
  status: TaskStatus;

  @OneToMany(() => TaskLabel, (taskLabel) => taskLabel.task, { cascade: true })
  labels: TaskLabel[];

  @CreateDateColumn({
    type: 'timestamp with time zone',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
  })
  updatedAt?: Date;
}
