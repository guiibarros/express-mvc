import { Router } from 'express';

import { UsersController } from '@controllers/UsersController';
import { UsersRepository } from '@repositories/implementations/UsersRepository';

const usersRoutes = Router();

const usersRepository = UsersRepository.getInstance(); // Singleton
const usersController = new UsersController(usersRepository);

usersRoutes.get('/', (request, response) => {
  return usersController.index(request, response);
});

usersRoutes.post('/', (request, response) => {
  return usersController.post(request, response);
});

export { usersRoutes };
