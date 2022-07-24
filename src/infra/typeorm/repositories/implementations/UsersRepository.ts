import { Repository } from 'typeorm';

import { User } from '@infra/typeorm/entities/User';
import { IUsersRepository } from '@infra/typeorm/repositories/IUsersRepository';
import { ICreateUserDTO } from '@shared/dto/ICreateUserDTO';
import { dataSource } from '@shared/infra/typeorm';

export class UsersRepository implements IUsersRepository {
  private readonly repository: Repository<User>;

  public constructor() {
    this.repository = dataSource.getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<void> {
    const user = this.repository.create(data);

    await this.repository.save(user);
  }

  public async listAll(): Promise<User[]> {
    return this.repository.find();
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email } });

    return user;
  }
}
