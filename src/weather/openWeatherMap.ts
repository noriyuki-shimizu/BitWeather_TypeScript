import axios from 'axios';

import { OpenWeatherMapEnv } from '../systemEnv/openWeatherMapEnv';

interface CallbackType{(weatherDataList: any[]) :void};

export class OpenWeatherMap {
    private env: OpenWeatherMapEnv = new OpenWeatherMapEnv();
    private address: string;

    constructor(latlon: {lat: number | string, lon: number | string}, address: string) {
        Object.assign(this.env.param, latlon);
        this.address = address;
    }
    
    public getWeather(callback: CallbackType): void {
        axios({
            method : 'GET',
            url    : this.env.url,
            params : this.env.param
        }).then(response => callback(response.data.list));
    }

}