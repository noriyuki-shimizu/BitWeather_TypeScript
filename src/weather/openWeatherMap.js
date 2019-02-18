"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var openWeatherMapEnv_1 = require("../systemEnv/openWeatherMapEnv");
var conditionCodes_1 = require("./parts/conditionCodes/conditionCodes");
var windDigree_1 = require("./parts/windDigree/windDigree");
var convertDate_1 = require("../date/convertDate");
var OpenWeatherMap = /** @class */ (function () {
    function OpenWeatherMap(lat, lon) {
        this.env = new openWeatherMapEnv_1.OpenWeatherMapEnv();
        this.env.param.lat = lat;
        this.env.param.lon = lon;
    }
    OpenWeatherMap.prototype.setTitleColor = function (titleColor) {
        this.titleColor = titleColor;
    };
    OpenWeatherMap.prototype.getWeather = function (displayList) {
        var _this = this;
        axios_1["default"]({
            method: 'GET',
            url: this.env.url,
            params: this.env.param
        }).then(function (response) {
            _this.weatherDataList = response.data.list;
            _this.convert(displayList);
        });
    };
    OpenWeatherMap.prototype.convert = function (displayList) {
        var _this = this;
        displayList.push(this.weatherDataList.map(function (weatherData) {
            var convertDate = new convertDate_1.ConvertDate(weatherData.dt_txt).getDate();
            var conditionCode = new conditionCodes_1.ConditionCodes().get(weatherData.weather[0].id);
            var digree = new windDigree_1.WindDigree().get(weatherData.wind.deg);
            return {
                text: convertDate.dateStr,
                color: _this.titleColor !== undefined ? _this.titleColor : 'black',
                submenu: [
                    {
                        text: convertDate.hourStr,
                        submenu: [
                            {
                                text: conditionCode.icon + " : " + conditionCode.meaning,
                                color: 'black'
                            },
                            {
                                text: "\u6C17\u6E29: " + weatherData.main.temp + "\u2103",
                                color: 'black'
                            },
                            {
                                text: "\u6700\u4F4E\u6C17\u6E29: " + weatherData.main.temp_min + "\u2103",
                                color: 'black'
                            },
                            {
                                text: "\u6700\u9AD8\u6C17\u6E29: " + weatherData.main.temp_max + "\u2103",
                                color: 'black'
                            },
                            {
                                text: "\u6E7F\u5EA6: " + weatherData.main.humidity + "%",
                                color: 'black'
                            },
                            {
                                text: "\u98A8: " + weatherData.wind.speed + "m(" + digree.windDigree + ")",
                                color: 'black'
                            }
                        ]
                    }
                ]
            };
        }));
    };
    return OpenWeatherMap;
}());
exports.OpenWeatherMap = OpenWeatherMap;
