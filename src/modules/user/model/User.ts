import { Debt } from '../../debt/model/Debt';

class User {
  id: number;
  name: string;
  email: string;
  wage: number;
  createdAt: Date;
  updatedAt: Date;
  debts: Debt[];
}

export { User };
