import { Request, Response } from 'express';
import mergerGetService from '../service/mergerGet.service';

const all = async (_: Request, res: Response) => {
  const result = await mergerGetService.getAll();

  res.send(result);
};

const source = async (req: Request, res: Response) => {
  const result = await mergerGetService.getSource(req.params.source);

  res.send(result);
};

const identifier = async (req: Request, res: Response) => {
  const result = await mergerGetService.getOne(req.params.identifier);

  res.send(result);
};

const dateMs = async (req: Request, res: Response) => {
  const result = await mergerGetService.getDate(req.params.dateMs);

  res.send(result);
};

const diBySource = async (req: Request, res: Response) => {
  const result = await mergerGetService.getDiBySource(req.params.source, req.params.digitalIdentityUniqueId);

  res.send(result);
};

export default { all, source, identifier, dateMs, diBySource };
