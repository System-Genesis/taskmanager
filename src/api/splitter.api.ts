import axios from 'axios';
import { v4 as uuid } from 'uuid';
import config from '../config/env.config';

const baseUrl = config.splitter.baseUrl + '/api/information';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

export default {
  runAllSource: async () => {
    const res = await axios.post(baseUrl, {
      dataSource: 'all',
      renuid: uuid(),
    });
    return res;
  },

  runOneSource: async (source: string) => {
    const res = await axios.post(baseUrl, {
      dataSource: source,
      renuid: uuid(),
    });
    return res;
  },

  runOneFromOneSource: async (identifier: string, source: string) => {
    let res = await axios.post(baseUrl, {
      dataSource: source,
      identityCard: identifier,
      renuid: uuid(),
    });

    if (!res) {
      res = await axios.post(baseUrl, {
        dataSource: source,
        personalNumber: identifier,
        renuid: uuid(),
      });
    }
    if (!res) {
      res = await axios.post(baseUrl, {
        dataSource: source,
        domainUser: identifier,
        renuid: uuid(),
      });
    }

    return res;
  },

  runOneFromAllSource: async (identifier: string) => {
    const res = await axios.post(baseUrl, {
      dataSource: '',
      renuid: uuid(),
    });
    return res;
  },
};
