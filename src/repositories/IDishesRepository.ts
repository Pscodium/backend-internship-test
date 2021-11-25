import { ICreateDishDTO } from "dtos/ICreateDishDTO";
import { IDish } from "entities/IDish";

interface IDishesRepository {
  create(data: ICreateDishDTO): Promise<IDish>;
  list(restaurantId: string): Promise<IDish[]>;
}

export { IDishesRepository };