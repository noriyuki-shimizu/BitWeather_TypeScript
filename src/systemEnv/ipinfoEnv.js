"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
class IpinfoEnv extends env_1.Env {
    constructor() {
        super();
        this.requestUrl = super.load('ipinfo.request.url');
        this.requestGetToken = super.load('ipinfo.request.get.token');
    }
    toString() {
        console.log('requestUrl: ' + this.requestUrl);
        console.log('getToken: ' + this.requestGetToken);
    }
}
exports.IpinfoEnv = IpinfoEnv;
//# sourceMappingURL=ipinfoEnv.js.map