import { ICreateRestaurantDTO } from "dtos/ICreateRestaurantDTO";
import { IRestaurant } from "entities/IRestaurant";

interface IRestaurantRepository {
  list(): Promise<IRestaurant[]>;
  create(data: ICreateRestaurantDTO): Promise<IRestaurant>;
  delete(restaurantId: string): Promise<void>;
}

export { IRestaurantRepository };