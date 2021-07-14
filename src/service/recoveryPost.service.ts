import recoveryPostApi from '../api/recoveryPost.api';

export default {
  runAll: async () => recoveryPostApi.runAll(),
  runOne: async (identifier: string) => recoveryPostApi.runOne(identifier),
  runSource: async (source: string) => recoveryPostApi.runSource(source),
  runDate: async (dateMS: string) => recoveryPostApi.runDate(dateMS),
};
