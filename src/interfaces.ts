export interface IHttp {
  get<T>(url: string): Promise<T>;
}

export interface ILogger {
  log(input: number | string): void;
}

export interface IWeatherApi {
  url: string;
  getTemperature(): Promise<string>;
}