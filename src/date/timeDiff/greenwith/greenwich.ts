import { TimeDiff } from '../timeDiff';

/**
 * グリニッジ時差に関するクラス。
 * 時差は9時間
 *
 * @export
 * @class Greenwich
 * @extends {TimeDiff}
 */
export class Greenwich extends TimeDiff {
    private readonly timeDiff: number = 9;

    public of(dateStr: string) {
        this.date = new Date(dateStr);

        this.date.setHours(this.date.getHours() + this.timeDiff);
    }
}
