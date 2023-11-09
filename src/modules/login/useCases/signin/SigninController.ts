import { NextFunction, Request, Response } from 'express';
import { SigninUseCase } from './SigninUseCase';

export class SigninController {
  constructor (private signinUseCase: SigninUseCase) { }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const {name, email, wage, password} = req.body;
      const response = await this.signinUseCase.execute({name, email, wage, password});
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
      res.status(200).json(error.message);
    }
  }
}
