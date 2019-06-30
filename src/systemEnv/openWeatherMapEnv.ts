import { Env } from './env';

type Param = {
    cnt: number;
    units: string;
    mode: string;
    appid: string;
};

/**
 * OpenWeatherMapの設定ファイル読み込みに関するクラス。
 *
 * @export
 * @class OpenWeatherMapEnv
 * @extends {Env}
 */
export class OpenWeatherMapEnv extends Env {
    public readonly url: string;
    public readonly param: Param;

    constructor() {
        super();
        this.url = super.load('openweathermap.request.url');
        this.param = super.load('openweathermap.request.get');
    }
    public toString(): void {
        console.log('url: ' + this.url);
        console.log('cnt: ' + this.param.cnt);
        console.log('units: ' + this.param.units);
        console.log('mode: ' + this.param.mode);
        console.log('appid: ' + this.param.appid);
    }
}
