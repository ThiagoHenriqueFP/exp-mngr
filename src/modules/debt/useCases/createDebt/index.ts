import { DebtRepository } from '../../repositories/implementations/DebtRepository';
import { CreateDebtUseCase } from './CreateDebtUseCase';
import { CreateDebtController } from './CreateDebtController';

const debtRepository = DebtRepository.getInstance();
const createDebtUseCase = new CreateDebtUseCase(debtRepository);
const createDebtController = new CreateDebtController(createDebtUseCase);

export { createDebtController };
