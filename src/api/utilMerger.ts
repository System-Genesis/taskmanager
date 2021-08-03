import { AxiosResponse } from 'axios';
import { logError } from '../log/logger';

export const reqMerger = async (req: Promise<AxiosResponse<any>>) => {
  try {
    return (await req).data;
  } catch (error) {
    const errorRes = {
      url: error.config.url,
      errMessage: error.message,
    };

    logError(`Can't get response `, errorRes);

    throw errorRes;
  }
};
