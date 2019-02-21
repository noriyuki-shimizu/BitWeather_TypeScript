import { ConvertWeatherData } from './openWeatherMap/convertWeatherData';

export interface Convert {
    convert(): ConvertWeatherData[];
}