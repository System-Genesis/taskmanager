import { AxiosResponse } from 'axios';
import mergerGetService from '../src/service/mergerGet.service';
import mergerPostService from '../src/service/mergerPost.service';
jest.mock('../src/log/logger', () => ({
  logInfo: () => {},
  logError: () => {},
}));

jest.mock('../src/api/utilMerger', () => ({
  reqMerger: (a: Promise<AxiosResponse<any>>) => a.catch((e) => e.config.url),
}));

describe('merger service get', () => {
  it('Should get all', async () => {
    const res: string = await mergerGetService.getAll();

    expect(res.includes('get')).toBeTruthy();
  });

  it('Should get one', async () => {
    const identifier = '4564';
    const res: string = await mergerGetService.getOne(identifier);

    expect(res.includes(identifier)).toBeTruthy();
  });

  it('Should get src', async () => {
    const source = 'hey';
    const res: string = await mergerGetService.getSource(source);

    expect(res.includes(source)).toBeTruthy();
  });

  it('Should get date', async () => {
    const date = '48645';
    const res: string = await mergerGetService.getDate(date);

    expect(res.includes(date)).toBeTruthy();
  });
});

describe('merger service post', () => {
  it('Should get all', async () => {
    const res: string = await mergerPostService.runAll();

    expect(res.includes('recovery')).toBeTruthy();
  });

  it('Should get one', async () => {
    const identifier = '4564';
    const res: string = await mergerPostService.runOne(identifier);

    expect(res.includes(identifier)).toBeTruthy();
  });

  it('Should get src', async () => {
    const source = 'hey';
    const res: string = await mergerPostService.runSource(source);

    expect(res.includes(source)).toBeTruthy();
  });

  it('Should get date', async () => {
    const date = '48645';
    const res: string = await mergerPostService.runDate(date);

    expect(res.includes(date)).toBeTruthy();
  });
});
