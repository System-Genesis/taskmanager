import { AxiosResponse } from 'axios';
// import config from '../config/env.config';
import { logError } from '../log/logger';

export const req = async (req: Promise<AxiosResponse<any>>) => {
  try {
    return (await req).data;
  } catch (error) {
    logError(`Can't get response`, { url: error.config.url });
    throw error;
  }
};

// const api = (baseUrl: string, axiosFun: string) => ({
//   all: async () => await req(axios[axiosFun](baseUrl)),

//   one: async (identifier: string) => {
//     return await req(axios[axiosFun](`${baseUrl}/entity/${identifier}`));
//   },

//   source: async (source: string) => {
//     return await req(axios[axiosFun](`${baseUrl}/source/${source}`));
//   },

//   date: async (dateMS: string) => {
//     return await req(axios[axiosFun](`${baseUrl}/source/${dateMS}`));
//   },
// });

// const recoveryUrl = config.recovery.baseUrl + '/recovery';
// const getUrl = config.recovery.baseUrl + '/get';

// export const recovery = {
//   all: async () => await api(recoveryUrl, 'post').all(),

//   date: async (dateMS: string) => {
//     await api(recoveryUrl, 'post').date(dateMS);
//   },

//   one: async (identifier: string) => {
//     return await api(recoveryUrl, 'post').one(identifier);
//   },

//   source: async (source: string) => {
//     return await api(recoveryUrl, 'post').source(source);
//   },
// };

// export const get = {
//   all: async () => await api(getUrl, 'get').all(),
//   date: async (dateMS: string) => await api(getUrl, 'get').date(dateMS),
//   source: async (source: string) => await api(getUrl, 'get').source(source),

//   one: async (identifier: string) => {
//     return await api(getUrl, 'get').one(identifier);
//   },
// };
