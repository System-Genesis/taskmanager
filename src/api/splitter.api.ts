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
  runAllSource: async () => await reqSplitter(splitterEnv.all),

  runOneSource: async (source: string) => await reqSplitter(source),

  runOneFromOneSource: async (identifier: string, source: string) => {
    return await oneFromOneSource(identifier, source);
  },

  runOneFromAllSource: async (identifier: string) => {
    return await oneFromOneSource(identifier, splitterEnv.all);
  },
};
