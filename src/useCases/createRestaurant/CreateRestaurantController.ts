import { Request, Response } from "express";
import { CreateRestaurantUseCase } from "./CreateRestaurantUseCase";


class CreateRestaurantController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, phone, dishes } = req.body;
    const createRestaurantUseCase = new CreateRestaurantUseCase();
    const restaurant = await createRestaurantUseCase.execute({ name, phone, dishes });
    return res.status(201).json(restaurant);
  }
}


export { CreateRestaurantController };