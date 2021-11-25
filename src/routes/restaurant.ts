import { Router } from 'express';
import { CreateDishController } from '../useCases/createDish/CreateDishController';
import { CreateRestaurantController } from '../useCases/createRestaurant/CreateRestaurantController';
import { ListRestaurantsController } from '../useCases/listRestaurants/ListRestaurantsController';

const router = Router();

const listRestaurantsController = new ListRestaurantsController();
const createRestaurantController = new CreateRestaurantController();
const createDishController = new CreateDishController();

router.get('/', listRestaurantsController.handle);
router.post('/', createRestaurantController.handle);
router.post('/:restaurantId/dish', createDishController.handle);

/* 
  @TODO - implementar um endpoint de deleção de restaurante
  método DELETE - definir id do restaurante nos parâmetros de rota
*/

export default router;