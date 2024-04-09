
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Entities
import { BaseEntity } from '../base/base.entity';

@Entity('post', { orderBy: { id: 'DESC' } })
export class Post extends BaseEntity {

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ length: 255, nullable: false })
  title: string;

  @Column({ nullable: false })
  content: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  postedAt: Date;

  @Column({ nullable: false })
  postedBy: string;

  @Column('simple-array')
  tags: string[];
  
}
