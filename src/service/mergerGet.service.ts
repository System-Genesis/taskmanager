import mergerApi from '../api/merger.api';

export default {
  getAll: async () => await mergerApi.all('get'),
  getOne: async (identifier: string) => await mergerApi.one('get', identifier),
  getSource: async (source: string) => await mergerApi.source('get', source),
  getDate: async (dateMS: string) => await mergerApi.date('get', dateMS),
  getDiBySource: async (source: string, digitalIdentityUniqueId: string) => {
    await mergerApi.diBySource('get', source, digitalIdentityUniqueId);
  },
};
