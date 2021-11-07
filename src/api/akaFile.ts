import { Request } from 'express';
import axios from 'axios';
import config from '../config/env.config';

const baseUrl = config.akaUrl;

export default {
  newFile: async (req: Request) => await axios.post(baseUrl, req.body),
};
