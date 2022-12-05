import { User } from '@prisma/client';
import { UserRepository } from '../../repository/implementations/UserRepository';
import { IUpdate } from '../../repository/IRepository';

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  execute({ id, name, email, wage }: IUpdate): Promise<User> {
    return this.userRepository.put({ id, name, email, wage });
  }
}
