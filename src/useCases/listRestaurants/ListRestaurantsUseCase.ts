import { IRestaurant } from "entities/IRestaurant";
import { RestaurantsRepository } from "../../infra/typeorm/repositories/RestaurantsRepository";


class ListRestaurantsUseCase {
  async execute(): Promise<IRestaurant[]> {
    const restaurantsRepository = new RestaurantsRepository();
    const restaurants = await restaurantsRepository.list();
    return restaurants;
  }
}


export { ListRestaurantsUseCase };