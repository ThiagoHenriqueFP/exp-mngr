import { NextFunction, Request, Response } from 'express';
import { ILogin } from '../repository/IRepository';
import { LoginUseCase } from './LoginUseCase';
import { AuthController } from '../../../config/auth/AuthController';

export class LoginController{
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(req: Request, res: Response, next: NextFunction){
    try {
      const payload = await AuthController.login(req, res, next);
      return res.status(200).json(payload);
    } catch (e) {
      return res.status(400).json({error: e.message});
    }
  }
}
