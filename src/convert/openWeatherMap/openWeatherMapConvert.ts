import { Convert } from '../convert';
import { TimeDiff } from '../../date/timeDiff/timeDiff';
import { Greenwich } from '../../date/timeDiff/greenwith/greenwich'
import { Format } from '../../date/format/format';
import { AggregateWeatherData } from './aggregateWeatherData';

/**
 * APIから取得されたデータを変換するクラス。
 *
 * @export
 * @class OpenWeatherMapConvert
 * @implements {Convert}
 */
export class OpenWeatherMapConvert implements Convert {
    private weatherDataList: any[];

    private readonly formatStr: string = 'YYYY/MM/DD (ddd)';

    constructor(weatherDataList: any[]) {
        const format: Format = new Format(this.formatStr);

        var groupingList: any[] = [];
        weatherDataList.forEach(weatherData => {
            const greenwich: TimeDiff = new Greenwich(weatherData.dt_txt);
            const formatDate: string = format.getFormatDate(greenwich.getDate());

            if(groupingList[formatDate] === undefined) {
                groupingList[formatDate] = [];
            }
            groupingList[formatDate].push(weatherData);
        });

        this.weatherDataList = groupingList;
    }

    public convert(): {text: string; color: string; submenu: []}[] {
        const groupKeyList: string[] = Object.keys(this.weatherDataList);

        var convertList: {text: string; color: string; submenu: any}[] = [];

        groupKeyList.forEach((groupKey, index) => {
            var convertWeatherData: AggregateWeatherData = new AggregateWeatherData(this.weatherDataList[groupKey]);

            var submenu: {text: string; color: string}[];

            submenu = [
                {
                    text: convertWeatherData.getWeather(),
                    color: 'black'
                },
                {
                    text: convertWeatherData.getTempMin(),
                    color: 'black'
                },
                {
                    text: convertWeatherData.getTempMax(),
                    color: 'black'
                },
                {
                    text: convertWeatherData.getHumidity(),
                    color: 'black'
                },
                {
                    text: convertWeatherData.getWind(),
                    color: 'black'
                }
            ];

            if(index === 0) {
                const todayWeatherDataList = this.weatherDataList[groupKey];
                const todayTemp: number = todayWeatherDataList[0].main.temp;

                submenu.splice(1, 0, {
                    text: convertWeatherData.getFormatTodayTemp(todayTemp),
                    color: 'black'
                });
            }

            if(!convertWeatherData.isRainEmpty()) {
                submenu.push({
                    text: convertWeatherData.getRain(),
                    color: 'black'
                });
            }

            if(!convertWeatherData.isSnowEmpty()) {
                submenu.push({
                    text: convertWeatherData.getSnow(),
                    color: 'black'
                });
            }

            convertList.push(
                {
                    text: groupKey,
                    color: 'black',
                    submenu: submenu
                }
            );
        });

        return convertList;
    }

}