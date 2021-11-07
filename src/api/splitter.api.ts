import { reqSplitter } from './utilSplitter';
import config from '../config/env.config';
import { axiosReq } from '../util/types';

const splitterEnv = config.splitter;

const oneFromOneSource = async (axiosType: axiosReq, identifier: string, source: string) => {
  const res = await reqSplitter(axiosType, source, {
    identityCard: identifier,
    personalNumber: identifier,
    domainUser: identifier,
  });

  return res;
};

export default {
  allSource: async (axiosType: axiosReq) => await reqSplitter(axiosType, splitterEnv.all),

  oneSource: async (axiosType: axiosReq, source: string) => await reqSplitter(axiosType, source),

  oneFromOneSource: async (axiosType: axiosReq, identifier: string, source: string) => {
    return await oneFromOneSource(axiosType, identifier, source);
  },

  oneFromAllSource: async (axiosType: axiosReq, identifier: string) => {
    return await oneFromOneSource(axiosType, identifier, splitterEnv.all);
  },
};
