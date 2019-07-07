import * as bitbar from 'bitbar';

type SubMenu = {
    text: string;
    color: string;
};

/**
 * bitbarを用いた天気予報の表示に関するクラス。
 *
 * @export
 * @class OpenWeatherMapBitBar
 */
export class OpenWeatherMapBitBar {
    private subMenuList: SubMenu[];
    private address: string;

    constructor(subMenuList: SubMenu[], address: string) {
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
