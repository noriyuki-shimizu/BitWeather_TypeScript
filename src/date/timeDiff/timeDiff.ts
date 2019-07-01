/**
 * 時差に関するクラス。
 *
 * @export
 * @class TimeDiff
 */
export class TimeDiff {
    protected date: Date;

    public getDate(): Date {
        return this.date;
    }

    public isNowDate(): boolean {
        return new Date().getDate === this.date.getDate;
    }
}
