import * as bitbar from 'bitbar';

import { ConvertWeatherData } from '../../convert/openWeatherMap/convertWeatherData';

export class OpenWeatherMapBitBar {
    private weatherDataList: ConvertWeatherData[];
    private address: string;

    constructor(weatherDataList: ConvertWeatherData[], address: string) {
        this.weatherDataList = weatherDataList;
        this.address = address;
    }

    public display(): void {
        var subMenukList = [];
        this.weatherDataList.forEach(weatherData => {
            subMenukList.push(
                {
                    text: weatherData.date,
                    color: 'black',
                    submenu: [
                        {
                            text: weatherData.weather,
                            color: 'black'
                        },
                        {
                            text: weatherData.temp,
                            color: 'black'
                        },
                        {
                            text: weatherData.tempMin,
                            color: 'black'
                        },
                        {
                            text: weatherData.tempMax,
                            color: 'black'
                        },
                        {
                            text: weatherData.humidity,
                            color: 'black'
                        },
                        {
                            text: weatherData.wind,
                            color: 'black'
                        }
                    ] 
                }
            );
        });

        bitbar([
            {
                text: '🌞',
                dropdown: false
            },
            bitbar.separator,
            {
                text: this.address,
                color: 'black',
                submenu: subMenukList
            }
        ]);
        
    }
}