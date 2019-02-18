"use strict";
exports.__esModule = true;
var tokoro = require("tokoro");
var tokoroEnv_1 = require("../../systemEnv/tokoroEnv");
;
var TokoroImpl = /** @class */ (function () {
    function TokoroImpl() {
        this.env = new tokoroEnv_1.TokoroEnv();
    }
    TokoroImpl.prototype.getLocation = function (callback) {
        if (this.env.address === null) {
            return;
        }
        for (var key in this.env.address) {
            tokoro(this.env.address[key], function (code) {
                callback(code);
            });
        }
    };
    return TokoroImpl;
}());
exports.TokoroImpl = TokoroImpl;
