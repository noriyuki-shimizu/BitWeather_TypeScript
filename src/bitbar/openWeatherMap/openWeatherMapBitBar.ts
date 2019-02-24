import * as bitbar from 'bitbar';

export class OpenWeatherMapBitBar {
    private subMenuList: {text: string; color: string}[];
    private address: string;

    constructor(subMenuList: {text: string; color: string}[], address: string) {
        this.subMenuList = subMenuList;
        this.address = address;
    }

    public display(): void {
        bitbar([
            {
                text: '🌞',
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