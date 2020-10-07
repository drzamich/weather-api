import 'reflect-metadata';
import { Container } from 'inversify';
import { IWeatherApi, IHttp, ILogger } from '../interfaces';
import { TYPES } from './types';
import { WeatherApi } from '../WeatherApi';
import { Http } from '../Http';
import { Logger } from '../Logger';
import { Main } from '../Main';

export const IoC = new Container();
IoC.bind<IWeatherApi>(TYPES.IWeatherApi).to(WeatherApi);
IoC.bind<IHttp>(TYPES.IHttp).to(Http);
IoC.bind<ILogger>(TYPES.ILogger).to(Logger);

IoC.bind(Main).toSelf().inSingletonScope();