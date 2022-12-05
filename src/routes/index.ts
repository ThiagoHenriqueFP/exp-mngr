import { UserRoutes } from './User.routes';
import { DebtRouter } from './Debt.routes';
import { Router } from 'express';

const router = Router();

router.use('/', UserRoutes);
router.use('/', DebtRouter);

export { router }
