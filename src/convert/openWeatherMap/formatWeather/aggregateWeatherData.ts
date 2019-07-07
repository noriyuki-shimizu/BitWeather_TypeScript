import { ConditionCodes } from '../../../weather/parts/conditionCodes';
import { WindDigree } from '../../../weather/parts/windDigree';

/**
 * 取得された天気データの集計に関するクラス。
 *
 * @export
 * @class AggregateWeatherData
 */
export class AggregateWeatherData {
    private weatherCnt: any = {};
    private tempMaxList: number[] = [];
    private tempMinList: number[] = [];
    private humidityList: number[] = [];
    private windDegList: number[] = [];
    private windSpeedList: number[] = [];
    private rainList: number[] = [];
    private snowList: number[] = [];

    constructor(dateWeatherList: any[]) {
        dateWeatherList.forEach(dateWeather => {
            const key: number = dateWeather.weather[0].id;
            this.weatherCnt[key] = this.weatherCnt[key]
                ? this.weatherCnt[key] + 1
                : 1;

            this.tempMaxList.push(dateWeather.main.temp_max);
            this.tempMinList.push(dateWeather.main.temp_min);
            this.humidityList.push(dateWeather.main.humidity);
            this.windDegList.push(dateWeather.wind.deg);
            this.windSpeedList.push(dateWeather.wind.speed);
            this.rainList.push(dateWeather.rain ? dateWeather.rain['3h'] : 0);
            this.snowList.push(dateWeather.snow ? dateWeather.snow['3h'] : 0);
        });
    }

    public getWeather(): string {
        let mostWeatherIdCnt: number = 0;
        let mostWeatherId: number;

        Object.keys(this.weatherCnt).forEach(key => {
            if (this.weatherCnt[key] > mostWeatherIdCnt) {
                mostWeatherIdCnt = this.weatherCnt[key];
                mostWeatherId = Number(key);
            }
        });

        const { icon, meaning }: ConditionCode = new ConditionCodes().get(
            mostWeatherId
        );
        return `${icon} ${meaning}`;
    }

    public getFormatTodayTemp(todayTemp: number): string {
        return `現在の気温：${todayTemp}℃`;
    }

    public getTempMax(): string {
        return `最高気温：${Math.max.apply(null, this.tempMaxList)}℃`;
    }

    public getTempMin(): string {
        return `最低気温：${Math.min.apply(null, this.tempMinList)}℃`;
    }

    public getHumidity(): string {
        const humidityAve: number = this.average(this.humidityList);
        return `湿度：${this.orgRound(humidityAve, 100)} %`;
    }

    public getWind(): string {
        const windSpeed = this.average(this.windSpeedList);
        const windDeg = this.average(this.windDegList);
        const { windDigree }: { windDigree: string } = new WindDigree().get(
            windDeg
        );
        return `風： ${this.orgRound(windSpeed, 100)}m(${windDigree})`;
    }

    public isRainEmpty(): boolean {
        return this.sum(this.rainList) === 0;
    }

    public getRain(): string {
        return `過去3時間の平均雨量：${this.orgRound(
            this.average(this.rainList),
            100
        )} mm`;
    }

    public isSnowEmpty(): boolean {
        return this.sum(this.snowList) === 0;
    }

    public getSnow(): string {
        return `過去3時間の平均積雪量：${this.orgRound(
            this.average(this.snowList),
            100
        )}`;
    }

    private sum(numList: number[]): number {
        return numList.reduce((prev, current) => prev + current);
    }

    private average(numList: number[]): number {
        return this.sum(numList) / numList.length;
    }

    private orgRound(value: number, base: number): number {
        return Math.round(value * base) / base;
    }
}
