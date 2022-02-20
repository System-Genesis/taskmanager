import { getDailyParam } from './../redis/redis';
import { logInfo } from '../log/logger';
import schedule from 'node-schedule';
import config from '../config/env.config';
import splitterService from '../service/splitter.service';
import { dailyReq } from './types';
import { setDailyParam } from '../redis/redis';

const { tz } = config.daily;
const DAY_HOUR = 24;

export class DailyRun {
  static instance: DailyRun;

  public static getInstance(): DailyRun {
    if (!DailyRun.instance) {
      DailyRun.instance = new DailyRun();
    }
    return DailyRun.instance;
  }

  runFunc: schedule.Job;

  private fixHour(hour: number) {
    return (hour + DAY_HOUR - tz) % DAY_HOUR;
  }

  public async start() {
    const dailyRun = await getDailyParam();
    logInfo(`Daily run scheduled to ${JSON.stringify(dailyRun)}`);
    const hour = dailyRun?.hour?.toString() ? this.fixHour(dailyRun?.hour) : null;
    const rule = new schedule.RecurrenceRule();

    if (hour) rule.hour = hour;
    if (dailyRun.minute) rule.minute = dailyRun.minute;
    if (dailyRun.date) rule.date = dailyRun.date;
    if (dailyRun.second) rule.second = dailyRun.second;
    if (dailyRun.month) rule.month = dailyRun.month;
    if (dailyRun.dayOfWeek) rule.dayOfWeek = dailyRun.dayOfWeek;

    this.runFunc = schedule.scheduleJob(rule, () => {
      try {
        logInfo('Daily run is starting');
        splitterService.runAllSource('post');
      } catch (error) {
        console.log(error);
      }
    });
  }

  public async changeRunTime(daily: dailyReq) {
    this.runFunc?.cancel();

    await setDailyParam(daily);

    this.start();
  }
}
