import splitterApi from '../api/splitter.api';

export default {
  runAllSource: async () => await splitterApi.allSource(),
  runOneSource: async (source: string) => await splitterApi.oneSource(source),
  runOneFromOneSource: async (identifier: string, source: string) => {
    return await splitterApi.oneFromOneSource(identifier, source);
  },
  runOneFromAllSource: async (identifier: string) => {
    return await splitterApi.oneFromAllSource(identifier);
  },
};
