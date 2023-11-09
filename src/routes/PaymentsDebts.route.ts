import { Router } from 'express';
import { listDebtByPaymentController } from '../modules/debt/useCases/listDebtsByPaymentId';

const PaymentsDebtsRoute = Router();

PaymentsDebtsRoute.get('/:paymentId/debts', (req, res) => {
  listDebtByPaymentController.handle(req, res);
});

export {PaymentsDebtsRoute};

