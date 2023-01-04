import { User } from '@prisma/client';
import { UserRepository } from '../../repository/implementations/UserRepository';


export class ListUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute() {
    const user = await this.userRepository.getAll();

    return user;
  }
}
