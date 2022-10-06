import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  // UpdateDateColumn,
} from 'typeorm';

@Entity('news-cache')
export class NewsCache {
  constructor(data?: NewsCache) {
    if (typeof data === 'object') {
      Object.keys(data).forEach((index) => {
        this[index] = data[index];
      });
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;
}
