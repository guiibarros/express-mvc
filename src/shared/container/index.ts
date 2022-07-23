import { container } from 'tsyringe';

import { UsersRepository } from '@repositories/infra/typeorm/UsersRepository';
import { IUsersRepository } from '@repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
