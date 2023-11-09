import { createUserController } from '../modules/user/useCases/createUser';
import { listUserController } from '../modules/user/useCases/listUser';
import { listOneUserController } from '../modules/user/useCases/listOneUser';
import { updateUserController } from '../modules/user/useCases/updateUser';
import { deleteUserController } from '../modules/user/useCases/deleteUser';
import { updatePasswordController } from '../modules/user/useCases/updatePassword';

import { Router } from 'express';


const UserRoutes = Router();

UserRoutes.post('/', (req, res) => {
  createUserController.handle(req, res);
});

UserRoutes.get('/', (req, res) => {
  listUserController.handle(req, res);
});

UserRoutes.get('/:id', (req, res) => {
  listOneUserController.handle(req, res);
});

UserRoutes.patch('/:id', (req, res) => {
  updateUserController.handle(req, res);
});

UserRoutes.delete('/:id', (req, res) => {
  deleteUserController.handle(req, res);
});

UserRoutes.patch('/change-password', (req, res) => {
  updatePasswordController.handle(req, res);
})

export { UserRoutes };
