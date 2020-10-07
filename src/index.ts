import { IoC } from './IoC';
import { Main } from './Main';

const main: Main = IoC.get(Main);
main.initialize();