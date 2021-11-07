import axios from 'axios';
import getToken from '../auth/spike';
import { logError } from '../log/logger';
import config from '../config/env.config';
import { v4 as uuid } from 'uuid';
import { axiosReq } from '../util/types';

const baseUrl = config.splitter.baseUrl + '/api/information';

type fieldsType = {
  identityCard?: string;
  personalNumber?: string;
  domainUser?: string;
};

export const reqSplitter = async (axiosType: axiosReq, dataSource: string, fields: fieldsType = {}) => {
  try {
    const token: string = await getToken();
    const body = {
      dataSource,
      ...fields,
    };

    const res = await axios[axiosType.toLowerCase()](baseUrl, {
      params: { ...body },
      headers: {
        runUID: uuid(),
        Authorization: token,
      },
    });

    return res.data;
  } catch (error: any) {
    const errorRes = { url: error.config.url, errMessage: error.message };

    logError(`Can't get response`, errorRes);

    throw errorRes;
  }
};
