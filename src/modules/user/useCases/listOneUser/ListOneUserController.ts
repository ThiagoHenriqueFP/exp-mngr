import { Request, Response } from 'express';
import { ListOneUserUseCase } from './ListOneUserUseCase';


export class ListOneUserController {

  constructor(private listOneUserUseCase: ListOneUserUseCase) { }

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const user_id = parseInt(id, 10);
    try {
      const user = await this.listOneUserUseCase.execute(user_id);

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }

  }
}
