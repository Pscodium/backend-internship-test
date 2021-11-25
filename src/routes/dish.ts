import { Router } from 'express';
import { ListDishesController } from '../useCases/listDishes/ListDishesController';

const router = Router();

const listDishesController = new ListDishesController();

router.get('/', listDishesController.handle);

export default router;