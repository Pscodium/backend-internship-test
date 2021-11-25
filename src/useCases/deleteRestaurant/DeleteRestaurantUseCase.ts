import { RestaurantsRepository } from "infra/typeorm/repositories/RestaurantsRepository";

class DeleteRestaurantUseCase {
  async execute(restaurantId: string): Promise<void> {
    const restaurantsRepository = new RestaurantsRepository();
    await restaurantsRepository.delete(restaurantId);
  }
}


export { DeleteRestaurantUseCase };