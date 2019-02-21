import { Convert } from '../convert';
import { ConditionCodes } from '../../weather/parts/conditionCodes/conditionCodes';
import { WindDigree } from '../../weather/parts/windDigree/windDigree';
import { TimeDiff } from '../../timeDiff/timeDiff';
import { Greenwich } from '../../timeDiff/greenwith/greenwich'
import { ConvertWeatherData } from './convertWeatherData';

export class OpenWeatherMapConvert implements Convert {
    private address: string;
    private weatherDataList: any[];

    constructor(weatherDataList: any[], address: string) {
        this.weatherDataList = weatherDataList;
        this.address = address;
    }

    public convert(): ConvertWeatherData[] {

        var addressGroup: any = this.grouping();

        const groupKeyList: string[] = Object.keys(addressGroup);
        var convertWeatherDataList: ConvertWeatherData[] = [];

        groupKeyList.map(groupKey => {
            var convertWeatherData: ConvertWeatherData = new ConvertWeatherData();

            convertWeatherData.address = groupKey;
            
            var weatherCnt: any = {};
            var tempMaxList: number[] = [];
            var tempMinList: number[] = [];
            var humidityList: number[] = [];
            var windDegList: number[] = [];
            var windSpeedList: number[] = [];
            var rainList: number[] = [];
            var snowList: number[] = [];
            
            const addressWeatherList = addressGroup[groupKey].list;
            addressWeatherList.forEach(addressWeather => {
                var greenwich: TimeDiff = new Greenwich(addressWeather.dt_txt);
                convertWeatherData.date = greenwich.getFormatDate();

                if(convertWeatherData.temp === null) {
                    convertWeatherData.temp = `現在の気温：${addressWeather.main.temp}℃`
                }

                var key: number = addressWeather.weather[0].id;
                weatherCnt[key] = weatherCnt[key] !== undefined ? weatherCnt[key] + 1 : 1;

                tempMaxList.push(addressWeather.main.temp_max);
                tempMinList.push(addressWeather.main.temp_min);
                humidityList.push(addressWeather.main.humidity);
                windDegList.push(addressWeather.wind.deg);
                windSpeedList.push(addressWeather.wind.speed);
                rainList.push(addressWeather.rain !== undefined ? addressWeather.rain['3h'] : 0);
                snowList.push(addressWeather.snow !== undefined ? addressWeather.snow['3h'] : 0);
                
            });

            const conditionCode = this.getMostFrequentWeather(weatherCnt);
            convertWeatherData.weather = `${conditionCode.icon} ${conditionCode.meaning}`;

            convertWeatherData.tempMax = `最高気温：${Math.max.apply(null, tempMaxList)}℃`;
            convertWeatherData.tempMin = `最低気温：${Math.min.apply(null, tempMinList)}℃`;
            convertWeatherData.humidity = `湿度：${this.average(humidityList)} %`;
            
            var windSpeed = this.average(windSpeedList);
            var windDeg = this.average(windDegList);
            const digree: {f:number; t: number; windDigree: string} = new WindDigree().get(windDeg);
            convertWeatherData.wind = `風： ${windSpeed}m(${digree.windDigree})`;

            convertWeatherData.rain = ``;
            if(this.sum(rainList) > 0) {
                convertWeatherData.rain = `過去3時間の平均雨量：${this.average(rainList)} mm`;
            }

            convertWeatherData.snow = ``;
            if(this.sum(snowList) > 0) {
                convertWeatherData.snow = `過去3時間の平均積雪量：${this.average(snowList)}`;
            }

            convertWeatherDataList.push(convertWeatherData);
        });
        return convertWeatherDataList;
    }

    private grouping(): any {
        var addressGroup: any = {};
        this.weatherDataList.forEach(weatherData => {
            if(addressGroup[this.address] === undefined) {
                addressGroup[this.address] = {
                    list: []
                };
            }
            addressGroup[this.address].list.push(weatherData);
        });
        console.log(addressGroup);

        return addressGroup;
    }

    private getMostFrequentWeather(weatherCnt: any): {id: number; meaning: string; icon: string} {
        var mostWeatherIdCnt: number = 0;
            var mostWeatherId: number;
            for (var key in weatherCnt) {
                if(weatherCnt[key] > mostWeatherIdCnt) {
                    mostWeatherIdCnt = weatherCnt[key];
                    mostWeatherId = Number(key);
                }
            }
            return new ConditionCodes().get(mostWeatherId);
    }

    private sum(numList: number[]): number {
        return numList.reduce((prev, current) => {
            return prev+current;
        });
    }

    private average(numList: number[]): number {
        return this.sum(numList) / numList.length;
    }
}