import { resolve } from 'path';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'docker',
  entities: [resolve(__dirname, '..', '**', 'entities', '*.ts')],
  migrations: [resolve(__dirname, '..', '**', 'migrations', '*.ts')],
});
