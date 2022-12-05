import { Router } from 'express';
import { createDebtController } from '../modules/debt/useCases/createDebt';
import { listDebtController } from '../modules/debt/useCases/listDebt';


export const DebtRouter = Router();

DebtRouter.post('/debt', (req, res) => {
  createDebtController.handle(req, res);
});

DebtRouter.get('/debt', (req, res) => {
  listDebtController.handle(req, res);
})
