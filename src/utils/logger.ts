import dayjs from 'dayjs';
import merge from 'lodash.merge';

import { styles } from './styles';

import { logger_options } from '../defaults/logger_options';

import type { LoggerOptions } from '../types/logger_options';

export class Logger {
  private readonly options: LoggerOptions;

  public constructor(options: LoggerOptions = logger_options) {
    this.options = merge({}, logger_options, options);
  }

  public info(message: string): void {
    console.info(`${this.options.scope !== undefined ? `${styles.fg.cyan}${this.options.scope} ${styles.fg.blue}» ` : ''}${styles.fg.gray}[${dayjs().format('YYYY-MM-DD HH:mm:ss')} ${styles.fg.green}INF${styles.fg.gray}] ${styles.fg.green}${message}`, styles.reset);
  }

  public warn(message: string): void {
    console.warn(`${this.options.scope !== undefined ? `${styles.fg.cyan}${this.options.scope} ${styles.fg.blue}» ` : ''}${styles.fg.gray}[${dayjs().format('YYYY-MM-DD HH:mm:ss')} ${styles.fg.yellow}WRN${styles.fg.gray}] ${styles.fg.yellow}${message}`, styles.reset);
  }

  public error(message: string): void {
    console.error(`${this.options.scope !== undefined ? `${styles.fg.cyan}${this.options.scope} ${styles.fg.blue}» ` : ''}${styles.fg.gray}[${dayjs().format('YYYY-MM-DD HH:mm:ss')} ${styles.fg.red}ERR${styles.fg.gray}] ${styles.fg.red}${message}`, styles.reset);
  }
}
