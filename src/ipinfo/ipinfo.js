"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var ipinfoEnv_1 = require("./../systemEnv/ipinfoEnv");
;
var Ipinfo = /** @class */ (function () {
    function Ipinfo() {
        this.env = new ipinfoEnv_1.IpinfoEnv();
    }
    Ipinfo.prototype.getLocation = function (callback) {
        axios_1["default"]({
            method: 'GET',
            url: this.env.requestUrl,
            params: { token: this.env.requestGetToken }
        }).then(function (response) { return callback(response.data); });
    };
    return Ipinfo;
}());
exports.Ipinfo = Ipinfo;
