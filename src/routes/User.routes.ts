import { createUserController } from '../modules/user/useCases/createUser';
import { listUserController } from '../modules/user/useCases/listUser';
import { listOneUserController } from '../modules/user/useCases/listOneUser';
import { updateUserController } from '../modules/user/useCases/updateUser';
import { deleteUserController } from '../modules/user/useCases/deleteUser';


import { Router } from 'express';


const UserRoutes = Router();

UserRoutes.post('/user', (req, res) => {
  createUserController.handle(req, res);
});

UserRoutes.get('/user', (req, res) => {
  listUserController.handle(req, res);
});

UserRoutes.get('/user/:id', (req, res) => {
  listOneUserController.handle(req, res);
});

UserRoutes.patch('/user/:id', (req, res) => {
  updateUserController.handle(req, res);
});

UserRoutes.delete('/user/:id', (req, res) => {
  deleteUserController.handle(req, res);
});

export { UserRoutes };
