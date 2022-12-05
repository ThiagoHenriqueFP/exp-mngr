import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { CreateDebtUseCase } from './CreateDebtUseCase';
import { CreateDebtController } from './CreateDebtController';

const debtRepository = new DebtRepository();
const createDebtUSeCase = new CreateDebtUseCase(debtRepository);
export const createDebtController = new CreateDebtController(createDebtUSeCase);
