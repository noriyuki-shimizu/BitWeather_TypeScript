import * as tokoro from 'tokoro';

import { Location } from './location';
import { TokoroEnv } from '../systemEnv/tokoroEnv';

/**
 * tokoroライブラリを用いた住所変換に関するクラス。
 *
 * @export
 * @class TokoroImpl
 * @implements {Location}
 */
export class TokoroImpl implements Location {
    private env: TokoroEnv = new TokoroEnv();

    constructor() {}

    public getLocation(callback: LocationCallbackType): void {
        if (this.env.address === null) {
            return;
        }

        for (const key in this.env.address) {
            const address = this.env.address[key];
            tokoro(this.env.address[key], ([lat, lon]) =>
                callback({ lat, lon }, address)
            );
        }
    }
}
