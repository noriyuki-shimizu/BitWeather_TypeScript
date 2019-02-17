"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const yaml = require("yaml");
class Env {
    constructor() {
        const appYml = fs.readFileSync(__dirname + '/../../config/app.yaml', 'utf8');
        this.yamlPropertys = yaml.parse(appYml);
    }
    load(key) {
        const filler = '.';
        if (key.indexOf(filler) >= 0) {
            var keyList = key.split(filler);
            return this.scan(this.yamlPropertys, keyList.values());
        }
        return this.yamlPropertys[key];
    }
    scan(yamlProperty, keyIterator) {
        var next = keyIterator.next();
        if (next.done) {
            return yamlProperty;
        }
        return this.scan(yamlProperty[next.value], keyIterator);
    }
}
exports.Env = Env;
//# sourceMappingURL=env.js.map