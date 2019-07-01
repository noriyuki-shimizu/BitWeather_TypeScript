import axios from 'axios';

import { OpenWeatherMapEnv } from '../systemEnv/openWeatherMapEnv';

type LatLon = { lat: number | string; lon: number | string };
type CallbackType = (weatherDataList: any[]) => void;

/**
 * OpenWeatherMap API操作に関するクラス。
 *
 * @export
 * @class OpenWeatherMap
 */
export class OpenWeatherMap {
    private env: OpenWeatherMapEnv = new OpenWeatherMapEnv();
    private latlon: LatLon;

    constructor(latlon: LatLon) {
        this.latlon = latlon;
    }

    public getWeather(callback: CallbackType): void {
        axios({
            method: 'GET',
            url: this.env.url,
            params: { ...this.env.param, ...this.latlon }
        }).then(response => callback(response.data.list));
    }
}
