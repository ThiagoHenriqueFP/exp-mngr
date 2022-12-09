import { Response } from 'express';

export interface ICreate {
  name: string;
  email: string;
  wage: number;
}

export interface IUpdate {
  id: number;
  name: string;
  email: string;
  wage: number;
}

export interface IRepository {
  create({ name, email, wage }: ICreate);
  remove(id: number);
  put({ id, name, email, wage }: IUpdate);
  getAll();
  getById(id: number);
  getByEmail(email: string);
}
