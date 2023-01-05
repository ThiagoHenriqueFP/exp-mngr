import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { DeletePaymentController } from './DeletePaymentController';
import { DeletePaymentUseCase } from './DeletePaymentUseCase';

const paymentRepository = new PaymentRepository();
const deletePaymentUseCase = new DeletePaymentUseCase(paymentRepository);
export const deletePaymentController = new DeletePaymentController(deletePaymentUseCase);
