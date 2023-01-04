import { Router } from 'express';
import { createPaymentController } from '../modules/paymetns/useCases/createPayment';
import { listPaymentsController } from '../modules/paymetns/useCases/listPayments';
export const PaymentsRouter = Router();

PaymentsRouter.post('/payment', (req, res) => {
  createPaymentController.handle(req, res);
});

PaymentsRouter.get('/payment/:user_id', (req, res) => {
  listPaymentsController.handle(req, res);
})
