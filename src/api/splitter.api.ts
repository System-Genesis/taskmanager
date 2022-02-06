import { reqSplitter } from './utilSplitter';
import config from '../config/env.config';
import { axiosReq } from '../util/types';

const splitterEnv = config.splitter;

const oneFromSource = async (axiosType: axiosReq, identifier: string, source: string) => {
  const res = await reqSplitter(axiosType, source, {
    identityCard: identifier,
    personalNumber: identifier,
  });

  return res;
};

const diFromSource = async (axiosType: axiosReq, domainUser: string, source: string) => {
  const res = await reqSplitter(axiosType, source, { domainUser });

  return res;
};

export default {
  allSource: async (axiosType: axiosReq) => await reqSplitter(axiosType, splitterEnv.all),

  oneSource: async (axiosType: axiosReq, source: string) => await reqSplitter(axiosType, source),

  oneFromOneSource: async (axiosType: axiosReq, identifier: string, source: string) => {
    return await oneFromSource(axiosType, identifier, source);
  },

  oneFromAllSource: async (axiosType: axiosReq, identifier: string) => {
    return await oneFromSource(axiosType, identifier, splitterEnv.all);
  },
  byDigitalIdentityAll: async (axiosType: axiosReq, domainUser: string) => {
    return await diFromSource(axiosType, domainUser, splitterEnv.all);
  },
  byDigitalIdentityOneSource: async (axiosType: axiosReq, domainUser: string, source: string) => {
    return await diFromSource(axiosType, domainUser, source);
  },
};
