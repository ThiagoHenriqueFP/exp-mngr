export interface ICreatePayment {
  userId: number,
  userReceived: number,
  date: Date,
}

export interface IUpdatePayment {
  id: number
  userId: number,
  debtValue: number,
  userReceived: number,
  date: Date,
}

export interface IRepository {
  create({ userId, date, userReceived}: ICreatePayment);
  update({ id, userId, debtValue, userReceived }: IUpdatePayment);

  getById(id: number);
  getByUserId(userId: number);
  getByUserId(userId: number, date: Date);
  getByUserId(arg0: unknown, arg1: unknown);
  getByDate(date: Date)

  delete(id: number);
}
