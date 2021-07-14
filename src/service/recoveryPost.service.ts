import recoveryPostApi from '../api/recoveryPost.api';

export default {
  runAll: async () => await recoveryPostApi.runAll(),
  runOne: async (identifier: string) => {
    return await recoveryPostApi.runOne(identifier);
  },
  runSource: async (source: string) => await recoveryPostApi.runSource(source),
  runDate: async (dateMS: string) => await recoveryPostApi.runDate(dateMS),
};
