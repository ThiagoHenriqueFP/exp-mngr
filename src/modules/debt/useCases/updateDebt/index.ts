import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { UpdateDebtController } from './UpdateDebtController';
import { UpdateDebtUseCase } from './UpdateDebtUseCase';

const debtRepository = new DebtRepository();
const updateDebtUseCase = new UpdateDebtUseCase(debtRepository);
export const updateDebtController = new UpdateDebtController(updateDebtUseCase);
