import { DebtRepository } from '../../repository/implementation/DebtRepository';


export class ListDebtUseCase {
  constructor(private debtRepository: DebtRepository) { }

  execute() {
    const debts = this.debtRepository.getAll();

    return debts;
  }
}
