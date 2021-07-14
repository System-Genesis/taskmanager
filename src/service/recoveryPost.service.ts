import { recovery } from '../api/recovery.api';

export default {
  runAll: async () => await recovery.all(),
  runOne: async (identifier: string) => {
    return await recovery.one(identifier);
  },
  runSource: async (source: string) => await recovery.source(source),
  runDate: async (dateMS: string) => await recovery.date(dateMS),
};
