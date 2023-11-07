import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';

export class UpdatePaidPaymentsUseCase {
  constructor(private paymentRepository: PaymentRepository) {};

  async execute(date: Date){
    const payments = await this.paymentRepository.getByDate(date, true);

    if(payments.length > 0) {
      payments.forEach(it => it.paid = true);
      this.paymentRepository.update(payments);
    }

  }
}
