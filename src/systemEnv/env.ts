import * as fs from 'fs';
import * as yaml from 'yaml';

/**
 * 設定ファイル読み込みに関するクラス。
 *
 * @export
 * @class Env
 */
export class Env {
    private yamlPropertys: { ipinfo: any; tokoro: any; openweathermap: any };

    constructor() {
        const appYml: string = fs.readFileSync(
            `${__dirname}/../../config/app.yaml`,
            'utf8'
        );

        this.yamlPropertys = yaml.parse(appYml);
    }
    protected load(key: string): any {
        const filler: string = '.';

        if (key.indexOf(filler) >= 0) {
            const keyList: string[] = key.split(filler);

            return this.scan(this.yamlPropertys, keyList.values());
        }

        return this.yamlPropertys[key];
    }
    private scan(yamlProperty: any, keyIterator: any): string | number {
        const { value, done }: NextIterator = keyIterator.next();

        return done
            ? yamlProperty
            : this.scan(yamlProperty[value], keyIterator);
    }
}
