"use strict";
exports.__esModule = true;
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game(dom, cards) {
        this.dom = dom;
        this.cards = cards;
        this.firstCard = null;
        this.secondCard = null;
    }
    Game.prototype.reset = function () {
        var _a, _b;
        (_a = this.firstCard) === null || _a === void 0 ? void 0 : _a.classList.remove("show");
        (_b = this.secondCard) === null || _b === void 0 ? void 0 : _b.classList.remove("show");
        this.firstCard = null;
        this.secondCard = null;
    };
    Game.prototype.setCorrectAttempt = function () {
        this.firstCard = null;
        this.secondCard = null;
    };
    Game.prototype.addListeners = function () {
        var _this = this;
        Array.from(this.dom.querySelectorAll('[data-card]')).forEach(function (card, i) {
            card.addEventListener("click", function (e) {
                if (_this.firstCard === e.currentTarget ||
                    _this.secondCard === e.currentTarget ||
                    e.currentTarget.classList.contains("show"))
                    return;
                if (!_this.firstCard) {
                    _this.firstCard = e.currentTarget;
                    _this.firstCard.classList.add("show");
                    console.log("firsCard", _this.firstCard);
                }
                else if (!_this.secondCard) {
                    _this.secondCard = e.currentTarget;
                    _this.secondCard.classList.add("show");
                    console.log("secondCard", _this.secondCard);
                    if (_this.firstCard.getAttribute("data-card") === _this.secondCard.getAttribute("data-card")) {
                        _this.setCorrectAttempt();
                    }
                    else {
                        setTimeout(_this.reset.bind(_this), 2000);
                    }
                }
            });
        });
    };
    Game.prototype.init = function () {
        console.log('init chamado');
        this.dom.innerHTML = "\n            ".concat(this.cards.map(function (card) { return ("\n                <div class=\"card\" data-card=\"".concat(card.id, "\">\n                    <img src=\"img/").concat(card.img, "\" class=\"card-front\" alt=\"").concat(card.description, "\">\n                    <img src=\"img/back.png\" class=\"card-back\" alt=\"Memory card\">\n                </div>\n            ")); }).join(''), "\n        ");
        this.addListeners();
    };
    return Game;
}());
exports.Game = Game;
