import * as winston from "winston";

const {format, createLogger, transports} = winston;
const {combine, timestamp, printf} = format;

const customFormat: any = printf((info: any) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

export const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp({format: 'DD-MM-YYYY HH:mm:ss'}),
    customFormat
  ),
  transports: [new transports.Console()]
});

export default logger;
