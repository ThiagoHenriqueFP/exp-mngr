import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { ListOnePaymentController } from './ListOnePaymentController';
import { ListOnePaymentUseCase } from './ListOnePaymentUseCase';

const paymentRepository = new PaymentRepository();
const listOnePyamentUseCase = new ListOnePaymentUseCase(paymentRepository);
export const listOnePaymentController = new ListOnePaymentController(listOnePyamentUseCase);
