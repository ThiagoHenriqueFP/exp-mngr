import { UserRepository } from '../../repository/implementations/UserRepository';
import { UpdateUserUseCase } from './UpdateUserUseCase';
import { UpdateUserController } from './UpdateUserController';

const userRepository = new UserRepository();
const updateUserUseCase = new UpdateUserUseCase(userRepository);
export const updateUserController = new UpdateUserController(updateUserUseCase);
