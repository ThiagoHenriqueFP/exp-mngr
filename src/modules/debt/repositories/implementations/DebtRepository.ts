import { Debt } from '../../models/Debt';
import { IDebtRepository, ICreateDebtDTO } from '../IDebtRepository';

class DebtRepository implements IDebtRepository {
  private Debts: Debt[];

  private static INSTANCE:DebtRepository;

  private constructor() {
    this.Debts = [];
  }

  public static getInstance():DebtRepository {
    if (!DebtRepository.INSTANCE) {
      DebtRepository.INSTANCE = new DebtRepository();
    }

    return DebtRepository.INSTANCE;
  }

  create({
    value, startDate, endDate, userId,
  }:ICreateDebtDTO):void {
    const debt = new Debt();
    Object.assign(debt, {
      value,
      startDate,
      endDate,
      userId,
    });

    this.Debts.push(debt);
  }

  list():Debt[] {
    return this.Debts;
  }

  sumDebts({ userId }):number {
    const debt = this.Debts.filter((userDebt) => userDebt.user_id === userId);
    let value = 0;
    // eslint-disable-next-line no-return-assign
    debt.forEach((userDebt) => value += userDebt.value);
    return value;
  }
}

export { DebtRepository };
