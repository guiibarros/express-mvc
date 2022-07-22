import { ICreateUserDTO } from '@dto/ICreateUserDTO';
import { User } from '@models/User';
import { IUsersRepository } from '@repositories/IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private readonly repository: User[];

  public constructor() {
    this.repository = [];
  }

  public create(data: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      ...data,
      created_at: new Date(),
    });

    this.repository.push(user);
  }

  public listAll(): User[] {
    return this.repository;
  }

  public findByEmail(email: string): User {
    const user = this.repository.find((user) => user.email === email);

    return user;
  }
}
