import recoveryGetApi from '../api/recoveryGet.api';

export default {
  getAll: async () => recoveryGetApi.getAll(),
  getOne: async (identifier: string) => recoveryGetApi.getOne(identifier),
  getSource: async (source: string) => recoveryGetApi.getSource(source),
  getDate: async (dateMS: string) => recoveryGetApi.getDate(dateMS),
};
