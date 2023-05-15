import { Request, Response } from 'express';
import { endAtGenerator } from '../../../../utils/endAtGenerator';
import { listOneUserController } from '../../../user/useCases/listOneUser';
import { ICreate } from '../../repository/IRepository';
import { CreateDebtUseCase } from './CreateDebtUseCase';
export class CreateDebtController {
  constructor(private createDebtUSeCase: CreateDebtUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const { startAt, userId, value, description, parts = 1 }: ICreate = req.body;

      const userExists = await listOneUserController.handle(req, res);

      if (!userExists) {
        throw new Error(`User not found`);
      }

      // if (userExists?.statusCode === 404) {
      //   return;
      // }


      if (parts && parts < 0) return res.status(400).json({ error: "Parts must be greater than or equal 0" });

      const parsedStartAt = new Date(startAt);
      const endAt = endAtGenerator(startAt, parts);

      const debt = await this.createDebtUSeCase.execute({ startAt: parsedStartAt, userId, value, endAt, parts, description });

      return res.status(200).json(debt);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }

  }
}
