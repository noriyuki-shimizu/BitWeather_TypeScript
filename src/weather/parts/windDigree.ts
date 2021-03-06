/**
 * 風向き取得に関するクラス。
 *
 * @export
 * @class WindDigree
 */
export class WindDigree {
    private readonly windDigreeList: any = Object.freeze([
        { f: 337.5, t: 382.5, windDigree: '北' },
        { f: 22.5, t: 67.5, windDigree: '北東' },
        { f: 67.5, t: 112.5, windDigree: '東' },
        { f: 112.5, t: 157.5, windDigree: '南東' },
        { f: 157.5, t: 202.5, windDigree: '南' },
        { f: 202.5, t: 247.5, windDigree: '南西' },
        { f: 247.5, t: 292.5, windDigree: '西' },
        { f: 292.5, t: 337.5, windDigree: '北西' }
    ]);

    constructor() {}

    public get(digree: number): WindDigreeData {
        const convertDigree = digree < 22.5 ? digree + 360 : digree;

        return this.windDigreeList.find(
            windDigree =>
                windDigree.f <= convertDigree && convertDigree < windDigree.t
        );
    }
}
