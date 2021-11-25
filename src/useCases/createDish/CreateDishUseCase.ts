import { ICreateDishDTO } from "dtos/ICreateDishDTO";
import { IDish } from "entities/IDish";
import { DishesRepository } from "../../infra/typeorm/repositories/DishesRepository";

class CreateDishUseCase {
  async execute(data: ICreateDishDTO): Promise<IDish> {
    const dishesRepository = new DishesRepository();
    const dish = await dishesRepository.create(data);
    return dish;
  }
}


export { CreateDishUseCase };