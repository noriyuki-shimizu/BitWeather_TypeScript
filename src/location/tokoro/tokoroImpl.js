"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokoro = require("tokoro");
const tokoroEnv_1 = require("../../systemEnv/tokoroEnv");
;
class TokoroImpl {
    constructor() {
        this.env = new tokoroEnv_1.TokoroEnv();
    }
    getLocation(callback) {
        if (this.env.address === null) {
            return;
        }
        for (var key in this.env.address) {
            tokoro(this.env.address[key], code => {
                const latlon = {
                    lat: code[0],
                    lon: code[1]
                };
                callback(latlon, this.env.address[key]);
            });
        }
    }
}
exports.TokoroImpl = TokoroImpl;
//# sourceMappingURL=tokoroImpl.js.map