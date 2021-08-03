import axios from 'axios';
import config from '../config/env.config';
import { reqMerger } from './utilMerger';

const baseUrl = config.merger.baseUrl + '/get';

export default {
  all: async () => await reqMerger(axios.get(`${baseUrl}`)),

  one: async (identifier: string) => {
    return await reqMerger(axios.get(`${baseUrl}/entity/${identifier}`));
  },

  source: async (source: string) => {
    return await reqMerger(axios.get(`${baseUrl}/source/${source}`));
  },
  date: async (dateMS: string) => {
    return await reqMerger(axios.get(`${baseUrl}/date/${dateMS}`));
  },
};
