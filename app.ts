#!/usr/local/bin/node

import { Location } from './src/location/location';
import { IpinfoImpl } from './src/location/ipinfo/ipinfoImpl';
import { TokoroImpl } from './src/location/tokoro/tokoroImpl';
import { OpenWeatherMap } from './src/weather/openWeatherMap';
import { Convert } from './src/convert/convert';
import { OpenWeatherMapConvert } from './src/convert/openWeatherMap/openWeatherMapConvert';
import { OpenWeatherMapBitBar } from './src/bitbar/openWeatherMap/openWeatherMapBitBar';

var locationList: Location[] = new Array();

locationList.push(new IpinfoImpl());
locationList.push(new TokoroImpl());

locationList.forEach(location => {
    location.getLocation((latlon, address) => {
        const openWeatherMap: OpenWeatherMap = new OpenWeatherMap(latlon, address);

        openWeatherMap.getWeather(weatherDataList => {
            const openWeatherMapConvert: Convert = new OpenWeatherMapConvert(weatherDataList);
            const convertWeatherData: {text: string; color: string; submenu: []}[] = openWeatherMapConvert.convert();

            const openweatherMapBitBar: OpenWeatherMapBitBar = new OpenWeatherMapBitBar(convertWeatherData, address);
            openweatherMapBitBar.display();
        });
    });
});

