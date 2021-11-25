import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Dish } from './Dish';
import { IRestaurant } from 'entities/IRestaurant';

@Entity('restaurant')
class Restaurant implements IRestaurant {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => Dish, dish => dish.restaurant, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  dishes: Dish[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Restaurant };
