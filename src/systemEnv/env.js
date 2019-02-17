"use strict";
exports.__esModule = true;
var fs = require("fs");
var yaml = require("yaml");
var Env = /** @class */ (function () {
    function Env() {
        var appYml = fs.readFileSync(__dirname + '/../../config/app.yaml', 'utf8');
        this.yamlPropertys = yaml.parse(appYml);
    }
    Env.prototype.load = function (key) {
        var filler = '.';
        if (key.indexOf(filler) >= 0) {
            var keyList = key.split(filler);
            return this.scan(this.yamlPropertys, keyList.values());
        }
        return this.yamlPropertys[key];
    };
    Env.prototype.scan = function (yamlProperty, keyIterator) {
        var next = keyIterator.next();
        if (next.done) {
            return yamlProperty;
        }
        return this.scan(yamlProperty[next.value], keyIterator);
    };
    return Env;
}());
exports.Env = Env;
