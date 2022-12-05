import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { ListOneDebtUseCase } from './ListOneDebtUseCase';
import { ListOneDebtController } from './ListOneDebtController';

const debtRepository = new DebtRepository();
const listOneDebtUseCase = new ListOneDebtUseCase(debtRepository);
export const listOneDebtController = new ListOneDebtController(listOneDebtUseCase);
