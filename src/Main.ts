import { IWeatherApi, ILogger } from './interfaces';
import { injectable, inject } from 'inversify';
import { TYPES } from './IoC/types';

@injectable()
export class Main {
  constructor(
    @inject(TYPES.ILogger) private logger: ILogger,
    @inject(TYPES.IWeatherApi) private weatherApi: IWeatherApi,
  ) {}

  public async initialize(): Promise<void> {
    const temp = await this.weatherApi.getTemperature();
    this.logger.log(`The temperature in Warsaw is ${temp} C.`);
  }
}