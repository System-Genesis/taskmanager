import recoveryGetApi from '../api/recoveryGet.api';

export default {
  getAll: async () => await recoveryGetApi.getAll(),
  getOne: async (identifier: string) => await recoveryGetApi.getOne(identifier),
  getSource: async (source: string) => await recoveryGetApi.getSource(source),
  getDate: async (dateMS: string) => await recoveryGetApi.getDate(dateMS),
};
