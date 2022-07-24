import { inject, injectable } from 'tsyringe';

import { User } from '@infra/typeorm/entities/User';
import { IUsersRepository } from '@infra/typeorm/repositories/IUsersRepository';

@injectable()
export class ListUsersUseCase {
  public constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.listAll();

    return users;
  }
}
