import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createRestaurant1637852571400 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'restaurant',
      columns: [
        { name: 'id', type: 'uuid', isPrimary: true },
        { name: 'name', type: 'varchar', isNullable: false },
        { name: 'phone', type: 'varchar', isNullable: false },
        { name: 'created_at', type: 'timestamp', default: 'now()' },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('restaurant');
  }
}
