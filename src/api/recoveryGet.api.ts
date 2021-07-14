import axios from 'axios';
import config from '../config/env.config';
import { req } from '../service/reqRecovery';

const baseUrl = config.recovery.baseUrl + '/get';

export default {
  runAll: async () => req(axios.get(`${baseUrl}/run`)),

  runOne: async (identifier: string) => {
    return req(axios.get(`${baseUrl}/run/entity/${identifier}`));
  },

  runSource: async (source: string) => {
    return req(axios.get(`${baseUrl}/run/source/${source}`));
  },
  runDate: async (dateMS: string) => {
    return req(axios.get(`${baseUrl}/run/source/${dateMS}`));
  },
};
