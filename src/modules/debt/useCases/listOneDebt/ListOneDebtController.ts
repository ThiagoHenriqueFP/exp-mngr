import { Request, Response } from 'express';
import { ListOneDebtUseCase } from './ListOneDebtUseCase';

export class ListOneDebtController {
  constructor(private listOndeDebtUseCase: ListOneDebtUseCase) { }

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const parseId = parseInt(id, 10);

    try {
      const debt = await this.listOndeDebtUseCase.execute(parseId);

      return res.status(200).json(debt);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
