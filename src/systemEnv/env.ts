import * as fs from 'fs';
import * as yaml from 'yaml';

export class Env {

	private yamlPropertys: {ipinfo: any; tokoro: any; openweathermap: any;};

	constructor() {
		const appYml: string = fs.readFileSync(__dirname + '/../../config/app.yaml', 'utf8');

        this.yamlPropertys = yaml.parse(appYml);	
	}
	protected load(key: string): any {
		const filler:string = '.';
		
		if(key.indexOf(filler) >= 0) {
            var keyList:string[]  = key.split(filler);

            return this.scan(this.yamlPropertys, keyList.values());
        }

        return this.yamlPropertys[key];
	}
	protected scan(yamlProperty: any, keyIterator: any): any {
		var next: {value: number; done: boolean} = keyIterator.next();

		if(next.done) {
			return yamlProperty;
		}

		return this.scan(yamlProperty[next.value], keyIterator);	
	}
}
