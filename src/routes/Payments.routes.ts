import { Router } from 'express';
import { createPaymentController } from '../modules/paymetns/useCases/createPayment';
import { deletePaymentController } from '../modules/paymetns/useCases/deletePayment';
import { listOnePaymentController } from '../modules/paymetns/useCases/listOnePayment';
import { updatePaymentController } from '../modules/paymetns/useCases/updatePayment';
export const PaymentsRouter = Router();

PaymentsRouter.post('/', (req, res) => {
  createPaymentController.handle(req, res);
});

PaymentsRouter.get('/:id', (req, res) => {
  listOnePaymentController.handle(req, res);
})

PaymentsRouter.patch('/:id', (req, res) => {
  updatePaymentController.handle(req, res);
});

PaymentsRouter.delete('/:id', (req, res) => {
  deletePaymentController.handle(req, res);
});
