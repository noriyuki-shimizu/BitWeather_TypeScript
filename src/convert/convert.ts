type ConvertData = {
    text: string;
    color: string;
    submenu: SubmenuData[];
};

type SubmenuData = {
    text: string;
    color: string;
};

/**
 * データ変換処理に関するインターフェース。
 *
 * @export
 * @interface Convert
 */
export interface Convert {
    convert(): ConvertData[];
}
