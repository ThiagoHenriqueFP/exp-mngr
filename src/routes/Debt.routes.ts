import { Router } from 'express';
import { createDebtController } from '../modules/debt/useCases/createDebt';
import { deleteDebtController } from '../modules/debt/useCases/deleteDebt';
import { listDebtController } from '../modules/debt/useCases/listDebt';
import { listDebtByUserController } from '../modules/debt/useCases/listDebtsByUser';
import { listOneDebtController } from '../modules/debt/useCases/listOneDebt';
import { updateDebtController } from '../modules/debt/useCases/updateDebt';

export const DebtRouter = Router();

DebtRouter.post('/debt', (req, res) => {
  createDebtController.handle(req, res);
});

DebtRouter.get('/debt', (req, res) => {
  listDebtController.handle(req, res);
});

DebtRouter.get('/debt/:id', (req, res) => {
  listOneDebtController.handle(req, res);
});

DebtRouter.get('/debt-by-user/:user_id', (req, res) => {
  listDebtByUserController.handle(req, res);
});

DebtRouter.patch('/debt/:id', (req, res) => {
  updateDebtController.handle(req, res);
});

DebtRouter.delete('/debt/:id', (req, res) => {
  deleteDebtController.handle(req, res);
});
