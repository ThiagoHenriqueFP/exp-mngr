import bcrypt from 'bcrypt';

import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  wage:number;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({
    name,
    email,
    password,
    wage,
  }:IRequest):void {
    const userAlreadyExists = this.userRepository.findByName(name);
    if (userAlreadyExists) throw new Error(`User ${name} already exists`);

    let newPassword = password;

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) throw new Error('Error to hash password');

      newPassword = hash;

      return newPassword;
    });

    this.userRepository.create({
      name, email, newPassword, wage,
    });
  }
}

export { CreateUserUseCase };
