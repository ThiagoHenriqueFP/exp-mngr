import { UserRepository } from '../../repository/implementations/UserRepository';

export class UpdatePasswordUseCase {
  constructor(private repository: UserRepository) {};

  async execute(email:string, password: string) {
    return this.repository.changePassword(email, password);
  }
}
