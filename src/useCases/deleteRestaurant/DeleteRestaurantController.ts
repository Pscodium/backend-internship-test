import { Request, Response } from "express";
import { DeleteRestaurantUseCase } from "./DeleteRestaurantUseCase";


class DeleteRestaurantController {
  async handle(req: Request, res: Response): Promise<Response> {
    const restaurantId = '';

    /* 
      @TODO - obter o id do restaurante dos parametros de rota e enviá-lo para o useCase 
    */

    const deleteRestaurantUseCase = new DeleteRestaurantUseCase();
    await deleteRestaurantUseCase.execute(restaurantId);
    return res.status(204).send();
  }
}


export { DeleteRestaurantController };