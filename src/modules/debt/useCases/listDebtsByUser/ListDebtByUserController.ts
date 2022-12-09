import { Request, Response } from 'express';
import { ListDebtByUserUseCase } from './ListDebtByUserUseCase';


export class ListDebtByUserController {
  constructor(private listOndeDebtUseCase: ListDebtByUserUseCase) { }

  async handle(req: Request, res: Response) {
    const { user_id } = req.params;
    const query = req.query;

    const parsedId = parseInt(user_id, 10);

    try {
      if (query) {
        const debt = await this.listOndeDebtUseCase.execute(parsedId, query.date?.toString());

        return res.status(200).json(debt);
      }

      const debt = await this.listOndeDebtUseCase.execute(parsedId);

      return res.status(200).json(debt);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
