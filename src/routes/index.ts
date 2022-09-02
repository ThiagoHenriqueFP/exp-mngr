import { Router } from 'express';
import { UserRoutes } from './User.routes';
import { DebtRoutes } from './Debt.routes';

const router = Router();

router.use('/', UserRoutes);
router.use('/', DebtRoutes);

export { router };
