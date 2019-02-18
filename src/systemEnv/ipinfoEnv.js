"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var env_1 = require("./env");
var IpinfoEnv = /** @class */ (function (_super) {
    __extends(IpinfoEnv, _super);
    function IpinfoEnv() {
        var _this = _super.call(this) || this;
        _this.requestUrl = _super.prototype.load.call(_this, 'ipinfo.request.url');
        _this.requestGetToken = _super.prototype.load.call(_this, 'ipinfo.request.get.token');
        return _this;
    }
    IpinfoEnv.prototype.toString = function () {
        console.log('requestUrl: ' + this.requestUrl);
        console.log('getToken: ' + this.requestGetToken);
    };
    return IpinfoEnv;
}(env_1.Env));
exports.IpinfoEnv = IpinfoEnv;
