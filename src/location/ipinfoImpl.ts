import axios from 'axios';

import { Location } from './location';
import { IpinfoEnv } from './../systemEnv/ipinfoEnv';
import { CallbackType } from './callbackType';

/**
 * ipInfoに関するクラス。
 *
 * @export
 * @class IpinfoImpl
 * @implements {Location}
 */
export class IpinfoImpl implements Location {
    private env: IpinfoEnv = new IpinfoEnv();

    constructor() {}

    public getLocation(callback: CallbackType): void {
        axios({
            method: 'GET',
            url: this.env.requestUrl,
            params: { token: this.env.requestGetToken }
        })
            .then(response => {
                const { loc }: { loc: string } = response.data;
                const [lat, lon] = loc.split(',');

                callback({ lat, lon }, '現在地');
            })
            .catch((error: any) => {
                throw new Error(error);
            });
    }
}
