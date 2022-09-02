import { IUserRepository } from '../../repositories/IUserRepository';

class ListUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute():any {
    return this.userRepository.list();
  }
}

export { ListUsersUseCase };
