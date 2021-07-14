// import axios from 'axios';
// import config from '../config/env.config';
// import { req } from './reqRecovery';

// const baseUrl = config.recovery.baseUrl + '/recovery';

// export default {
//   runAll: async () => await req(axios.post(`${baseUrl}`)),

//   runOne: async (identifier: string) => {
//     return await req(axios.post(`${baseUrl}/entity/${identifier}`));
//   },

//   runSource: async (source: string) => {
//     return await req(axios.post(`${baseUrl}/source/${source}`));
//   },
//   runDate: async (dateMS: string) => {
//     return await req(axios.post(`${baseUrl}/source/${dateMS}`));
//   },
// };
