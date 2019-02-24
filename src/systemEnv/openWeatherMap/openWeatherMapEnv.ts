import { Env } from "../env";

export class OpenWeatherMapEnv extends Env {
	public readonly url:string;
	public readonly param:{
		lat   : number | string;
		lon   : number | string;
		cnt   : number;
                units : string;
                mode  : string;
                appid : string;
	};
        
        constructor() {
                super();
                this.url = super.load('openweathermap.request.url');
		this.param = {
			lat  : null,
			lon  : null,
			cnt  : super.load('openweathermap.request.get.cnt'),
			units: super.load('openweathermap.request.get.units'),
			mode : super.load('openweathermap.request.get.mode'),
			appid: super.load('openweathermap.request.get.appID')
		};
        }       
        public toString(): void {
		console.log('url: ' + this.url);
		console.log('lat: ' + this.param.lat);
		console.log('lon: ' + this.param.lon);
		console.log('cnt: ' + this.param.cnt);
		console.log('units: ' + this.param.units);
		console.log('mode: ' + this.param.mode);
		console.log('appid: ' + this.param.appid);
        }       
}    
