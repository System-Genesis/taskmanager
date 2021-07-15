import axios from 'axios';
import config from '../config/env.config';
import { req } from './utilApi';

const baseUrl = config.merger.baseUrl + '/recovery';

export default {
  all: async () => await req(axios.post(`${baseUrl}`)),

  one: async (identifier: string) => {
    return await req(axios.post(`${baseUrl}/entity/${identifier}`));
  },

  source: async (source: string) => {
    return await req(axios.post(`${baseUrl}/source/${source}`));
  },
  date: async (dateMS: string) => {
    return await req(axios.post(`${baseUrl}/source/${dateMS}`));
  },
};
