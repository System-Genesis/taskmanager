import './dotenv';

import env from 'env-var';

export default {
  splitter: {
    baseUrl: env.get('SPLITTER_URL').required().asString(),
  },
  recovery: {
    baseUrl: env.get('RECOVERY_URL').required().asString(),
  },
  server: {
    port: env.get('PORT').required().asString(),
  },
  rabbit: {
    uri: env.get('RABBIT_URI').required().asString(),
    logger: env.get('LOGGER').required().asString(),
    retryOptions: {
      minTimeout: env
        .get('RABBIT_RETRY_MIN_TIMEOUT')
        .default(1000)
        .asIntPositive(),
      retries: env.get('RABBIT_RETRY_RETRIES').default(2).asIntPositive(),
      factor: env.get('RABBIT_RETRY_FACTOR').default(1.8).asFloatPositive(),
    },
  },
};
