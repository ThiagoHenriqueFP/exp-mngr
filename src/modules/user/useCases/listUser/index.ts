import { UserRepository } from '../../repositories/implementatios/UserRepository';
import { ListUsersUseCase } from './ListUsersUseCase';
import { ListUsersController } from './ListUsersController';

const userRepository = UserRepository.getInstance();
const listUsersUseCase = new ListUsersUseCase(userRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };
