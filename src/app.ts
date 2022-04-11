import express from 'express';
import morgan from 'morgan';
import router from './routes/main.route';
import isAuth from './auth/auth';
import { Request, Response } from 'express';
import akaFile from './api/akaFile';
import checkConnections from './util/checkConnections';

export const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.post('/newFile', async (req: Request, res: Response) => {
  res.send((await akaFile.newFile(req)).data);
});

app.use(isAuth);

app.use('/api', router);

app.use('/isAlive', (_req, res) => {
  res.send(checkConnections() ? 'OK' : 'Not OK')
});

app.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export default app;
