import { Request, Response } from "express";
import { ListRestaurantsUseCase } from "./ListRestaurantsUseCase";


class ListRestaurantsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = new ListRestaurantsUseCase();
    const restaurants = await useCase.execute();
    return res.json(restaurants);
  }
}


export { ListRestaurantsController };