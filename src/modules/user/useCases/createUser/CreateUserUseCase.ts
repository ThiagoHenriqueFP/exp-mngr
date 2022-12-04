import { IRepository, ICreate } from '../../repository/IRepository';

class CreateUserUseCase {
  constructor(private userRepository: IRepository) { }

  execute({ name, email, wage }: ICreate) {
    const userAlreadyExists = this.userRepository.getByEmail(email);

    if (userAlreadyExists) throw new Error(`User with this email (${email}) already exists`);

    return this.userRepository.create({ name, email, wage });
  }
}

export { CreateUserUseCase }
