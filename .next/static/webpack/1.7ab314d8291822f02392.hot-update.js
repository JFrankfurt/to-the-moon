webpackHotUpdate(1,{

/***/ "./game/scenes/BootScene.ts":
/*!**********************************!*\
  !*** ./game/scenes/BootScene.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BootScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var BootScene =
/*#__PURE__*/
function (_Scene) {
  _inherits(BootScene, _Scene);

  function BootScene(args) {
    var _this;

    _classCallCheck(this, BootScene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BootScene).call(this, args));
    phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"].call(_assertThisInitialized(_assertThisInitialized(_this)), {
      key: 'BootScene'
    });
    return _this;
  }

  _createClass(BootScene, [{
    key: "initialize",
    value: function initialize() {
      this.load.spritesheet('/static/game/SpriteSheet.png', '/static/game/SpriteSheet.json');
      this.load.image('bullet', '/static/game/bitcoinMini.png');
      this.load.image('enemyBullet', '/static/game/enemyBullet.jpg');
      this.load.image('background', '/static/game/background.png');
      this.load.image('start', '/static/game/greyButton.png');
      this.load.audio('InvaderBullet', '/static/game/InvaderBullet.wav');
      this.load.audio('InvaderHit', '/static/game/InvaderHit.wav');
      this.load.audio('playerHit', '/static/game/ShipHit.wav');
      this.load.audio('gameMusic', '/static/game/background.mp3');
    }
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {
      this.scene.start('MainMenu');
    }
  }]);

  return BootScene;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"]);



/***/ })

})
//# sourceMappingURL=1.7ab314d8291822f02392.hot-update.js.map