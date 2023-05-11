import { Router }from 'express';
import { loginController } from '../modules/login/useCases';


export const loginRouter = Router();

loginRouter.post('/login', (req, res)=> {
  loginController.handle(req, res);
});
