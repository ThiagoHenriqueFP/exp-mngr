import { Request, Response } from 'express';
import { UpdatePaymentUseCase } from './UpdatePaymentUseCase';


export class UpdatePaymentController {
  constructor(private updatePaymentUseCase: UpdatePaymentUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        date,
        debtValue,
        userId,
        userReceived,
        paid
      } = req.body;
      const paymentId = parseInt(id, 10);

      const payment = await this.updatePaymentUseCase.execute({ date, debtValue, id: paymentId, userId, userReceived, paid });

      return res.status(200).json(payment);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  }
}
