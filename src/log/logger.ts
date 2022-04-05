import winston from 'winston';

const { config, format } = winston;

export const logger = winston.createLogger({
  levels: config.npm.levels,

  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.splat(),
    format.simple(),
    format.json()
  ),
  transports: [new winston.transports.Console()],
});

/**
 * Send log in level INFO to logger queue and to local logger
 * @param msg - explanation of logger
 * @param any - objet to add to msg
 */
export const logInfo = (msg: string, any: any = '') => {
  if (any) logger.info(`${msg} ${JSON.stringify(any)}`);
  else logger.info(msg);
};

/**
 * Send log in level warn to logger queue and to local logger
 * @param msg - explanation of logger
 * @param any - objet to add to msg
 */
export const logWarn = (msg: string, any: any = '') => {
  if (any) logger.info(`${msg} ${JSON.stringify(any)}`);
  else logger.info(msg);
};

/**
 * Send log in level ERROR to logger queue and to local logger
 * @param msg - explanation of logger
 * @param any - objet to add to msg
 */
export const logError = (msg: string, any: any = '') => {
  logger.error(`${msg} ${!any ? '' : JSON.stringify(any)}`);
};
