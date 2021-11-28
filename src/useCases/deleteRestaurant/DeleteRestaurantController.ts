import { Request, Response } from "express";
import { DeleteRestaurantUseCase } from "./DeleteRestaurantUseCase";


class DeleteRestaurantController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { restaurantId } = req.query;

    if(!restaurantId) {
      return res.sendStatus(400)
    }

    const deleteRestaurantUseCase = new DeleteRestaurantUseCase();
    await deleteRestaurantUseCase.execute(restaurantId);
    return res.status(204).send();
  }
}


export { DeleteRestaurantController };