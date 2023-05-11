import { UserRoutes } from './User.routes';
import { DebtRouter } from './Debt.routes';
import { Router } from 'express';
import { PaymentsRouter } from './Payments.routes';
import { loginRouter } from './Login.routes';

const router = Router();

router.use('/', UserRoutes);
router.use('/', DebtRouter);
router.use('/', PaymentsRouter);
router.use('/', loginRouter);

export { router }
