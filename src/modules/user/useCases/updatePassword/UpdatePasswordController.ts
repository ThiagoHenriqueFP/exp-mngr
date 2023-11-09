import { Request, Response } from 'express';
import { UpdatePasswordUseCase } from './UpdatePasswordUseCase';

export class UpdatePasswordController {
  constructor (private updateControllerUseCase: UpdatePasswordUseCase) {};

  async handle(req: Request, res: Response) {
    try {
      const { email, password, confirmPassword } = req.body;

      if(password !== confirmPassword)
      throw new Error('password did not match');

      const response = await this.updateControllerUseCase.execute(email, password);
      return res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json(error);
    }
  }
}
