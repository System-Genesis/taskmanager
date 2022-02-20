import { connectRabbit } from './rabbit/rabbit';
import app from './app';
import config from './config/env.config';
import { DailyRun } from './util/DailyRun';
import redisClient from './redis/redis';

require('dotenv').config();

const PORT = config.server.port || 7706;

const start = async () => {
  redisClient(async () => {
    await connectRabbit();
    app.listen(PORT, () => {
      console.log('Listening on port: ' + PORT);
    });

    DailyRun.getInstance().start();
  });
};

start().catch(console.log);

export default start;
