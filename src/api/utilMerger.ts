import { AxiosResponse } from 'axios';
import { logError } from '../log/logger';

export const reqMerger = async (req: Promise<AxiosResponse<any>>) => {
  try {
    return (await req).data;
  } catch (error) {
    logError(`Can't get response`, { url: error.config.url });
    throw error;
  }
};
