
export abstract class TimeDiff {
    protected date: Date;

    constructor(dateStr: string, timeDiff: number) {
        this.date = new Date(dateStr);

        this.date.setHours(this.date.getHours() + timeDiff);
    }

    public getDate(): Date {
        return this.date;
    }

    public isNowDate(): boolean {
        return new Date().getDate === this.date.getDate;
    }

}