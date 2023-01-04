import { Request, Response } from 'express';
import { ListPaymentsUseCase } from './ListPaymentsUseCase';

export class ListPaymentsController {
  constructor(private paymentUseCase: ListPaymentsUseCase) { };

  async handle(req: Request, res: Response) {
    try {
      const { user_id } = req.params;

      if (!user_id) {
        throw new Error(`Invalid user ID`);
      }

      const parsedId = parseInt(user_id, 10);

      const payments = await this.paymentUseCase.execute(parsedId);

      return res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  }
}
