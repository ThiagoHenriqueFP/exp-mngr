import { UserRepository } from '../../repository/implementations/UserRepository';


export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) { }

  execute(id: number) {
    return this.userRepository.remove(id);
  }
}
