import 'reflect-metadata';
import { IHttp } from './interfaces';
import { WeatherApi } from './WeatherApi';

class MockedHttp implements IHttp {
  constructor(private temp: number) {}
  async get<T>(url: string): Promise<T> {
    return ({
      main: {
        temp: this.temp
      }
    }) as unknown as T
  }
}

describe('WeatherApi', () => {
  it('returns proper temperature', async () => {
    // given
    const kelvinTemp = 273.15;
    const mockedHttp = new MockedHttp(kelvinTemp);
    const weatherApi = new WeatherApi(mockedHttp);
    // when
    const celsiusTemp = await weatherApi.getTemperature();
    // then
    expect(celsiusTemp).toEqual("0.0");
  })
})