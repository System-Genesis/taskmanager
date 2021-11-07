import './dotenv';

import env from 'env-var';

export default {
  akaUrl: env.get('AKA_URL').required().asString(),
  daily: {
    hour: env.get('DAILY_HOUR').required().asInt(),
    minute: env.get('DAILY_MINUTE').required().asInt(),
    tz: env.get('HOUR_TIME_ZONE_DIF').required().asInt(),
  },
  splitter: {
    baseUrl: env.get('SPLITTER_URL').required().asString(),
    all: env.get('ALL_SRC').required().asString(),
  },
  merger: {
    baseUrl: env.get('MERGER_URL').required().asString(),
  },
  server: {
    port: env.get('PORT').required().asString(),
  },
  rabbit: {
    uri: env.get('RABBIT_URI').required().asString(),
    logger: env.get('LOGGER').required().asString(),
    retryOptions: {
      minTimeout: env.get('RABBIT_RETRY_MIN_TIMEOUT').default(1000).asIntPositive(),
      retries: env.get('RABBIT_RETRY_RETRIES').default(10).asIntPositive(),
      factor: env.get('RABBIT_RETRY_FACTOR').default(1.8).asFloatPositive(),
    },
  },
  spike: {
    spikeUrl: env.get('SPIKE_URL').required().asString(),
    redisUrl: env.get('REDIS_URL').required().asString(),
    redisKeyName: env.get('REDIS_KEY_NAME').required().asString(),
    myAud: env.get('MY_AUDIENCE').required().asString(),
    clientId: env.get('MY_CLIENT_ID').required().asString(),
    clientSecret: env.get('MY_CLIENT_SECRET').required().asString(),
    splitterAud: env.get('SPLITTER_AUDIENCE').required().asString(),
  },
};
