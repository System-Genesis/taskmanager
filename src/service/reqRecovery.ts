import { AxiosResponse } from 'axios';
import { logError } from '../log/logger';

export const req = async (req: Promise<AxiosResponse<any>>) => {
  try {
    return (await req).data;
  } catch (error) {
    logError(`Can't get response`, `${error}`.split('\n'));
    return null;
  }
};
