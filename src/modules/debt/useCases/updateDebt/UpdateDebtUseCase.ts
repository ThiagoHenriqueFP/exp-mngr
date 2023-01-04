import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { IUpdate } from '../../repository/IRepository';

export class UpdateDebtUseCase {
  constructor(private debtRepository: DebtRepository) { }

  async execute({ id, startAt, userId, value, endAt, parts, description }: IUpdate) {
    const debtExists = await this.debtRepository.getById(id);

    if (!debtExists)
      throw new Error(`Debt ${id} does not exist`);

    const debt = await this.debtRepository.put({ id, startAt, userId, value, endAt, parts, description });

    return debt;
  }
}
