import { Env } from "../env";
  
/**
 * tokoroを使用する際の設定ファイル読み込みに関するクラス。
 *
 * @export
 * @class TokoroEnv
 * @extends {Env}
 */
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
