import * as bitbar from 'bitbar';

/**
 * bitbarを用いた天気予報の表示に関するクラス。
 *
 * @export
 * @class OpenWeatherMapBitBar
 */
export class OpenWeatherMapBitBar {
    private subMenuList: BitBarSubMenu[];
    private address: string;

    constructor(subMenuList: BitBarSubMenu[], address: string) {
        this.subMenuList = subMenuList;
        this.address = address;
    }

    /**
     * 天気予報を表示します。
     *
     * @memberof OpenWeatherMapBitBar
     */
    public display(): void {
        bitbar([
            {
                text: '☀️',
                dropdown: false
            },
            bitbar.separator,
            {
                text: this.address,
                color: 'black',
                submenu: this.subMenuList
            }
        ]);
    }
}
