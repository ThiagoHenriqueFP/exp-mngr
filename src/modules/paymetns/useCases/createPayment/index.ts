import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { CreatePaymentsController } from './CreatePaymentsController';
import { CreatePaymentsUseCase } from './CreatePaymentsUseCase';

const paymentRepository = new PaymentRepository();
const paymentUseCase = new CreatePaymentsUseCase(paymentRepository);
export const createPaymentController = new CreatePaymentsController(paymentUseCase);
