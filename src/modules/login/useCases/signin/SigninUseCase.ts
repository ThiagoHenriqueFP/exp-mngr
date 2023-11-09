import { ICreate } from '../../../user/repository/IRepository';
import { UserRepository } from '../../../user/repository/implementations/UserRepository';

export class SigninUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(payload: ICreate) {
      payload.email = payload.email.toLowerCase()
      const response = await this.userRepository.create(payload);
      delete response.password;
      return response;
  }
}
