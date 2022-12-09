import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { ListDebtByUserController } from './ListDebtByUserController';
import { ListDebtByUserUseCase } from './ListDebtByUserUseCase';

const debtRepository = new DebtRepository();
const listDebtByUserUseCase = new ListDebtByUserUseCase(debtRepository);
export const listDebtByUserController = new ListDebtByUserController(listDebtByUserUseCase);
