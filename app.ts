#!/usr/local/bin/node

import { Location } from './src/location/location';
import { IpinfoImpl } from './src/location/ipinfo/ipinfoImpl';
import { TokoroImpl } from './src/location/tokoro/tokoroImpl';
import { OpenWeatherMap } from './src/weather/openWeatherMap';

var locationList: Location[] = new Array();

locationList.push(new IpinfoImpl());
locationList.push(new TokoroImpl());

var displayList: any[] = new Array();
displayList.push({
    text: '🌞'
});

locationList.forEach(location => {
    location.getLocation(latlon => {
        const lat = latlon[0];
        const lon = latlon[1];

        const openWeatherMap: OpenWeatherMap = new OpenWeatherMap(lat, lon);

        openWeatherMap.getWeather(displayList);
    });
});

