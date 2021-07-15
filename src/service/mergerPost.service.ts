import merger from '../api/mergerPost.api';

export default {
  runAll: async () => await merger.all(),
  runOne: async (identifier: string) => {
    return await merger.one(identifier);
  },
  runSource: async (source: string) => await merger.source(source),
  runDate: async (dateMS: string) => await merger.date(dateMS),
};
