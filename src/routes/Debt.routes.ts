import { Router } from 'express';
import { createDebtController } from '../modules/debt/useCases/createDebt';

const DebtRoutes = Router();

DebtRoutes.post('/debts/', (req, res) => {
  createDebtController.handle(req, res);
});

export { DebtRoutes };
