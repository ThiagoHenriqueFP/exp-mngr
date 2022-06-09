import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(req: Request, res: Response):Response {
    const {
      name, email, password, wage,
    } = req.body;

    this.createUserUseCase.execute({
      name, email, password, wage,
    });

    return res.send(201).send();
  }
}

export { CreateUserController };
