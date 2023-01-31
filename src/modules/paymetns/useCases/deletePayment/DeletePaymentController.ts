import { Request, Response } from 'express';
import { DeletePaymentUseCase } from './DeletePaymentUseCase';


export class DeletePaymentController {
  constructor(private deletePaymentUseCase: DeletePaymentUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const parsedId = parseInt(id, 10);
      const payment = await this.deletePaymentUseCase.execute(parsedId);

      return res.status(200).json(payment);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  }
}
