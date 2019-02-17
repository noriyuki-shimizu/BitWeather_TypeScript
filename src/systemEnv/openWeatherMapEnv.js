"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var env_1 = require("./env");
var OpenWeatherMapEnv = /** @class */ (function (_super) {
    __extends(OpenWeatherMapEnv, _super);
    function OpenWeatherMapEnv() {
        var _this = _super.call(this) || this;
        _this.url = _super.prototype.load.call(_this, 'ipinfo.request.url');
        _this.param = {
            cnt: _super.prototype.load.call(_this, 'openweathermap.request.get.cnt'),
            units: _super.prototype.load.call(_this, 'openweathermap.request.get.units'),
            mode: _super.prototype.load.call(_this, 'openweathermap.request.get.mode'),
            appid: _super.prototype.load.call(_this, 'openweathermap.request.get.appID')
        };
        return _this;
    }
    OpenWeatherMapEnv.prototype.toString = function () {
        console.log('url: ' + this.url);
        console.log('cnt: ' + this.param.cnt);
        console.log('units: ' + this.param.units);
        console.log('mode: ' + this.param.mode);
        console.log('appid: ' + this.param.appid);
    };
    return OpenWeatherMapEnv;
}(env_1.Env));
exports.OpenWeatherMapEnv = OpenWeatherMapEnv;
