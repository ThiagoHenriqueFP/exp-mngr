import { UserRoutes } from './User.routes';
import { Router } from 'express';

const router = Router();

router.use('/', UserRoutes);

export { router }
