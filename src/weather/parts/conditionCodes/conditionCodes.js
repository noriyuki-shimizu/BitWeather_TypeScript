"use strict";
exports.__esModule = true;
var ConditionCodes = /** @class */ (function () {
    function ConditionCodes() {
        this.conditionCodeList = Object.freeze([
            { id: 200, meaning: '小雨と雷雨', icon: '⛈' },
            { id: 201, meaning: '雨と雷雨', icon: '⛈' },
            { id: 202, meaning: '大雨と雷雨', icon: '⛈' },
            { id: 210, meaning: '軽い雷雨', icon: '⛈' },
            { id: 211, meaning: '雷雨', icon: '⛈' },
            { id: 212, meaning: '激しい雷雨', icon: '⛈' },
            { id: 221, meaning: '不規則な雷雨', icon: '⛈' },
            { id: 230, meaning: '強い霧雨と雷雨', icon: '⛈' },
            { id: 231, meaning: '霧雨と雷雨', icon: '⛈' },
            { id: 232, meaning: '酷い霧雨と雷雨', icon: '⛈' },
            { id: 300, meaning: '軽い霧雨', icon: '🌧' },
            { id: 301, meaning: '霧雨', icon: '🌧' },
            { id: 302, meaning: '酷い霧雨', icon: '🌧' },
            { id: 310, meaning: '軽い霧雨', icon: '🌧' },
            { id: 311, meaning: '霧雨', icon: '🌧' },
            { id: 312, meaning: '酷い霧雨', icon: '🌧' },
            { id: 313, meaning: 'にわか雨と霧雨', icon: '🌧' },
            { id: 314, meaning: '酷いにわか雨と霧雨', icon: '🌧' },
            { id: 321, meaning: 'にわか霧雨', icon: '🌧' },
            { id: 500, meaning: '小雨', icon: '🌦' },
            { id: 501, meaning: '雨', icon: '🌦' },
            { id: 502, meaning: '酷い雨', icon: '🌦' },
            { id: 503, meaning: '大雨', icon: '🌦' },
            { id: 504, meaning: '激しい雨', icon: '🌦' },
            { id: 511, meaning: '冷たい雨', icon: '🌨' },
            { id: 520, meaning: '軽いにわか雨', icon: '🌧' },
            { id: 521, meaning: 'にわか雨', icon: '🌧' },
            { id: 522, meaning: '酷いにわか雨', icon: '🌧' },
            { id: 531, meaning: '不規則な雨', icon: '🌧' },
            { id: 600, meaning: '小雪', icon: '❄️' },
            { id: 601, meaning: '雪', icon: '❄️' },
            { id: 602, meaning: '大雪', icon: '❄️' },
            { id: 611, meaning: '霙', icon: '🌨' },
            { id: 612, meaning: 'にわか霙', icon: '🌨' },
            { id: 615, meaning: '小雨と雪', icon: '🌨' },
            { id: 616, meaning: '雨と雪', icon: '🌨' },
            { id: 620, meaning: 'にわか小雪', icon: '🌨' },
            { id: 621, meaning: 'にわか雪', icon: '🌨' },
            { id: 622, meaning: '酷いにわか雪', icon: '🌨️' },
            { id: 701, meaning: '霧', icon: '🌫' },
            { id: 711, meaning: '霧', icon: '🌫' },
            { id: 721, meaning: '薄い霧', icon: '🌫' },
            { id: 731, meaning: '煙霧', icon: '🌫' },
            { id: 741, meaning: '霧', icon: '🌫' },
            { id: 751, meaning: '砂霧', icon: '🌫' },
            { id: 761, meaning: '霧', icon: '🌫' },
            { id: 762, meaning: '火山灰', icon: '🌫' },
            { id: 771, meaning: '突風', icon: '🍃' },
            { id: 781, meaning: '竜巻', icon: '🌪' },
            { id: 800, meaning: '晴天', icon: '☀️' },
            { id: 801, meaning: '少数雲', icon: '🌤️' },
            { id: 802, meaning: '曇り', icon: '☁️' },
            { id: 803, meaning: '途切れ曇', icon: '☁️' },
            { id: 804, meaning: '曇り', icon: '☁️' },
        ]);
    }
    ConditionCodes.prototype.get = function (weatherId) {
        return this.conditionCodeList.find(function (conditionCode) {
            return weatherId === conditionCode.id;
        });
    };
    return ConditionCodes;
}());
exports.ConditionCodes = ConditionCodes;
