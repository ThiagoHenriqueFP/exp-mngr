export interface ICreate {
  value: number;
  userId: number;
  startAt: Date;
  parts?: number;
  endAt?: Date;
}

export interface IUpdate {
  id: number;
  value: number;
  userId: number;
  startAt: Date;
  parts?: number;
  endAt?: Date;
}

export interface IRepository {
  create({ value, startAt, userId, endAt, parts }: ICreate);
  put({ id, startAt, userId, value, endAt, parts }: IUpdate);
  getAll();
  getById(id: number);
  delete(id: number);
}
