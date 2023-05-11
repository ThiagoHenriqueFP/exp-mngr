import { LoginRepository } from '../repository/implementation/LoginRepository';
import { ILogin } from '../repository/IRepository';

export class LoginUseCase {
  constructor(private loginRepository: LoginRepository) {}

  async execute(login: ILogin) {
    return this.loginRepository.login(login);
  }
}
