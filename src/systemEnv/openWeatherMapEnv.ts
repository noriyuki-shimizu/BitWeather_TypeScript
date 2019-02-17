import { Env } from "./env";

export class OpenWeatherMapEnv extends Env {
	public readonly url:string;
	public readonly param:{
		cnt:number;
                units:string;
                mode:string;
                appid:string;
	};
        
        constructor() {
                super();
                this.url = super.load('ipinfo.request.url');
		this.param = {
			cnt  : super.load('openweathermap.request.get.cnt'),
			units: super.load('openweathermap.request.get.units'),
			mode : super.load('openweathermap.request.get.mode'),
			appid: super.load('openweathermap.request.get.appID')
		};
        }       
        public toString(): void {
                console.log('url: ' + this.url);
		console.log('cnt: ' + this.param.cnt);
		console.log('units: ' + this.param.units);
		console.log('mode: ' + this.param.mode);
		console.log('appid: ' + this.param.appid);
        }       
}    
