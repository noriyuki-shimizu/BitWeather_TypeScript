import * as dateAndTime from 'date-and-time';

/**
 * 日時のフォーマットに関するクラス。
 *
 * @export
 * @class Format
 */
export class Format {
  private formatStr: string;

  constructor(formatStr: string) {
    this.formatStr = formatStr;
  }

  public getFormatDate(date: Date): string {
    const formatDate = dateAndTime.format(date, this.formatStr);

    return formatDate;
  }

  public getParseDate(formatDate: string): Date {
    return dateAndTime.parse(formatDate, this.formatStr);
  }
}
