import { logInfo } from '../log/logger';
import schedule from 'node-schedule';
import config from '../config/env.config';
import splitterService from '../service/splitter.service';

const { hour: defHour, minute: defMinute, tz } = config.daily;
const DAY_HOUR = 24;

export class DailyRun {
  static instance: DailyRun;

  public static getInstance(): DailyRun {
    if (!DailyRun.instance) {
      DailyRun.instance = new DailyRun();
    }
    return DailyRun.instance;
  }

  hour: number;
  minute: number;
  runFunc: schedule.Job;

  private fixHour(hour: number) {
    return (hour + DAY_HOUR - tz) % DAY_HOUR;
  }

  private constructor(hour: number = defHour, minute: number = defMinute) {
    this.hour = hour;
    this.minute = minute;
  }

  public async start() {
    logInfo(`Daily run scheduled to ${this.hour}:${this.minute}`);
    this.runFunc = schedule.scheduleJob({ hour: this.fixHour(this.hour), minute: this.minute }, () => {
      logInfo('Daily run is starting');
      splitterService.runAllSource('post');
    });
  }

  public changeRunTime(hour: number, minute: number) {
    this.runFunc.cancel();
    this.hour = hour;
    this.minute = minute;
    this.start();
  }
}
