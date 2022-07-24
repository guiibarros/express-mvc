import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@infra/typeorm/repositories/IUsersRepository';
import { ICreateUserDTO } from '@shared/dto/ICreateUserDTO';

@injectable()
export class CreateUserUseCase {
  public constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(data: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    await this.usersRepository.create(data);
  }
}
