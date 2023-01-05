import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { UpdatePaymentUseCase } from './UpdatePaymentUseCase';
import { UpdatePaymentController } from './UpdatePaymentController';

const paymentRepository = new PaymentRepository();
const updatePaymentUseCase = new UpdatePaymentUseCase(paymentRepository);
export const updatePaymentController = new UpdatePaymentController(updatePaymentUseCase);
