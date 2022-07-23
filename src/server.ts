import 'reflect-metadata';
import '@shared/container';
import express from 'express';

import { dataSource } from './database';
import { routes } from './routes';

dataSource
  .setOptions({ host: 'database' })
  .initialize()
  .then(async () => {
    const app = express();

    app.use(express.json());
    app.use(routes);
    app.listen(3333, () => console.log('Listening at http://localhost:3333/'));
  })
  .catch((error) => console.log(error));
