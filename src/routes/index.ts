import { UserRoutes } from './User.routes';
import { DebtRouter } from './Debt.routes';
import { Router } from 'express';
import { PaymentsRouter } from './Payments.routes';

const router = Router();

router.use('/', UserRoutes);
router.use('/', DebtRouter);
router.use('/', PaymentsRouter);

export { router }
