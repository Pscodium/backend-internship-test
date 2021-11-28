import { Request, Response } from "express";
import { CreateRestaurantUseCase } from "./CreateRestaurantUseCase";


class CreateRestaurantController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, phone, dishes } = req.body;

    if(!name || !phone || !dishes) {
      return res.sendStatus(400)
    }

    const createRestaurantUseCase = new CreateRestaurantUseCase();
    try {
    const restaurant = await createRestaurantUseCase.execute({ name, phone, dishes });
    return res.status(201).json(restaurant);
    } catch{
      return res.sendStatus(400)
    }
  }
}


export { CreateRestaurantController };