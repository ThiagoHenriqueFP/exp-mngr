import { Request, Response } from 'express';
import { ListDebtByUserUseCase } from './ListDebtByUserUseCase';


export class ListDebtByUserController {
  constructor(private listDebtByUserUseCase: ListDebtByUserUseCase) { }

  async handle(req: Request, res: Response) {
    const { user_id } = req.params;
    const query = req.query;

    const { date, userId } = req.body;

    const parsedId = parseInt(user_id, 10);

    try {
      if (query.date) {
        const debt = await this.listDebtByUserUseCase.execute(parsedId, query.date?.toString());

        return res.status(200).json(debt);
      } else if (date) {
        const debt = await this.listDebtByUserUseCase.execute(userId, date.toString());

        return debt;
      }

      const debt = await this.listDebtByUserUseCase.execute(parsedId);

      return res.status(200).json(debt);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
