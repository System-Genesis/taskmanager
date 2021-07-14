import recoveryGetApi from '../api/recoveryGet.api';

export default {
  runAll: async () => recoveryGetApi.runAll(),
  runOne: async (identifier: string) => recoveryGetApi.runOne(identifier),
  runSource: async (source: string) => recoveryGetApi.runSource(source),
  runDate: async (dateMS: string) => recoveryGetApi.runDate(dateMS),
};
