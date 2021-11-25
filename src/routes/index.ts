import { Router } from 'express';

import restaurant from './restaurant';
import dish from './dish';

const router = Router();

router.use('/restaurant', restaurant);
router.use('/dish', dish);

export default router;