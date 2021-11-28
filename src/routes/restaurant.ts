import { Router } from 'express';
import { CreateDishController } from '../useCases/createDish/CreateDishController';
import { CreateRestaurantController } from '../useCases/createRestaurant/CreateRestaurantController';
import { ListRestaurantsController } from '../useCases/listRestaurants/ListRestaurantsController';
import { DeleteRestaurantController } from '../useCases/deleteRestaurant/DeleteRestaurantController';

const router = Router();

const listRestaurantsController = new ListRestaurantsController();
const createRestaurantController = new CreateRestaurantController();
const createDishController = new CreateDishController();
const deleteRestaurantController = new DeleteRestaurantController()

router.get('/', listRestaurantsController.handle);
router.post('/', createRestaurantController.handle);
router.post('/:restaurantId/dish', createDishController.handle);
router.delete('/', deleteRestaurantController.handle)

export default router;