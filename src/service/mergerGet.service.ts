import get from '../api/mergerGet.api';

export default {
  getAll: async () => await get.all(),
  getOne: async (identifier: string) => await get.one(identifier),
  getSource: async (source: string) => await get.source(source),
  getDate: async (dateMS: string) => await get.date(dateMS),
};
