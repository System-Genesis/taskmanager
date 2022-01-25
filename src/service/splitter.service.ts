import splitterApi from '../api/splitter.api';
import { axiosReq } from '../util/types';

export default {
  runAllSource: async (axiosType: axiosReq) => await splitterApi.allSource(axiosType),
  runOneSource: async (axiosType: axiosReq, source: string) => await splitterApi.oneSource(axiosType, source),
  runOneFromOneSource: async (axiosType: axiosReq, identifier: string, source: string) => {
    return await splitterApi.oneFromOneSource(axiosType, identifier, source);
  },
  runOneFromAllSource: async (axiosType: axiosReq, identifier: string) => {
    return await splitterApi.oneFromAllSource(axiosType, identifier);
  },
  runDiFromSource: async (axiosType: axiosReq, digitalIdentity: string) => {
    return await splitterApi.byDigitalIdentity(axiosType, digitalIdentity);
  },
};
