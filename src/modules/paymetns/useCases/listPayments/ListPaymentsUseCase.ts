import { PaymentRepository } from '../../repository/implementations/PaymentsRepository'


export class ListPaymentsUseCase {
  constructor(private paymentRepository: PaymentRepository) { };

  async execute(userId: number, date?: string) {
    if (date) {
      const parsedDate = new Date(date);
      const payments = await this.paymentRepository.getByUserId(userId, parsedDate);
      return payments;
    }

    const payments = await this.paymentRepository.getByUserId(userId);
    return payments;
  }
}
