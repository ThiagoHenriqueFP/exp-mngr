import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { UpdatePaidPaymentsUseCase } from './updatePaidPyamentsUseCase';

const paymentRepository = new PaymentRepository();
export const updatePaidPyamentsUseCase = new UpdatePaidPaymentsUseCase(paymentRepository);
