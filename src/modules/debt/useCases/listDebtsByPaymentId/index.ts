import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { ListDebtsByPaymentIdController } from './ListDebtsByPaymentIdController.ts';
import { ListDebtsByPaymentIdUseCase } from './ListDebtsByPaymentIdUseCase';

const debtRepository = new DebtRepository();
const debtUseCase = new ListDebtsByPaymentIdUseCase(debtRepository);
export const listDebtByPaymentController = new ListDebtsByPaymentIdController(debtUseCase);
