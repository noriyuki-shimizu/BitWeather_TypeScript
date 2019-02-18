#!/usr/local/bin/node
"use strict";
exports.__esModule = true;
var ipinfoImpl_1 = require("./src/location/ipinfo/ipinfoImpl");
var tokoroImpl_1 = require("./src/location/tokoro/tokoroImpl");
var openWeatherMap_1 = require("./src/weather/openWeatherMap");
var locationList = new Array();
locationList.push(new ipinfoImpl_1.IpinfoImpl());
locationList.push(new tokoroImpl_1.TokoroImpl());
var displayList = new Array();
displayList.push({
    text: '🌞'
});
locationList.forEach(function (location) {
    location.getLocation(function (latlon) {
        var lat = latlon[0];
        var lon = latlon[1];
        var openWeatherMap = new openWeatherMap_1.OpenWeatherMap(lat, lon);
        openWeatherMap.getWeather(displayList);
    });
});
