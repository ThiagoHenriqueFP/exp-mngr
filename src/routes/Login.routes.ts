import { Router }from 'express';
import { loginController } from '../modules/login/useCases';


export const loginRouter = Router();

loginRouter.post('/login', (req, res, next)=> {
  loginController.handle(req, res, next);
});
