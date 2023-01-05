import { Router } from 'express';
import { createPaymentController } from '../modules/paymetns/useCases/createPayment';
import { deletePaymentController } from '../modules/paymetns/useCases/deletePayment';
import { listPaymentsController } from '../modules/paymetns/useCases/listPayments';
import { updatePaymentController } from '../modules/paymetns/useCases/updatePayment';
export const PaymentsRouter = Router();

PaymentsRouter.post('/payment', (req, res) => {
  createPaymentController.handle(req, res);
});

PaymentsRouter.get('/payment/:user_id', (req, res) => {
  listPaymentsController.handle(req, res);
});

PaymentsRouter.patch('/payment/:user_id', (req, res) => {
  updatePaymentController.handle(req, res);
});

PaymentsRouter.delete('/payment/:id', (req, res) => {
  deletePaymentController.handle(req, res);
});
