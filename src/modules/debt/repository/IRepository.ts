export interface ICreate {
  value: number;
  userId: number;
  startAt: Date;
  description?: string;
  parts?: number;
  endAt?: Date;
}

export interface IUpdate {
  id: number;
  value: number;
  userId: number;
  startAt: Date;
  description?: string;
  parts?: number;
  endAt?: Date;
}

export interface IRepository {
  create({ value, startAt, description, userId, endAt, parts }: ICreate);
  put({ id, startAt, description, userId, value, endAt, parts }: IUpdate);
  getAll();
  getById(id: number);
  // Funtion overloads
  getByUserId(userId: number);
  getByUserId(userId: number, date: Date);
  getByUserId(userId: unknown, date: unknown);

  getByPaymentId(paymentId : number)
  // -
  delete(id: number);
}
