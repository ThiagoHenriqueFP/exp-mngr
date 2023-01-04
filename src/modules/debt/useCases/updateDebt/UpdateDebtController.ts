import { Request, Response } from 'express';
import { endAtGenerator } from '../../../../utils/endAtGenerator';
import { IUpdate } from '../../repository/IRepository';
import { UpdateDebtUseCase } from './UpdateDebtUseCase';

export class UpdateDebtController {
  constructor(private updateDebtUseCase: UpdateDebtUseCase) { }

  async handle(req: Request, res: Response) {
    const { startAt, userId, value, parts, description, }: IUpdate = req.body;
    const { id } = req.params;

    try {
      const parsedId = parseInt(id, 10);
      const date = new Date(startAt);

      if (parts && parts < 0)
        return res.status(400).json({ error: "parts must be greater than or equal to zero" });

      const endAt = endAtGenerator(date, parts);

      const debt = await this.updateDebtUseCase.execute({ id: parsedId, startAt: date, userId, value, endAt, parts, description });

      console.log(debt);
      return res.status(200).json(debt);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
