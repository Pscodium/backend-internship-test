import { ICreateDishDTO } from "dtos/ICreateDishDTO";
import { IDish } from "entities/IDish";
import { IDishesRepository } from "repositories/IDishesRepository";
import { getRepository, Repository } from "typeorm";
import { Dish } from "../entities/Dish";

class DishesRepository implements IDishesRepository {
  repository: Repository<Dish>;

  constructor() {
    this.repository = getRepository(Dish);
  }

  async create({ name, price, restaurantId }: ICreateDishDTO): Promise<Dish> {
    const dish = this.repository.create();

    Object.assign(dish, { name, price, restaurantId });
    
    await this.repository.save(dish);
    return dish;
  }

  async list(restaurantId: string): Promise<IDish[]> {
    const whereClause = restaurantId ? { restaurantId } : {};

    const dishes = await this.repository.find(whereClause);
    return dishes;
  }
}

export { DishesRepository };