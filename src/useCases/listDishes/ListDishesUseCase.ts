import { IDish } from "entities/IDish";
import { DishesRepository } from "../../infra/typeorm/repositories/DishesRepository";

class ListDishesUseCase {
  async execute(restaurantId: string): Promise<IDish[]> {
    const dishesRepository = new DishesRepository();
    const dishes = dishesRepository.list(restaurantId);
    return dishes;
  }
}


export { ListDishesUseCase };