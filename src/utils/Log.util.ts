import Dayjs from 'dayjs';
import merge from 'lodash.merge';

import { Styles } from './Styles.util';

import { LogOptionsDefault } from '../defaults/LogOptions.default';

import type { LogOptions } from '../types/LogOptions.type';

export class Log {
  private readonly options: LogOptions;

  public constructor(options: LogOptions = LogOptionsDefault) {
    this.options = merge({}, LogOptionsDefault, options);
  }

  public info(message: string) {
    console.info(`${this.options.scope !== undefined ? `${Styles.fg.cyan}${this.options.scope} ${Styles.fg.blue}» ` : ''}${Styles.fg.gray}[${Dayjs().format('YYYY-MM-DD HH:mm:ss')} ${Styles.fg.green}INF${Styles.fg.gray}] ${Styles.fg.green}${message}`, Styles.reset);
  }

  public warn(message: string) {
    console.warn(`${this.options.scope !== undefined ? `${Styles.fg.cyan}${this.options.scope} ${Styles.fg.blue}» ` : ''}${Styles.fg.gray}[${Dayjs().format('YYYY-MM-DD HH:mm:ss')} ${Styles.fg.yellow}WRN${Styles.fg.gray}] ${Styles.fg.yellow}${message}`, Styles.reset);
  }

  public error(message: string) {
    console.error(`${this.options.scope !== undefined ? `${Styles.fg.cyan}${this.options.scope} ${Styles.fg.blue}» ` : ''}${Styles.fg.gray}[${Dayjs().format('YYYY-MM-DD HH:mm:ss')} ${Styles.fg.red}ERR${Styles.fg.gray}] ${Styles.fg.red}${message}`, Styles.reset);
  }
}
