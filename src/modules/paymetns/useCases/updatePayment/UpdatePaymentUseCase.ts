import { Payments } from '@prisma/client';
import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { IUpdatePayment } from '../../repository/IRepository';

export class UpdatePaymentUseCase {
  constructor(private paymentRepository: PaymentRepository) { };

  async execute({ date, debtValue, id, userId, userReceived, paid }: IUpdatePayment): Promise<any>  {
    const payment = await this.paymentRepository.update({ date, debtValue, id, userId, userReceived, paid });
    return payment;
  }
}
