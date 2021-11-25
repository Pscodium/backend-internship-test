import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';

import express from 'express';

import createConnection from './infra/typeorm';
import router from './routes';

createConnection();
const app = express();

app.use(express.json());

app.use(router);
app.get('/', (_, res) => res.json({ ok: true }));

export default app;
