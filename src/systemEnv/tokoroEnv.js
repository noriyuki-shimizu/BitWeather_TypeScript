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
var TokoroEnv = /** @class */ (function (_super) {
    __extends(TokoroEnv, _super);
    function TokoroEnv() {
        var _this = _super.call(this) || this;
        _this.address = _super.prototype.load.call(_this, 'tokoro.address');
        return _this;
    }
    TokoroEnv.prototype.toString = function () {
        console.log('address: ' + this.address);
    };
    return TokoroEnv;
}(env_1.Env));
exports.TokoroEnv = TokoroEnv;
