import mergerApi from '../api/merger.api';

export default {
  runAll: async () => await mergerApi.all('post'),
  runOne: async (identifier: string) => {
    return await mergerApi.one('post', identifier);
  },
  runSource: async (source: string) => await mergerApi.source('post', source),
  runDate: async (dateMS: string) => await mergerApi.date('post', dateMS),
  diBySource: async (source: string, digitalIdentityUniqueId: string) => {
    await mergerApi.diBySource('post', source, digitalIdentityUniqueId);
  },
};
