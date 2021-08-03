import { reqSplitter } from './utilSplitter';
import config from '../config/env.config';

const splitterEnv = config.splitter;

const oneFromOneSource = async (identifier: string, source: string) => {
  const res = await reqSplitter(source, {
    identityCard: identifier,
    personalNumber: identifier,
    domainUser: identifier,
  });

  return res;
};

export default {
  allSource: async () => await reqSplitter(splitterEnv.all),

  oneSource: async (source: string) => await reqSplitter(source),

  oneFromOneSource: async (identifier: string, source: string) => {
    return await oneFromOneSource(identifier, source);
  },

  oneFromAllSource: async (identifier: string) => {
    return await oneFromOneSource(identifier, splitterEnv.all);
  },
};
