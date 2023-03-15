/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Card.ts":
/*!************************!*\
  !*** ./src/js/Card.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "cards": function() { return /* binding */ cards; }
    /* harmony export */ });
    var __assign = undefined && undefined.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
    
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
    
        return t;
      };
    
      return __assign.apply(this, arguments);
    };
    
    var uniqueCards = [{
      img: "01.png",
      description: "card 1",
      id: "card1"
    }, {
      img: "02.jpg",
      description: "card 2",
      id: "card2"
    }, {
      img: "03.jpg",
      description: "card 3",
      id: "card3"
    }, {
      img: "04.png",
      description: "card 4",
      id: "card4"
    }, {
      img: "05.png",
      description: "card 5",
      id: "card5"
    }, {
      img: "06.jpg",
      description: "card 6",
      id: "card6"
    }, {
      img: "07.jpg",
      description: "card 7",
      id: "card7"
    }, {
      img: "08.jpg",
      description: "card 8",
      id: "card8"
    }];
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
    var len = cardsOriginais.length;
    
    while (cards.length < len) {
      var shuffled = shuffleNumber(0, cardsOriginais.length - 1);
      var item = cardsOriginais.splice(shuffled, 1);
      cards.push(item[0]);
    }
    
    
    
    /***/ }),
    
    /***/ "./src/js/Game.ts":
    /*!************************!*\
      !*** ./src/js/Game.ts ***!
      \************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "Game": function() { return /* binding */ Game; }
    /* harmony export */ });
    var Game =
    /** @class */
    function () {
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
            if (_this.firstCard === e.currentTarget || _this.secondCard === e.currentTarget || e.currentTarget.classList.contains("show")) return;
    
            if (!_this.firstCard) {
              _this.firstCard = e.currentTarget;
    
              _this.firstCard.classList.add("show");
    
              console.log("firsCard", _this.firstCard);
            } else if (!_this.secondCard) {
              _this.secondCard = e.currentTarget;
    
              _this.secondCard.classList.add("show");
    
              console.log("secondCard", _this.secondCard);
    
              if (_this.firstCard.getAttribute("data-card") === _this.secondCard.getAttribute("data-card")) {
                _this.setCorrectAttempt();
              } else {
                setTimeout(_this.reset.bind(_this), 2000);
              }
            }
          });
        });
      };
    
      Game.prototype.init = function () {
        console.log('init chamado');
        this.dom.innerHTML = "\n            " + this.cards.map(function (card) {
          return "\n                <div class=\"card\" data-card=\"" + card.id + "\">\n                    <img src=\"img/" + card.img + "\" class=\"card-front\" alt=\"" + card.description + "\">\n                    <img src=\"img/back.png\" class=\"card-back\" alt=\"Memory card\">\n                </div>\n            ";
        }).join('') + "\n        ";
        this.addListeners();
      };
    
      return Game;
    }();
    
    
    
    /***/ }),
    
    /***/ "./src/js/index.ts":
    /*!*************************!*\
      !*** ./src/js/index.ts ***!
      \*************************/
    /***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/js/Card.ts");
    /* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/js/Game.ts");
    
    
    var gameDOM = document.querySelector('[data-game]');
    var game = new _Game__WEBPACK_IMPORTED_MODULE_1__.Game(gameDOM, _Card__WEBPACK_IMPORTED_MODULE_0__.cards);
    game.init();
    console.log(_Card__WEBPACK_IMPORTED_MODULE_0__.cards);
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		if(__webpack_module_cache__[moduleId]) {
    /******/ 			return __webpack_module_cache__[moduleId].exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	!function() {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = function(exports, definition) {
    /******/ 			for(var key in definition) {
    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 				}
    /******/ 			}
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	!function() {
    /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	!function() {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = function(exports) {
    /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 			}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /************************************************************************/
    /******/ 	// startup
    /******/ 	// Load entry module
    /******/ 	__webpack_require__("./src/js/index.ts");
    /******/ 	// This entry module used 'exports' so it can't be inlined
    /******/ })()
    ;
    //# sourceMappingURL=index.js.map