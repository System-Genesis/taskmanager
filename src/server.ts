import { connectRabbit } from './rabbit/rabbit';
import app from './app';
import config from './config/env.config';

require('dotenv').config();

const PORT = config.server.port || 7705;

const start = async () => {
  await connectRabbit();
  app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
  });
};

start();

export default start;
