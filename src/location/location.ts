/**
 * 場所取得に関するインタフェース。
 *
 * @export
 * @interface Location
 */
export interface Location {
    getLocation(callback: LocationCallbackType): void;
}
