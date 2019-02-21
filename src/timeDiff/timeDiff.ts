
export class TimeDiff {
    private readonly weekChars: string[] = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'];
    
    protected date: Date;

    constructor(dateStr: string, timeDiff: number) {
        this.date = new Date(dateStr);

        this.date.setHours(this.date.getHours() + timeDiff);
    }

    public getDate(): Date {
        return this.date;
    }

    public getFormatDate(): string {
        const year = this.date.getFullYear();
        const month = this.date.getMonth() + 1;
        const date = this.date.getDate();
        
        const weekIndex = this.date.getDay();
        
        return `${year}年${month}月${date}日${this.getWeekChar(weekIndex)}`;
    }
    
    public getFormatHour(): string {
        const hour = this.date.getHours();
        return `${hour}時`;
    }

    private getWeekChar(index: number): string {
        return this.weekChars[index];
    }
}