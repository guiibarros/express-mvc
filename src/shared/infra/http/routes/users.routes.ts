import { Router } from 'express';

import { UsersController } from '@infra/http/controllers/UsersController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.get('/', usersController.list);
usersRoutes.post('/', usersController.create);

export { usersRoutes };
