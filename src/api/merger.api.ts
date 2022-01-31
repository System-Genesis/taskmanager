import axios from 'axios';
import config from '../config/env.config';
import { axiosReq } from '../util/types';
import { reqMerger } from './utilMerger';

const baseUrl = {
  post: config.merger.baseUrl + '/recovery',
  get: config.merger.baseUrl + '/mergedUsers',
};

export default {
  all: async (type: axiosReq) => await reqMerger(axios[type](`${baseUrl[type]}`)),

  one: async (type: axiosReq, identifier: string) => {
    return await reqMerger(axios[type](`${baseUrl[type]}/entity/${identifier}`));
  },

  source: async (type: axiosReq, source: string) => {
    return await reqMerger(axios[type](`${baseUrl[type]}/source/${source}`));
  },
  date: async (type: axiosReq, dateMS: string) => {
    return await reqMerger(axios[type](`${baseUrl[type]}/date/${dateMS}`));
  },
  diBySource: async (type: axiosReq, source: string, digitalIdentityUniqueId: string) => {
    return await reqMerger(axios[type](`${baseUrl[type]}/source/${source}/digitalIdentity/${digitalIdentityUniqueId}`));
  },
};
