import { container } from 'tsyringe';

import { UsersRepository } from '@infra/typeorm/repositories/implementations/UsersRepository';
import { IUsersRepository } from '@infra/typeorm/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
