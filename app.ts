import { IpinfoEnv } from './src/systemEnv/ipinfoEnv'
import { TokoroEnv } from './src/systemEnv/tokoroEnv'

import { OpenWeatherMapEnv } from './src/systemEnv/openWeatherMapEnv'

var hoge:IpinfoEnv = new IpinfoEnv();

hoge.toString();

console.log();

var tokoro:TokoroEnv = new TokoroEnv();

tokoro.toString();

console.log();

var openWeatherMap:OpenWeatherMapEnv= new OpenWeatherMapEnv();

openWeatherMap.toString();
