import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from '@useCases/CreateUserUseCase';
import { ListUsersUseCase } from '@useCases/ListUsersUseCase';

export class UsersController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const users = await listUsersUseCase.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, lastName, email, password, nickname, bio } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      lastName,
      email,
      password,
      nickname,
      bio,
    });

    return response.status(201).send();
  }
}
