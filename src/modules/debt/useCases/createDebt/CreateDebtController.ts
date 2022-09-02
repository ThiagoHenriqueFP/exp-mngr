import { Request, Response } from 'express';
import { CreateDebtUseCase } from './CreateDebtUseCase';

class CreateDebtController {
  constructor(private createDebtController: CreateDebtUseCase) {}

  handle(req: Request, res: Response):Response {
    const { userId, value, endDate } = req.body;

    this.createDebtController.execute({ userId, value, endDate });

    return res.status(201);
  }
}

export { CreateDebtController };
