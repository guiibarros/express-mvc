import { User } from '@infra/typeorm/entities/User';
import { ICreateUserDTO } from '@shared/dto/ICreateUserDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  listAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
}
