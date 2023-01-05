import { Router } from 'express';
import { createPaymentController } from '../modules/paymetns/useCases/createPayment';
import { deletePaymentController } from '../modules/paymetns/useCases/deletePayment';
import { listOnePaymentController } from '../modules/paymetns/useCases/listOnePayment';
import { listPaymentsController } from '../modules/paymetns/useCases/listPayments';
import { updatePaymentController } from '../modules/paymetns/useCases/updatePayment';
export const PaymentsRouter = Router();

PaymentsRouter.post('/payment', (req, res) => {
  createPaymentController.handle(req, res);
});

PaymentsRouter.get('/payments/:user_id', (req, res) => {
  listPaymentsController.handle(req, res);
});

PaymentsRouter.get('/payment/:id', (req, res) => {
  listOnePaymentController.handle(req, res);
})

PaymentsRouter.patch('/payment/:id', (req, res) => {
  updatePaymentController.handle(req, res);
});

PaymentsRouter.delete('/payment/:id', (req, res) => {
  deletePaymentController.handle(req, res);
});
