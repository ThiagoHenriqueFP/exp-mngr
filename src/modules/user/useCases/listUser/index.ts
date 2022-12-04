import { UserRepository } from '../../repository/implementations/UserRepository';
import { ListUserUseCase } from './ListUserUseCase';
import { ListUserController } from './ListUserController';

const userRepository = new UserRepository();
const listUserUseCase = new ListUserUseCase(userRepository);
export const listUserController = new ListUserController(listUserUseCase);
