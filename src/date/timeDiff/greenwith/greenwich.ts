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
    constructor(dateStr: string) {
        super(dateStr, 9);
    }
}
