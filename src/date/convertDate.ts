
export class ConvertDate {
    private readonly weekChars: string[] = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'];
    private readonly greenwich: number = 9;
    private date: Date;
    
    constructor(dateStr: string) {
        this.date = new Date(dateStr);
        this.setGreenwichHour();
    }

    private setGreenwichHour(): void {
        this.date.setHours(this.date.getHours() + this.greenwich);
    }

    private getWeekChar(index: number): string {
        return this.weekChars[index];
    }

    public getDate(): {dateStr: string; hourStr: string} {
        var year = this.date.getFullYear();
        var month = this.date.getMonth() + 1;
        var date = this.date.getDate();

        var hour = this.date.getHours();

        var weekIndex = this.date.getDay();
        
        return {
            dateStr: `${year}年${month}月${date}日${this.getWeekChar(weekIndex)}`,
            hourStr: `${hour}時`
        };
    }
}