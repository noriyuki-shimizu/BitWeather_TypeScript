import { Env } from "./env";
  
export class TokoroEnv extends Env {
        public readonly address: any;

        constructor() {
                super();
                this.address = super.load('tokoro.address');
        }
        public toString(): void {
                console.log('address: ' + this.address);
        }
}
