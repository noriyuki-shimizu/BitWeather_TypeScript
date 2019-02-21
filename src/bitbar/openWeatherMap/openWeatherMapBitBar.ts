import * as bitbar from 'bitbar';

import { ConvertWeatherData } from '../../convert/openWeatherMap/convertWeatherData';

export class OpenWeatherMapBitBar {
    private weatherDataList: ConvertWeatherData[];

    constructor(weatherDataList: ConvertWeatherData[]) {
        this.weatherDataList = weatherDataList;
    }

    private integration(): any[] {
        return this.weatherDataList.map(weatherData => {
            return [
                bitbar.separator,
                {
                    text: weatherData.address,
                    color: 'black',
                    submenu: [{
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
                ]}
            ];
        });
    }

    public display(): void {
        this.weatherDataList.forEach(weatherData => {
            bitbar([
                {
                    text: '🌞',
                    dropdown: false
                },
                bitbar.separator,
                {
                    text: weatherData.address,
                    color: 'black',
                    submenu: [{
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
                ]}
            ]);
        });
    }
}