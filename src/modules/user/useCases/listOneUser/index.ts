import { UserRepository } from '../../repository/implementations/UserRepository';
import { ListOneUserUseCase } from './ListOneUserUseCase';
import { ListOneUserController } from './ListOneUserController';

const userRepository = new UserRepository();
const listOneUserUseCase = new ListOneUserUseCase(userRepository);
export const listOneUserController = new ListOneUserController(listOneUserUseCase);
