import { IUsersRepository } from '@infra/typeorm/repositories/IUsersRepository';
import { ICreateUserDTO } from '@shared/dto/ICreateUserDTO';

export class CreateUserUseCase {
  public constructor(private usersRepository: IUsersRepository) {}

  public async execute(data: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create(data);
  }
}
