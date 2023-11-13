import { Router }from 'express';
import { signinController } from '../modules/login/useCases/signin';
import { AuthController } from '../config/auth/AuthController';


export const loginRouter = Router();

loginRouter.post('/login', (req, res, next)=> {
  AuthController.login(req, res, next);
});

loginRouter.post('/register', (req, res, next) => {
  signinController.handle(req, res, next);
})
