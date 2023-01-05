import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { ListOneUserUseCase } from './ListOneUserUseCase';


export class ListOneUserController {

  constructor(private listOneUserUseCase: ListOneUserUseCase) { }

  async handle(req: Request, res: Response): Promise<Response<any, Record<string, any>> | User> {
    const { id } = req.params;

    try {

      if (!id) {
        const { userId } = req.body;
        const user = await this.listOneUserUseCase.execute(userId);

        return user;
      }

      const user_id = parseInt(id, 10);
      const user = await this.listOneUserUseCase.execute(user_id);

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      if (error.message === 'User not found')
        return res.status(404).json({ error: error.message });

      return res.status(400).json({ error: error.message });
    }

  }
}
