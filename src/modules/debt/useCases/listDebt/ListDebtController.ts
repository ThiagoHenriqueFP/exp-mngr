import { Request, Response } from 'express';
import { ListDebtUseCase } from './ListDebtUseCase';


export class ListDebtController {
  constructor(private lisDebtUseCase: ListDebtUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const debts = await this.lisDebtUseCase.execute();

      res.status(200).json(debts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}
