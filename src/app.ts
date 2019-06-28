#!/usr/local/bin/node

import { Location } from './location/location';
import { IpinfoImpl } from './location/ipinfoImpl';
import { TokoroImpl } from './location/tokoroImpl';
import { OpenWeatherMap } from './weather/openWeatherMap';
import { Convert } from './convert/convert';
import { OpenWeatherMapConvert } from './convert/openWeatherMap/openWeatherMapConvert';
import { OpenWeatherMapBitBar } from './bitbar/openWeatherMapBitBar';

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

