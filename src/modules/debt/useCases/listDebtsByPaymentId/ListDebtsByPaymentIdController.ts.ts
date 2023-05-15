import { Request, Response } from 'express';
import { DebtRepository } from '../../repository/implementation/DebtRepository';
import { ListDebtsByPaymentIdUseCase } from './ListDebtsByPaymentIdUseCase';

export class ListDebtsByPaymentIdController {
  constructor(private  listDebtsByPaymentId: ListDebtsByPaymentIdUseCase) {}

  async handle(req: Request, res: Response) {
    const paymentId = parseInt(req.params.paymentId);

    if (!paymentId || paymentId <= 0) throw Error("Payment id must be valid");

    try {
      const payload = await this.listDebtsByPaymentId.execute(paymentId);

      return res.status(200).json(payload);
    } catch (error) {
      return res.status(400).json({error: error.message});
    }

  }
}
