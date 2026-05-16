import Dayjs from 'dayjs';
import merge from 'lodash.merge';

import { Styles } from './styles';

import { LoggerOptionsDefault } from '../defaults/logger_options';

import type { LoggerOptions } from '../types/logger_options';

export class Logger {
  private readonly options: LoggerOptions;

  public constructor(options: LoggerOptions = LoggerOptionsDefault) {
    this.options = merge({}, LoggerOptionsDefault, options);
  }

  public info(message: string): void {
    console.info(`${this.options.scope !== undefined ? `${Styles.fg.cyan}${this.options.scope} ${Styles.fg.blue}» ` : ''}${Styles.fg.gray}[${Dayjs().format('YYYY-MM-DD HH:mm:ss')} ${Styles.fg.green}INF${Styles.fg.gray}] ${Styles.fg.green}${message}`, Styles.reset);
  }

  public warn(message: string): void {
    console.warn(`${this.options.scope !== undefined ? `${Styles.fg.cyan}${this.options.scope} ${Styles.fg.blue}» ` : ''}${Styles.fg.gray}[${Dayjs().format('YYYY-MM-DD HH:mm:ss')} ${Styles.fg.yellow}WRN${Styles.fg.gray}] ${Styles.fg.yellow}${message}`, Styles.reset);
  }

  public error(message: string): void {
    console.error(`${this.options.scope !== undefined ? `${Styles.fg.cyan}${this.options.scope} ${Styles.fg.blue}» ` : ''}${Styles.fg.gray}[${Dayjs().format('YYYY-MM-DD HH:mm:ss')} ${Styles.fg.red}ERR${Styles.fg.gray}] ${Styles.fg.red}${message}`, Styles.reset);
  }
}
