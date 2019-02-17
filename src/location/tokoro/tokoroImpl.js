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
            console.log(this.env.address[key]);
            tokoro(this.env.address[key], code => {
                callback(code);
            });
        }
    }
}
exports.TokoroImpl = TokoroImpl;
//# sourceMappingURL=tokoroImpl.js.map