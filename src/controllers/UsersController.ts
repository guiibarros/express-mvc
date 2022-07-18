import { Request, Response } from 'express';

import { IUsersRepository } from '@repositories/IUsersRepository';

export class UsersController {
  public constructor(private usersRepository: IUsersRepository) {}

  public index(request: Request, response: Response): Response {
    const users = this.usersRepository.listAll();

    return response.json(users);
  }

  public post(request: Request, response: Response) {
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
