import { Debt } from '../models/Debt';

interface ICreateDebtDTO{
  id?: string;
  userId:string;
  value: number;
  endDate: Date;
  startDate?: Date;
}

interface IDebtRepository {
  create({
    value,
    startDate,
    endDate,
  }:ICreateDebtDTO) : void,
  list():Debt[],
  sumDebts({ userId }): number
}

export { ICreateDebtDTO, IDebtRepository };
