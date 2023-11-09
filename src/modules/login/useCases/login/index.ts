import { LoginRepository } from '../../repository/implementation/LoginRepository';
import { LoginController } from './LoginController';
import { LoginUseCase } from './LoginUseCase';

const loginRepository = new LoginRepository();
const loginUseCase = new LoginUseCase(loginRepository);
export const loginController = new LoginController(loginUseCase);
