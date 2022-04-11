import redis from 'redis';
import { promisify } from 'util';
import envConfig from '../config/env.config';
import { dailyReq } from '../util/types';

export let getDailyParam: () => Promise<dailyReq>;
export let setDailyParam: (param: dailyReq) => Promise<dailyReq>;
export let client: redis.RedisClient;

const redisClient = (cb?: any) => {
  client = redis.createClient(envConfig.redisUrl);

  client.on('connect', () => {
    console.log('Redis connected (di to entity)');
    cb();
  });

  client.on('error', (err) => {
    console.error('Redis Error: ' + err);
  });

  getDailyParam = async () => {
    const data = await promisify(client.get).bind(client)(`DAILY_PARAM`);

    return JSON.parse(data);
  };

  setDailyParam = async (param: dailyReq) => {
    return await client.set(`DAILY_PARAM`, JSON.stringify(param));
  };
};

export default redisClient;
