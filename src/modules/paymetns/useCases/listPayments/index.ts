import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { ListPaymentsController } from './ListPaymentsController';
import { ListPaymentsUseCase } from './ListPaymentsUseCase';

const paymentsRepository = new PaymentRepository();
const listPaymentsUseCase = new ListPaymentsUseCase(paymentsRepository);
export const listPaymentsController = new ListPaymentsController(listPaymentsUseCase);
