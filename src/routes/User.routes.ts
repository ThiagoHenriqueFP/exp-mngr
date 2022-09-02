import { Router } from 'express';
import { createUserController } from '../modules/user/useCases/createUser';
import { listUsersController } from '../modules/user/useCases/listUser';
// import { UserRepository } from '../modules/user/repositories/implementatios/UserRepository';

// const userRepository = UserRepository.getInstance();

const UserRoutes = Router();

UserRoutes.post('/user', (req, res) => {
  createUserController.handle(req, res);
});

UserRoutes.get('/users', (req, res) => {
  listUsersController.handle(req, res);
});

export { UserRoutes };
