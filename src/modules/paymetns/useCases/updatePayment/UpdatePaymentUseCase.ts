import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { IUpdatePayment } from '../../repository/IRepository';

export class UpdatePaymentUseCase {
  constructor(private paymentRepository: PaymentRepository) { };

  async execute({ date, debtValue, id, userId, userReceived }: IUpdatePayment) {
    const payment = await this.paymentRepository.update({ date, debtValue, id, userId, userReceived });

    return payment;
  }
}
