import { Request, Response } from 'express';
import { DeleteDebtUseCase } from './DeleteDebtUseCase';

export class DeleteDebtController {
  constructor(private deleteDebtUseCase: DeleteDebtUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const parsedId = parseInt(id, 10);

      const debt = await this.deleteDebtUseCase.execute(parsedId);

      return res.json(200).json(debt);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
