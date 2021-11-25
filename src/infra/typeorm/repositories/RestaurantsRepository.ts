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
    /*
      @TODO - implementar a listagem pelo ORM
    */
  }

  async create({ name, phone, dishes }: ICreateRestaurantDTO): Promise<Restaurant> {
    const restaurant = this.repository.create();
    Object.assign(restaurant, { name, phone, dishes });
    await this.repository.save(restaurant);
    return restaurant;
  }

  async delete(restaurantId: string): Promise<void> {
    /*
      @TODO - implementar a deleção do restaurante no ORM com o id informado
    */
    throw new Error('Method not implemented.');
  }
}

export { RestaurantsRepository };