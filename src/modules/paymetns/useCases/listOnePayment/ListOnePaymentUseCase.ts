import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';

export class ListOnePaymentUseCase {
  constructor(private paymentRepository: PaymentRepository) { }

  async execute(id: number) {
    const payment = await this.paymentRepository.getById(id);

    return payment;
  }
}
