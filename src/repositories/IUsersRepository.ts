import { ICreateUserDTO } from '@dto/ICreateUserDTO';
import { User } from '@entities/User';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  listAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
}
