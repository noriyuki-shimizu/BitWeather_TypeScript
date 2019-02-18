import axios from 'axios'

import { Location } from '../location'
import { IpinfoEnv } from '../../systemEnv/ipinfoEnv';

interface CallbackType{(location :any) :void};

export class IpinfoImpl implements Location {
    private env: IpinfoEnv = new IpinfoEnv();
    
    constructor() { }

    public getLocation(callback: CallbackType): void {
        axios({
            method : 'GET',
            url    : this.env.requestUrl,
            params : { token : this.env.requestGetToken }
        }).then(response => {
            const loc: string = response.data.loc;
            
            callback(loc.split(','));
        });
    }
}

