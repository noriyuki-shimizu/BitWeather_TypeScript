"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const ipinfoEnv_1 = require("../../systemEnv/ipinfoEnv");
;
class IpinfoImpl {
    constructor() {
        this.env = new ipinfoEnv_1.IpinfoEnv();
    }
    getLocation(callback) {
        axios_1.default({
            method: 'GET',
            url: this.env.requestUrl,
            params: { token: this.env.requestGetToken }
        }).then(response => callback(response.data));
    }
}
exports.IpinfoImpl = IpinfoImpl;
//# sourceMappingURL=ipinfoImpl.js.map