import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { IUpdate } from '../../repository/IRepository';

export class DeleteDebtUseCase {
  constructor(private debtRepository: DebtRepository) { }

  async execute(id: number) {
    const debtExists = await this.debtRepository.getById(id);

    if (!debtExists)
      throw new Error(`Debt ${id} does not exist`);

    const debt = this.debtRepository.delete(id);

    return debt;
  }
}
