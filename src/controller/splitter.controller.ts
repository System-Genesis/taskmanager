import { axiosReq } from './../util/types';
import { Request, Response } from 'express';
import splitterService from '../service/splitter.service';

const all = async (req: Request, res: Response) => {
  const axiosType: axiosReq = req.method as axiosReq;
  const result = await splitterService.runAllSource(axiosType);

  res.send(result);
};

const source = async (req: Request, res: Response) => {
  const axiosType: axiosReq = req.method as axiosReq;
  const result = await splitterService.runOneSource(axiosType, req.params.source);

  res.send(result);
};

const oneFromOneSource = async (req: Request, res: Response) => {
  const axiosType: axiosReq = req.method as axiosReq;
  const { id, source } = req.params;

  const result = await splitterService.runOneFromOneSource(axiosType, id, source);

  res.send(result);
};

const oneFromAllSource = async (req: Request, res: Response) => {
  const axiosType: axiosReq = req.method as axiosReq;
  const identifier = req.params.identifier;

  const result = await splitterService.runOneFromAllSource(axiosType, identifier);

  res.send(result);
};

export default { all, source, oeFromOneSource: oneFromOneSource, oneFromAllSource };
