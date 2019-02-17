import { Env } from "./env";

export class IpinfoEnv extends Env {
	private requestUrl: string;
	private requestGetToken: string;

	constructor() {
		super();
		this.requestUrl = super.load('ipinfo.request.url');
		this.requestGetToken = super.load('ipinfo.request.get.token');
	}
	public toString(): void {
		console.log('requestUrl: ' + this.requestUrl);
		console.log('getToken: ' + this.requestGetToken);
	}
}

