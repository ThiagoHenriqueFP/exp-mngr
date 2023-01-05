import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';

export class DeletePaymentUseCase {
  constructor(private paymentRepository: PaymentRepository) { };

  async execute(id: number) {
    const payment = await this.paymentRepository.delete(id);

    return payment;
  }
}
