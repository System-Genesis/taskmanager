import axios from 'axios';
import config from '../config/env.config';
import { req } from '../service/reqRecovery';

const baseUrl = config.recovery.baseUrl + '/recovery';

export default {
  runAll: async () => await req(axios.post(`${baseUrl}/run`)),

  runOne: async (identifier: string) => {
    return await req(axios.post(`${baseUrl}/run/entity/${identifier}`));
  },

  runSource: async (source: string) => {
    return await req(axios.post(`${baseUrl}/run/source/${source}`));
  },
  runDate: async (dateMS: string) => {
    return await req(axios.post(`${baseUrl}/run/source/${dateMS}`));
  },
};
