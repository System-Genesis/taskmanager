import axios from 'axios';
import { v4 as uuid } from 'uuid';
import config from '../config/env.config';
import { logError } from '../log/logger';

const baseUrl = config.splitter.baseUrl + '/api/information';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

const req = async (dataSource: string, fields: object = {}) => {
  try {
    const res = await axios.post(baseUrl, {
      dataSource,
      runUID: uuid(),
      ...fields,
    });

    return res.data;
  } catch (error) {
    logError(`Can't get response`, { error: `${error}`.split('\n') });
    return null;
  }
};

const oneFromOneSource = async (identifier: string, source: string) => {
  const res = await req(source, {
    identityCard: identifier,
    personalNumber: identifier,
    domainUser: identifier,
  });

  return res;
};

export default {
  runAllSource: async () => await req('all'),

  runOneSource: async (source: string) => await req(source),

  runOneFromOneSource: async (identifier: string, source: string) => {
    return await oneFromOneSource(identifier, source);
  },

  runOneFromAllSource: async (identifier: string) => {
    return await oneFromOneSource(identifier, 'all');
  },
};
