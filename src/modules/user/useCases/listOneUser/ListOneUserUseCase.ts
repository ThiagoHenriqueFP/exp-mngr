import { UserRepository } from '../../repository/implementations/UserRepository';


export class ListOneUserUseCase {
  constructor(private userRepository: UserRepository) { }

  execute(id: number) {
    const user = this.userRepository.getById(id);

    return user;
  }
}
