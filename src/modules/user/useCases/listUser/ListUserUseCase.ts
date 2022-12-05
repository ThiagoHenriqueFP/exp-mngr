import { User } from '@prisma/client';
import { UserRepository } from '../../repository/implementations/UserRepository';


export class ListUserUseCase {
  constructor(private userRepository: UserRepository) { }

  execute() {
    const user = this.userRepository.getAll();

    return user;
  }
}
