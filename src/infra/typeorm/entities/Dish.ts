import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { IDish } from 'entities/IDish';
import { Restaurant } from './Restaurant';

@Entity('dish')
class Dish implements IDish {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'restaurant_id' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.dishes)
  @JoinColumn({ name: "restaurant_id" })
  restaurant: Restaurant;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Dish };
