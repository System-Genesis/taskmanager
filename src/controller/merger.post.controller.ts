import { Request, Response } from 'express';
import mergerPostService from '../service/mergerPost.service';

const all = async (_: Request, res: Response) => {
  const result = await mergerPostService.runAll();

  res.json(result);
};

const source = async (req: Request, res: Response) => {
  const result = await mergerPostService.runSource(req.params.source);

  res.json(result);
};

const identifier = async (req: Request, res: Response) => {
  const result = await mergerPostService.runOne(req.params.identifier);

  res.json(result);
};

const dateMs = async (req: Request, res: Response) => {
  const result = await mergerPostService.runDate(req.params.dateMs);

  res.json(result);
};

const diBySource = async (req: Request, res: Response) => {
  const result = await mergerPostService.diBySource(req.params.source, req.params.digitalIdentityUniqueId);

  res.send(result);
};

export default { all, source, identifier, dateMs, diBySource };
