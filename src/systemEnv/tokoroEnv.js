"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./env");
class TokoroEnv extends env_1.Env {
    constructor() {
        super();
        this.address = super.load('tokoro.address');
    }
    toString() {
        console.log('address: ' + this.address);
    }
}
exports.TokoroEnv = TokoroEnv;
//# sourceMappingURL=tokoroEnv.js.map