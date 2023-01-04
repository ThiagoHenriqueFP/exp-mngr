import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { ICreate } from '../../repository/IRepository';


export class CreateDebtUseCase {
  constructor(private debtRepository: DebtRepository) { }

  async execute({ startAt, userId, value, endAt, parts, description }: ICreate) {
    const debt = await this.debtRepository.create({ startAt, userId, value, endAt, parts, description });

    return debt;
  }
}
