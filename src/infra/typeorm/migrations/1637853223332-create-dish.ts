import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createDish1637853223332 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'dish',
      columns: [
        { name: 'id', type: 'uuid', isPrimary: true },
        { name: 'name', type: 'varchar', isNullable: false },
        { name: 'price', type: 'float', isNullable: false },
        { name: 'created_at', type: 'timestamp', default: 'now()' },
        { name: 'restaurant_id', type: 'uuid', isNullable: false },
      ],
      foreignKeys: [
        {
          name: 'FKDishRestaurant',
          referencedTableName: 'restaurant',
          columnNames: ['restaurant_id'],
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dish');
  }
}
