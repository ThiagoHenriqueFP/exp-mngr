import { Request, Response } from 'express';
import { UserRepository } from '../../repository/implementations/UserRepository';
import { DeleteUserUseCase } from './DeleteUserUseCase';


export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) { }

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const user_id = parseInt(id, 10);
    try {
      const repo = new UserRepository();

      const user = await repo.getById(user_id);

      if (!user) return res.status(404).json({ message: `User not found` });

      this.deleteUserUseCase.execute(user_id);

      return res.status(200).json({ message: `User with id ${user_id} was successfuly deleted` });
    } catch (error) {
      return res.status(400).json({ message: `User not deleted` });
    }
  }
}
