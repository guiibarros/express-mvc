import { ICreateUserDTO } from '@dto/ICreateUserDTO';
import { User } from '@models/User';

export interface IUsersRepository {
  create(data: ICreateUserDTO): void;
  listAll(): User[];
  findByEmail(email: string): User;
}
