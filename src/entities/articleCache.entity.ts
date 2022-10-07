import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  // UpdateDateColumn,
} from 'typeorm';

@Entity('article-cache')
export class ArticleCache {
  constructor(data?: ArticleCache) {
    if (typeof data === 'object') {
      Object.keys(data).forEach((index) => {
        this[index] = data[index];
      });
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  content: string;

  @Column({ type: 'varchar' })
  url: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  author: string;

  @Column({ type: 'varchar' })
  publishedAt: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;
}
