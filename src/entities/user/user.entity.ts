import { Column, Entity, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';

// Entities
import { BaseEntity } from '../base/base.entity';

@Entity('user', { orderBy: { id: 'DESC' } })
export class User extends BaseEntity {

  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ length: 100, nullable: false })
  @Unique(['email'])
  email: string;

  @Column({ length: 100, nullable: false, select: false })
  password: string;
  
}
