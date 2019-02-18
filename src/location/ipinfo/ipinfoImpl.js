"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var ipinfoEnv_1 = require("../../systemEnv/ipinfoEnv");
;
var IpinfoImpl = /** @class */ (function () {
    function IpinfoImpl() {
        this.env = new ipinfoEnv_1.IpinfoEnv();
    }
    IpinfoImpl.prototype.getLocation = function (callback) {
        axios_1["default"]({
            method: 'GET',
            url: this.env.requestUrl,
            params: { token: this.env.requestGetToken }
        }).then(function (response) {
            var loc = response.data.loc;
            callback(loc.split(','));
        });
    };
    return IpinfoImpl;
}());
exports.IpinfoImpl = IpinfoImpl;
