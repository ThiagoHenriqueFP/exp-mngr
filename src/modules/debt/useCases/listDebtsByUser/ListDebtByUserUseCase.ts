import { DebtRepository } from '../../repository/implementation/DebtRepository';

export class ListDebtByUserUseCase {
  constructor(private debtRepository: DebtRepository) { }

  async execute(id: number, date?: string) {
    if (date) {
      const parsedDate = new Date(date);
      const debt = await this.debtRepository.getByUserId(id, parsedDate);

      return debt;
    }

    const debt = await this.debtRepository.getByUserId(id);

    return debt;
  }
}
