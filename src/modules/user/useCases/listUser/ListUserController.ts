import { ListUserUseCase } from './ListUserUseCase';
import { Response, Request } from 'express';

export class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) { }

  async handle(req: Request, res: Response) {
    const users = await this.listUserUseCase.execute();

    return res.status(200).json(users);
  }
}
