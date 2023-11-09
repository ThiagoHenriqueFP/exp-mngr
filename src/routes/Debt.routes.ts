import { Router } from 'express';
import { createDebtController } from '../modules/debt/useCases/createDebt';
import { deleteDebtController } from '../modules/debt/useCases/deleteDebt';
import { listDebtController } from '../modules/debt/useCases/listDebt';
import { listDebtByPaymentController } from '../modules/debt/useCases/listDebtsByPaymentId';
import { listDebtByUserController } from '../modules/debt/useCases/listDebtsByUser';
import { listOneDebtController } from '../modules/debt/useCases/listOneDebt';
import { updateDebtController } from '../modules/debt/useCases/updateDebt';

export const DebtRouter = Router();

DebtRouter.post('/', (req, res) => {
  createDebtController.handle(req, res);
});

DebtRouter.get('/', (req, res) => {
  listDebtController.handle(req, res);
});

DebtRouter.get('/:id', (req, res) => {
  listOneDebtController.handle(req, res);
});

DebtRouter.patch('/:id', (req, res) => {
  updateDebtController.handle(req, res);
});

DebtRouter.delete('/:id', (req, res) => {
  deleteDebtController.handle(req, res);
});
