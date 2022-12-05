import { Request, Response } from 'express';
import { ICreate } from '../../repository/IRepository';
import { CreateDebtUseCase } from './CreateDebtUseCase';


export class CreateDebtController {
  constructor(private createDebtUSeCase: CreateDebtUseCase) { }

  private dateCalc(date: Date, parts: number): Date {
    const d = new Date(date);

    if (d.getMonth() + parts >= 12) {
      const year = (d.getMonth() + parts) / 12;

      return new Date(`${d.getMonth() + parts - 11}-30-${d.getFullYear() + Math.trunc(year)}`);
    }

    return new Date(`${d.getMonth() + parts}-30-${d.getFullYear()}`);
  }

  async handle(req: Request, res: Response) {
    try {

      const { startAt, userId, value, parts }: ICreate = req.body;

      if (parts && parts < 0) return res.status(400).json({ error: "Parts must be greater than 0" });

      const parsedStartAt = new Date(startAt);
      const endAt = this.dateCalc(startAt, parts || 0);

      const debt = await this.createDebtUSeCase.execute({ startAt: parsedStartAt, userId, value, endAt, parts });

      return res.status(200).json(debt);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }

  }
}
