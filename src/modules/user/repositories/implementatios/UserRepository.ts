import { User } from '../../models/User';
import { ICreateUserDTO, IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  private users: User[];

  private static INSTANCE: UserRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }

    return UserRepository.INSTANCE;
  }

  create({
    name, email, newPassword, wage,
  }: ICreateUserDTO):void {
    const user = new User();
    Object.assign(user, {
      name,
      email,
      newPassword,
      wage,
    });

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findByName(name:string):User {
    // eslint-disable-next-line no-shadow
    const user = this.users.find((user) => user.name === name);
    return user;
  }
}

export { UserRepository };
