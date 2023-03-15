"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.cards = void 0;
var uniqueCards = [
    { img: "01.png", description: "card 1", id: "card1" },
    { img: "02.jpg", description: "card 2", id: "card2" },
    { img: "03.jpg", description: "card 3", id: "card3" },
    { img: "04.png", description: "card 4", id: "card4" },
    { img: "05.png", description: "card 5", id: "card5" },
    { img: "06.jpg", description: "card 6", id: "card6" },
    { img: "07.jpg", description: "card 7", id: "card7" },
    { img: "08.jpg", description: "card 8", id: "card8" },
];
var cardsOriginais = [];
function shuffleNumber(min, max) {
    var n = Math.random() * (max - min + 1) + min;
    return parseInt(n.toString());
}
uniqueCards.forEach(function (card) {
    cardsOriginais.push(__assign({}, card));
    cardsOriginais.push(__assign({}, card));
});
var cards = [];
exports.cards = cards;
var len = cardsOriginais.length;
while (cards.length < len) {
    var shuffled = shuffleNumber(0, cardsOriginais.length - 1);
    var item = cardsOriginais.splice(shuffled, 1);
    cards.push(item[0]);
}
