import { PaymentRepository } from '../../repository/implementations/PaymentsRepository'


export class ListPaymentsUseCase {
  constructor(private paymentRepository: PaymentRepository) { };

  async execute(userId: number) {
    const payments = await this.paymentRepository.getByUserId(userId);

    return payments;
  }
}
