import * as tokoro from 'tokoro';

import { Location } from './location'
import { TokoroEnv } from '../systemEnv/tokoroEnv';
import { CallbackType } from './callbackType';

/**
 * tokoroライブラリを用いた住所変換に関するクラス。
 *
 * @export
 * @class TokoroImpl
 * @implements {Location}
 */
export class TokoroImpl implements Location {
    private env: TokoroEnv = new TokoroEnv();
    
    constructor() { }

    public getLocation(callback: CallbackType): void {
        if(this.env.address === null) {
            return ;
        }

        for(var key in this.env.address) {
            const address = this.env.address[key];
            tokoro(this.env.address[key], code => {
                const latlon: {lat: number; lon: number} = {
                    lat: code[0],
                    lon: code[1]
                };

                callback(latlon, address);
            });
        }
    }
}