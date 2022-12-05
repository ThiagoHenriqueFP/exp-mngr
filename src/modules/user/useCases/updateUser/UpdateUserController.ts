import { Request, Response } from 'express';
import { UserRepository } from '../../repository/implementations/UserRepository';
import { UpdateUserUseCase } from './UpdateUserUseCase';


export class UpdateUserController {
  constructor(private updateUSerUseCase: UpdateUserUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    let { id } = req.params;
    const user_id = parseInt(id, 10);

    const { name, email, wage } = req.body;

    try {
      const userRepository = new UserRepository();

      const userAlreadyExists = await userRepository.getByEmail(email);

      if (userAlreadyExists.id !== user_id) throw new Error(`User with email (${email}) already exists`);

      const user = await this.updateUSerUseCase.execute({ id: user_id, name, email, wage });

      return res.status(200).json(user);
    }
    catch (error) {
      return res.status(500).json({ Error: error?.message });
    }

  }
}
