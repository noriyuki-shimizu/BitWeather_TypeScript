import axios from 'axios'

import { Location } from '../location'
import { IpinfoEnv } from '../../systemEnv/ipinfo/ipinfoEnv';

interface CallbackType{(latlon: {lat: string; lon: string}, address: string) :void};

/**
 * ipInfoに関するクラス。
 *
 * @export
 * @class IpinfoImpl
 * @implements {Location}
 */
export class IpinfoImpl implements Location {
    private env: IpinfoEnv = new IpinfoEnv();
    
    constructor() { }

    public getLocation(callback: CallbackType): void {
        axios({
            method : 'GET',
            url    : this.env.requestUrl,
            params : { token : this.env.requestGetToken }
        }).then(response => {
            const location: string = response.data.loc;
            const latlonList: string[] = location.split(',');

            const latlon: {lat: string; lon: string} = {
                lat: latlonList[0],
                lon: latlonList[1]
            }
            
            callback(latlon, '現在地');
        });
    }
}

