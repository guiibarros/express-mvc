import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@repositories/IUsersRepository';
import { autoBind } from '@shared/decorators/autoBind';

@injectable()
export class UsersController {
  public constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  @autoBind
  public async list(request: Request, response: Response): Promise<Response> {
    const users = await this.usersRepository.listAll();

    return response.json(users);
  }

  @autoBind
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, lastName, email, password, nickname, bio } = request.body;

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    await this.usersRepository.create({
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
