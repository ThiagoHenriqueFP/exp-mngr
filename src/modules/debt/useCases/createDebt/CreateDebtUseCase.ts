import { IDebtRepository } from '../../repositories/IDebtRepository';

interface IRequest {
  userId: string;
  value:number;
  endDate:Date;
}

class CreateDebtUseCase {
  constructor(private debtRepository: IDebtRepository) {}

  execute({ userId, value, endDate }:IRequest):void {
    this.debtRepository.create({
      userId, value, endDate,
    });
  }
}

export { CreateDebtUseCase };
