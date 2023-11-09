import { Router } from 'express';
import { listDebtByUserController } from '../modules/debt/useCases/listDebtsByUser';
import { listPaymentsController } from '../modules/paymetns/useCases/listPayments';

const UserDebtsAndPaymentsRoute = Router();

UserDebtsAndPaymentsRoute.get('/:userId/debts', (req, res) => {
  listDebtByUserController.handle(req, res);
});

UserDebtsAndPaymentsRoute.get('/:userId/payments', (req, res) => {
  listPaymentsController.handle(req, res);
});

export {UserDebtsAndPaymentsRoute}
