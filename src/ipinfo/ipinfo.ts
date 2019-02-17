import axios from 'axios'

import { IpinfoEnv } from './../systemEnv/ipinfoEnv';

interface CallbackType{(location :any) :void};

export class Ipinfo {
    private env: IpinfoEnv = new IpinfoEnv();
    
    constructor() { }

    public getLocation(callback: CallbackType): void {
        axios({
            method : 'GET',
            url    : this.env.requestUrl,
            params : { token : this.env.requestGetToken }
        }).then(response => callback(response.data));
    }
}

