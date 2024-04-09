import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePostTable1651270421472 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'post',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'createdAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'title',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'content',
            type: 'longtext',
            isNullable: false,
          },
          {
            name: 'postedAt',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'postedBy',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'tags',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }

}
