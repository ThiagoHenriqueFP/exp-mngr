import { UserRepository } from '../../repository/implementations/UserRepository'
import { UpdatePasswordController } from './UpdatePasswordController';
import { UpdatePasswordUseCase } from './UpdatePasswordUseCase';

const repository = new UserRepository();
const updatePasswordUseCase = new UpdatePasswordUseCase(repository);
export const updatePasswordController = new UpdatePasswordController(updatePasswordUseCase);
