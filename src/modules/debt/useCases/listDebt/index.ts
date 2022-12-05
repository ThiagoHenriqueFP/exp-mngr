import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { ListDebtUseCase } from './ListDebtUseCase';
import { ListDebtController } from './ListDebtController';

const debtRepository = new DebtRepository();
const lisDebtUseCase = new ListDebtUseCase(debtRepository)
export const listDebtController = new ListDebtController(lisDebtUseCase);
