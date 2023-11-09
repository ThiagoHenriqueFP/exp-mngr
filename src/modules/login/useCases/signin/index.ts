import { UserRepository } from '../../../user/repository/implementations/UserRepository';
import { SigninController } from './SigninController';
import { SigninUseCase } from './SigninUseCase';

const signinUseCase = new SigninUseCase(new UserRepository);
export const signinController = new SigninController(signinUseCase);
