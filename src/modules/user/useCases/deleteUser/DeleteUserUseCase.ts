import { UserRepository } from '../../repository/implementations/UserRepository';


export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute(id: number) {
    return await this.userRepository.remove(id);
  }
}
