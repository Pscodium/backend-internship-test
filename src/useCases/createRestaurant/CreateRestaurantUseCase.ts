import { IRestaurant } from "entities/IRestaurant";
import { Dish } from "../../infra/typeorm/entities/Dish";
import { RestaurantsRepository } from "../../infra/typeorm/repositories/RestaurantsRepository";

interface IRequest {
  name: string;
  phone: string;
  dishes: Dish[];
}


class CreateRestaurantUseCase {
  async execute({ name, phone, dishes }: IRequest): Promise<IRestaurant> {
    const restaurantsRepository = new RestaurantsRepository();
    const dishInstances = dishes.map(({ name, price }) => {
      const dish = new Dish();
      Object.assign(dish, { name, price });
      return dish;
    });
    const restaurant = await restaurantsRepository.create({ name, phone, dishes: dishInstances });
    return restaurant;
  }
}


export { CreateRestaurantUseCase };