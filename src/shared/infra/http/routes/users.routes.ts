import { Router } from 'express';
import { container } from 'tsyringe';

import { UsersController } from '@controllers/infra/http/UsersController';

const usersRoutes = Router();

const usersController = container.resolve(UsersController);

usersRoutes.get('/', usersController.list);
usersRoutes.post('/', usersController.create);

export { usersRoutes };
