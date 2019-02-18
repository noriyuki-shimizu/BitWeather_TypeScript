"use strict";
exports.__esModule = true;
var ConvertDate = /** @class */ (function () {
    function ConvertDate(dateStr) {
        this.weekChars = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'];
        this.greenwich = 9;
        this.date = new Date(dateStr);
        this.setGreenwichHour();
    }
    ConvertDate.prototype.setGreenwichHour = function () {
        this.date.setHours(this.date.getHours() + this.greenwich);
    };
    ConvertDate.prototype.getWeekChar = function (index) {
        return this.weekChars[index];
    };
    ConvertDate.prototype.getDate = function () {
        var year = this.date.getFullYear();
        var month = this.date.getMonth() + 1;
        var date = this.date.getDate();
        var hour = this.date.getHours();
        var weekIndex = this.date.getDay();
        return {
            dateStr: year + "\u5E74" + month + "\u6708" + date + "\u65E5" + this.getWeekChar(weekIndex),
            hourStr: hour + "\u6642"
        };
    };
    return ConvertDate;
}());
exports.ConvertDate = ConvertDate;
