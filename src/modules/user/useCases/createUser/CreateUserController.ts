import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(req: Request, res: Response) {
    const { name, email, wage } = req.body;

    try {
      const user = await this.createUserUseCase.execute({ name, email, wage }); // pass $transation on parameters
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }

  }
}

