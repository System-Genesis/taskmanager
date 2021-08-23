import getTokenCreator from 'spike-get-token';
import config from '../config/env.config';
import path from 'path';

const { spike } = config;

const options = {
  redisHost: spike.redisUrl,
  clientId: spike.clientId,
  clientSecret: spike.clientSecret,
  spikeURL: spike.spikeUrl,
  tokenGrantType: 'client_credentials',
  tokenAudience: spike.splitterAud,
  tokenRedisKeyName: spike.redisKeyName,
  spikePublicKeyFullPath: path.join(__dirname, '../../key.pem'),
  useRedis: true,
  httpsValidation: false,
};

const getToken = getTokenCreator(options);

export default getToken;
