import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Post } from '../entities/post/post.entity';
import { postSeed } from '../seeds/post.seed';

export class SeedPostTable1651270465907 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository(Post).save(postSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
