import { Router }from 'express';
import { loginController } from '../modules/login/useCases/login';
import { signinController } from '../modules/login/useCases/signin';


export const loginRouter = Router();

loginRouter.post('/login', (req, res, next)=> {
  loginController.handle(req, res, next);
});

loginRouter.post('/register', (req, res, next) => {
  signinController.handle(req, res, next);
})
