import { Request, Response } from 'express';
import { ListPaymentsUseCase } from './ListPaymentsUseCase';

export class ListPaymentsController {
  constructor(private paymentUseCase: ListPaymentsUseCase) { };

  async handle(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { date } = req.query;

      if (!userId) {
        throw new Error(`Invalid user ID`);
      }

      const parsedId = parseInt(userId, 10);

      if (date) {
        const payments = await this.paymentUseCase.execute(parsedId, date.toString());
        return res.status(200).json(payments);
      }

      const payments = await this.paymentUseCase.execute(parsedId);
      return res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  }
}
