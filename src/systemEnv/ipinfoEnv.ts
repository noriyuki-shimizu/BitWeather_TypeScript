import { Env } from './env';

/**
 * ipInfoでの設定ファイル読み込みに関するクラス。
 *
 * @export
 * @class IpinfoEnv
 * @extends {Env}
 */
export class IpinfoEnv extends Env {
    public readonly requestUrl: string;
    public readonly requestGetToken: string;

    constructor() {
        super();
        this.requestUrl = super.load('ipinfo.request.url');
        this.requestGetToken = super.load('ipinfo.request.get.token');
    }
    public toString(): void {
        console.log('requestUrl: ' + this.requestUrl);
        console.log('getToken: ' + this.requestGetToken);
    }
}
