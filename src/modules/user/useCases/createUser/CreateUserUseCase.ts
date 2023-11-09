import { UserRepository } from '../../repository/implementations/UserRepository';
import { IRepository, ICreate } from '../../repository/IRepository';

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ name, email, wage, password }: ICreate) {
    name = name.toLowerCase();
    email = email.toLowerCase();

    const userAlreadyExists = await this.userRepository.getByEmail(email);

    if (userAlreadyExists) throw new Error(`User with this email (${email}) already exists`);

    return this.userRepository.create({ name, email, wage, password });
  }
}

export { CreateUserUseCase }
