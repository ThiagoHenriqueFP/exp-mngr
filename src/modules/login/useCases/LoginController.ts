import { Request, Response } from 'express';
import { ILogin } from '../repository/IRepository';
import { LoginUseCase } from './LoginUseCase';

export class LoginController{
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(req: Request, res: Response){
    try {
      const payload = await this.loginUseCase.execute(req.body);
      return res.status(200).json(payload);
    } catch (e) {
      return res.status(400).json({error: e.message});
    }
  }
}
