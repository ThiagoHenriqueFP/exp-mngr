import { User } from '@prisma/client';
import { UserRepository } from '../../repository/implementations/UserRepository';
import { IUpdate } from '../../repository/IRepository';

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ id, name, email, wage }: IUpdate): Promise<User> {
    return await this.userRepository.put({ id, name, email, wage });
  }
}
