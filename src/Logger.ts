import { injectable } from 'inversify';
import { ILogger } from './interfaces';

@injectable()
export class Logger implements ILogger {
  public log(input: string | number) {
    console.log(input);
  }
}