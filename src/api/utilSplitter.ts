import axios from 'axios';
import getToken from '../auth/spike';
import { logError } from '../log/logger';
import config from '../config/env.config';
import { v4 as uuid } from 'uuid';

const baseUrl = config.splitter.baseUrl + '/api/information';

type fieldsType = {
  identityCard?: string;
  personalNumber?: string;
  domainUser?: string;
};

export const reqSplitter = async (dataSource: string, fields: fieldsType = {}) => {
  try {
    const token: string = await getToken();
    const body = {
      dataSource,
      runUID: uuid(),
      ...fields,
    };

    const res = await axios.post(baseUrl, body, {
      headers: { Authorization: token },
    });

    return res.data;
  } catch (error) {
    const errorRes = { url: error.config.url, errMessage: error.message };

    logError(`Can't get response`, errorRes);

    throw errorRes;
  }
};
