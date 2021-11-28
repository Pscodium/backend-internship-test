import { Repository, getRepository } from 'typeorm';

import { ICreateRestaurantDTO } from 'dtos/ICreateRestaurantDTO';
import { IRestaurantRepository } from 'repositories/IRestaurantRepository';

import { Restaurant } from '../entities/Restaurant';

class RestaurantsRepository implements IRestaurantRepository {
  repository: Repository<Restaurant>;

  constructor() {
    this.repository = getRepository(Restaurant);
  }

  async list(): Promise<Restaurant[]> {
    const restaurants = this.repository.find({relations: ['dishes']})
    return restaurants
  }

  async create({ name, phone, dishes }: ICreateRestaurantDTO): Promise<Restaurant> {
    const restaurant = this.repository.create();
    Object.assign(restaurant, { name, phone, dishes });
    await this.repository.save(restaurant);
    return restaurant;
  }

  async delete(restaurantId: string): Promise<void> {
    await this.repository.delete(restaurantId)
  }
}

export { RestaurantsRepository };