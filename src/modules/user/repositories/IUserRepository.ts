import { User } from '../models/User';

interface ICreateUserDTO{
  name: string;
  email: string;
  newPassword: string;
  wage: number;
}

interface IUserRepository{
  create({
    name,
    email,
    newPassword,
    wage,
  }: ICreateUserDTO):User;
  list():User[];
  findByName(name:string):User;
}

export { ICreateUserDTO, IUserRepository };
