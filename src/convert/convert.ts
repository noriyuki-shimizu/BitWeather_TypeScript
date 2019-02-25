
/**
 * データ変換処理に関するインターフェース。
 *
 * @export
 * @interface Convert
 */
export interface Convert {
    convert(): {text: string; color: string; submenu: []}[];
}