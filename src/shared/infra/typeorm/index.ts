import { DataSource } from 'typeorm';

import { User } from '@infra/typeorm/entities/User';

import { CreateUsers1658541025995 } from './migrations/1658541025995-CreateUsers';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'docker',
  entities: [User],
  migrations: [CreateUsers1658541025995],
});
