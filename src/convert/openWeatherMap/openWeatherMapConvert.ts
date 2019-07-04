import { Convert } from '../convert';
import { Greenwich } from '../../date/timeDiff/greenwith/greenwich';
import { Format } from '../../date/format/format';
import { AggregateWeatherData } from './formatWeather/aggregateWeatherData';

type ConvertData = {
    text: string;
    color: string;
    submenu: any;
};

type SubmenuData = {
    text: string;
    color: string;
};

/**
 * APIから取得されたデータを変換するクラス。
 *
 * @export
 * @class OpenWeatherMapConvert
 * @implements {Convert}
 */
export class OpenWeatherMapConvert implements Convert {
    private weatherData: any[];

    constructor(weatherDataList: any[]) {
        const format: Format = new Format('YYYY/MM/DD (ddd)');

        const timeDiff: Greenwich = new Greenwich();
        const groupingList: any[] = [];
        weatherDataList.forEach(weatherData => {
            timeDiff.of(weatherData.dt_txt);
            const formatDate: string = format.getFormatDate(timeDiff.getDate());

            if (!groupingList[formatDate]) {
                groupingList[formatDate] = [];
            }
            groupingList[formatDate].push(weatherData);
        });

        this.weatherData = groupingList;
    }

    public convert(): { text: string; color: string; submenu: [] }[] {
        const groupKeyList: string[] = Object.keys(this.weatherData);

        const convertList: ConvertData[] = [];

        groupKeyList.map((groupKey, index) => {
            const convertWeatherData: AggregateWeatherData = new AggregateWeatherData(
                this.weatherData[groupKey]
            );

            const submenu: SubmenuData[] = [
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

            if (index === 0) {
                const [weather] = this.weatherData[groupKey];
                const { temp }: { temp: number } = weather.main;

                submenu.splice(1, 0, {
                    text: convertWeatherData.getFormatTodayTemp(temp),
                    color: 'black'
                });
            }

            if (!convertWeatherData.isRainEmpty()) {
                submenu.push({
                    text: convertWeatherData.getRain(),
                    color: 'black'
                });
            }

            if (!convertWeatherData.isSnowEmpty()) {
                submenu.push({
                    text: convertWeatherData.getSnow(),
                    color: 'black'
                });
            }

            convertList.push({
                submenu,
                text: groupKey,
                color: 'black'
            });
        });

        return convertList;
    }
}
