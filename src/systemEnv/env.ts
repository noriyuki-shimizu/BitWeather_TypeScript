import * as fs from 'fs';
import * as yaml from 'yaml';

export class Env {

	private yamlPropertys: {ipinfo: any; tokoro: any; openweathermap: any;};

	constructor() {
		const appYml = fs.readFileSync(__dirname + '/../../config/app.yaml', 'utf8');

        	this.yamlPropertys = yaml.parse(appYml);	
	}
	protected load(key: string):any {
		const filler:string = '.';
		
		if(key.indexOf(filler) >= 0) {
                    var keyList:string[]  = key.split(filler);

                    return this.scan(keyList);
                }

                return this.yamlPropertys[key];
	}
	protected scan(keyList: string[]): any {
		var ymlProperty:any = Object.assign({}, this.yamlPropertys);

                keyList.forEach((key, index) => {
                    ymlProperty = ymlProperty[key];
                });

                return ymlProperty;		
	}
}
