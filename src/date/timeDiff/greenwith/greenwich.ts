import { TimeDiff } from '../timeDiff';

export class Greenwich extends TimeDiff {

    constructor(dateStr: string) {
        super(dateStr, 9);
    }

}