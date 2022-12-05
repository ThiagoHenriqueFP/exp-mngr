import { DebtRepository } from '../../repository/implementation/DebtRepository';

export class ListOneDebtUseCase {
  constructor(private debtRepository: DebtRepository) { }

  async execute(id: number) {
    const debt = await this.debtRepository.getById(id);

    return debt;
  }
}
