import { Router } from 'express';
import { createDebtController } from '../modules/debt/useCases/createDebt';
import { deleteDebtController } from '../modules/debt/useCases/deleteDebt';
import { listDebtController } from '../modules/debt/useCases/listDebt';
import { listDebtByPaymentController } from '../modules/debt/useCases/listDebtsByPaymentId';
import { listDebtByUserController } from '../modules/debt/useCases/listDebtsByUser';
import { listOneDebtController } from '../modules/debt/useCases/listOneDebt';
import { updateDebtController } from '../modules/debt/useCases/updateDebt';

export const DebtRouter = Router();

DebtRouter.post('/debts', (req, res) => {
  createDebtController.handle(req, res);
});

DebtRouter.get('/debts', (req, res) => {
  listDebtController.handle(req, res);
});

DebtRouter.get('/debts/:id', (req, res) => {
  listOneDebtController.handle(req, res);
});

DebtRouter.get('/user/:userId/debts', (req, res) => {
  listDebtByUserController.handle(req, res);
});

DebtRouter.get('/payments/:paymentId/debts', (req, res) => {
  listDebtByPaymentController.handle(req, res);
});

DebtRouter.patch('/debts/:id', (req, res) => {
  updateDebtController.handle(req, res);
});

DebtRouter.delete('/debts/:id', (req, res) => {
  deleteDebtController.handle(req, res);
});
