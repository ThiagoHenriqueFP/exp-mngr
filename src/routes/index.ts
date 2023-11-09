import { UserRoutes } from './User.routes';
import { DebtRouter } from './Debt.routes';
import { Router } from 'express';
import { PaymentsRouter } from './Payments.routes';
import { loginRouter } from './Login.routes';
import { checkJwt } from '../config/middleware/jwtCheck';
import { UserDebtsAndPaymentsRoute } from './UsersDebtsAndPayments.routes';
import { PaymentsDebtsRoute } from './PaymentsDebts.route';

const router = Router();

router.use('/auth', loginRouter);
router.use('/users', [checkJwt], UserRoutes);
router.use('/users', [checkJwt], UserDebtsAndPaymentsRoute);
router.use('/debts', [checkJwt], DebtRouter);
router.use('/payments', [checkJwt], PaymentsRouter);
router.use('/payments', [checkJwt], PaymentsDebtsRoute);

export { router }
