import { Request, Response } from 'express';
import splitterService from '../service/splitter.service';

const all = async (_: Request, res: Response) => {
  const result = await splitterService.runAllSource();

  res.send(result);
};

const source = async (req: Request, res: Response) => {
  const result = await splitterService.runOneSource(req.params.source);

  res.send(result);
};

const oeFromOneSource = async (req: Request, res: Response) => {
  const { id, source } = req.params;

  const result = await splitterService.runOneFromOneSource(id, source);

  res.send(result);
};

const oneFromAllSource = async (req: Request, res: Response) => {
  const identifier = req.params.identifier;

  const result = await splitterService.runOneFromAllSource(identifier);

  res.send(result);
};

export default { all, source, oeFromOneSource, oneFromAllSource };
