import { Request, Response } from 'express';
import { ListOnePaymentUseCase } from './ListOnePaymentUseCase';

export class ListOnePaymentController {
  constructor(private paymentUseCase: ListOnePaymentUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parsedId = parseInt(id, 10);

      const payment = await this.paymentUseCase.execute(parsedId);

      return res.status(200).json(payment);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
