import { DebtRepository } from '../../repository/implementation/DebtRepository';

export class ListDebtsByPaymentIdUseCase {
  constructor(private debtRepository: DebtRepository) {}

  async execute(paymentId: number) {
    return this.debtRepository.getByPaymentId(paymentId);
  }
}
