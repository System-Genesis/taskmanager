import axios from 'axios';
import config from '../config/env.config';
import { req } from './utilApi';

const baseUrl = config.merger.baseUrl + '/get';

export default {
  all: async () => await req(axios.get(`${baseUrl}`)),

  one: async (identifier: string) => {
    return await req(axios.get(`${baseUrl}/entity/${identifier}`));
  },

  source: async (source: string) => {
    return await req(axios.get(`${baseUrl}/source/${source}`));
  },
  date: async (dateMS: string) => {
    return await req(axios.get(`${baseUrl}/source/${dateMS}`));
  },
};
