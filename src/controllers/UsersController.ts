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
  public list(request: Request, response: Response): Response {
    const users = this.usersRepository.listAll();

    return response.json(users);
  }

  @autoBind
  public create(request: Request, response: Response) {
    const { name, lastName, email, password, nickname, bio } = request.body;

    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    this.usersRepository.create({
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
