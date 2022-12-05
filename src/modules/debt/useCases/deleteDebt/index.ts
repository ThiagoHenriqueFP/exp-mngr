import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { DeleteDebtController } from './DeleteDebtController';
import { DeleteDebtUseCase } from './DeleteDebtUseCase';

const debtRepository = new DebtRepository();
const deleteDebtUseCase = new DeleteDebtUseCase(debtRepository);
export const deleteDebtController = new DeleteDebtController(deleteDebtUseCase);
