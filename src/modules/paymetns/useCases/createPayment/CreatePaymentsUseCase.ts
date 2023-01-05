import { PaymentRepository } from '../../repository/implementations/PaymentsRepository';
import { ICreatePayment } from '../../repository/IRepository';


export class CreatePaymentsUseCase {
  constructor(private paymentsRepository: PaymentRepository) { };

  async execute({ date, debtValue, userId, userReceived }: ICreatePayment) {
    const paymentAlreadyExists = await this.paymentsRepository.getByUserId(userId, date);

    if (paymentAlreadyExists.length != 0) {
      throw new Error('Payment already exists');
    }

    const payload = await this.paymentsRepository.create({ date, debtValue, userId, userReceived });

    await this.paymentsRepository.list(userId, payload.id);

    return payload;
  };
}
