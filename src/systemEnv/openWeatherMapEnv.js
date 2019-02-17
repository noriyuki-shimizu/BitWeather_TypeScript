"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
class OpenWeatherMapEnv extends env_1.Env {
    constructor() {
        super();
        this.url = super.load('ipinfo.request.url');
        this.param = {
            cnt: super.load('openweathermap.request.get.cnt'),
            units: super.load('openweathermap.request.get.units'),
            mode: super.load('openweathermap.request.get.mode'),
            appid: super.load('openweathermap.request.get.appID')
        };
    }
    toString() {
        console.log('url: ' + this.url);
        console.log('cnt: ' + this.param.cnt);
        console.log('units: ' + this.param.units);
        console.log('mode: ' + this.param.mode);
        console.log('appid: ' + this.param.appid);
    }
}
exports.OpenWeatherMapEnv = OpenWeatherMapEnv;
//# sourceMappingURL=openWeatherMapEnv.js.map