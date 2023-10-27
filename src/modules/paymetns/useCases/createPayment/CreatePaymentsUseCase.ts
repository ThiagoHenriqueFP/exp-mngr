import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { ICreatePayment } from '../../repository/IRepository';


export class CreatePaymentsUseCase {
  constructor(private paymentsRepository: PaymentRepository) { };

  async execute({ date, userId, userReceived}: ICreatePayment) {
    const paymentAlreadyExists = await this.paymentsRepository.getByUserId(userId, date);

    if (paymentAlreadyExists) {
      throw new Error('Payment already exists');
    }

    const payload = await this.paymentsRepository.create({ date, userId, userReceived});

    //await this.paymentsRepository.list(userId, payload.id);

    return payload;
  };
}
