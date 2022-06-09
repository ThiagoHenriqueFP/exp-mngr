import { Router } from 'express';
import { UserRoutes } from './User.routes';

const router = Router();

router.use('/', UserRoutes);

export { router };
