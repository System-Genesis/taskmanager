import splitterApi from '../api/splitter.api';


export default {
  runAllSource: async () => {
    const res = await splitterApi.runAllSource();
    return res;
  },

  runOneSource: async (source: string) => {
    const res = await splitterApi.runOneSource(source);
    return res;
  },

  runOneFromOneSource: async (identifier: string, source: string) => {
    const res = await splitterApi.runOneFromOneSource(identifier, source);
    return res;
  },

  runOneFromAllSource: async (identifier: string) => {
    const res = await splitterApi.runOneFromAllSource(identifier);
    return res;
  },
};
