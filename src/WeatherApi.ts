import { IWeatherApi, IHttp } from './interfaces';
import { injectable, inject } from 'inversify';
import { TYPES } from './IoC/types';

// HERE GO TO THE WEBSITE WITH API CALL AND THEN PROCEED

interface WeatherApiDto {
  main: {
    temp: number,
  }
}

@injectable()
export class WeatherApi implements IWeatherApi {
  constructor(
    @inject(TYPES.IHttp) public http: IHttp,
  ) {}

  public url: string = 'http://api.openweathermap.org/data/2.5/weather?id=756135&APPID=<YOUR_API_KEY>';

  private kelvinToCelsius(kelvinTemp: number) {
    return kelvinTemp - 273.15;
  }

  public async getTemperature(): Promise<string> {
    const url = this.url;
    const response = await this.http.get<WeatherApiDto>(url);
    const temperature = response.main.temp;
    return this.kelvinToCelsius(temperature).toFixed(1);
  }
}