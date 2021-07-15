import axios from 'axios';
import config from '../config/env.config';
import { reqMerger } from './utilMerger';

const baseUrl = config.merger.baseUrl + '/recovery';

export default {
  all: async () => await reqMerger(axios.post(`${baseUrl}`)),

  one: async (identifier: string) => {
    return await reqMerger(axios.post(`${baseUrl}/entity/${identifier}`));
  },

  source: async (source: string) => {
    return await reqMerger(axios.post(`${baseUrl}/source/${source}`));
  },
  date: async (dateMS: string) => {
    return await reqMerger(axios.post(`${baseUrl}/source/${dateMS}`));
  },
};
