import { Request, Response } from "express";
import { CreateDishUseCase } from "./CreateDishUseCase";


class CreateDishController {
  async handle(req: Request, res: Response): Promise<Response> {

    /* 
    @TODO - 
      pegar o id do restaurante dos parâmetros de rota
      pegar o nome e o preço do corpo da requisição
    */

    const createDishUseCase = new CreateDishUseCase();
    // const dish = await createDishUseCase.execute({ name, price, restaurantId });

    // return res.status(201).json(dish);
  }
}


export { CreateDishController };