import axios from 'axios';
import config from '../config/env.config';
import { req } from '../service/reqRecovery';

const baseUrl = config.recovery.baseUrl + '/get';

export default {
  getAll: async () => await req(axios.get(`${baseUrl}/get`)),

  getOne: async (identifier: string) => {
    return await req(axios.get(`${baseUrl}/get/entity/${identifier}`));
  },

  getSource: async (source: string) => {
    return await req(axios.get(`${baseUrl}/get/source/${source}`));
  },
  getDate: async (dateMS: string) => {
    return await req(axios.get(`${baseUrl}/get/source/${dateMS}`));
  },
};
