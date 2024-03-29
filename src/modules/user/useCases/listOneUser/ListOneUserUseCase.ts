import { UserRepository } from '../../repository/implementations/UserRepository';


export class ListOneUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute(id: number) {
    const user = await this.userRepository.getById(id);

    if (!user) {
      throw new Error(`User not found`);
    }

    return user;
  }
}
