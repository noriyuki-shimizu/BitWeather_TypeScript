import axios from 'axios';

import { OpenWeatherMapEnv } from '../systemEnv/openWeatherMapEnv';
import { ConditionCodes } from './parts/conditionCodes/conditionCodes';
import { WindDigree } from './parts/windDigree/windDigree';
import { ConvertDate } from '../date/convertDate';

export class OpenWeatherMap {
    private env: OpenWeatherMapEnv = new OpenWeatherMapEnv();
    private weatherDataList: any;

    private titleColor: string;

    constructor(lat: number | string, lon: number | string) {
        this.env.param.lat = lat;
        this.env.param.lon = lon;
    }
    
    public setTitleColor(titleColor: string): void {
        this.titleColor = titleColor;
    }

    public getWeather(displayList: any[]) {
        axios({
            method : 'GET',
            url    : this.env.url,
            params : this.env.param
        }).then(response => {
            this.weatherDataList = response.data.list;
            this.convert(displayList);
        });
    }
    private convert(displayList: any[]):void {
        displayList.push(this.weatherDataList.map(weatherData => {
            const convertDate: {dateStr: string; hourStr: string} = new ConvertDate(weatherData.dt_txt).getDate();

            const conditionCode: {id: number; meaning: string; icon: string} = new ConditionCodes().get(weatherData.weather[0].id);

            const digree: {f:number; t: number; windDigree: string} = new WindDigree().get(weatherData.wind.deg);

            return {
                text: convertDate.dateStr,
                color: this.titleColor !== undefined ? this.titleColor : 'black',
                submenu: [
                    {
                        text: convertDate.hourStr,
                        submenu: [
                            {
                                text: `${conditionCode.icon} : ${conditionCode.meaning}`,
                                color: 'black'
                            },
                            {
                                text: `気温: ${weatherData.main.temp}℃`,
                                color: 'black'
                            },
                            {
                                text: `最低気温: ${weatherData.main.temp_min}℃`,
                                color: 'black'
                            },
                            {
                                text: `最高気温: ${weatherData.main.temp_max}℃`,
                                color: 'black'
                            },
                            {
                                text: `湿度: ${weatherData.main.humidity}%`,
                                color: 'black'
                            },
                            {
                                text: `風: ${weatherData.wind.speed}m(${digree.windDigree})`,
                                color: 'black'
                            }
                        ]
                    }
                ]
            }
        }));
    }
}