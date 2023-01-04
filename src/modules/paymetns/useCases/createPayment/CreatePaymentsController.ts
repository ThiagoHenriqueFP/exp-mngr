import { Request, Response } from 'express';
import { listDebtByUserController } from '../../../debt/useCases/listDebtsByUser';
import { CreatePaymentsUseCase } from './CreatePaymentsUseCase';

const listDebtByUserId = listDebtByUserController;

export class CreatePaymentsController {
  constructor(private createPaymentsUseCase: CreatePaymentsUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const { userId, userReceived, date } = req.body;
      // date format -> mm-dd-yyyy
      const parsedDate = new Date(date);
      const debts = await listDebtByUserId.handle(req, res);

      const monthlyDebt = debts?.metrics?.debt;

      const payments = await this.createPaymentsUseCase.execute({ userId, date: parsedDate, debtValue: monthlyDebt ?? 0, userReceived });
      return res.status(201).json(payments);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
