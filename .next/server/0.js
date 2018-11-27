exports.ids = [0];
exports.modules = {

/***/ "./game/index.tsx":
/*!************************!*\
  !*** ./game/index.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "phaser");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes */ "./game/scenes/index.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var config = function config(canvas) {
  return {
    canvas: canvas,
    type: phaser__WEBPACK_IMPORTED_MODULE_0__["CANVAS"],
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 0
        }
      }
    },
    scene: [_scenes__WEBPACK_IMPORTED_MODULE_2__["BootScene"], _scenes__WEBPACK_IMPORTED_MODULE_2__["MainMenu"], _scenes__WEBPACK_IMPORTED_MODULE_2__["Level"], _scenes__WEBPACK_IMPORTED_MODULE_2__["LeaderBoard"]]
  };
};

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.canvasRef = null;
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var game = new phaser__WEBPACK_IMPORTED_MODULE_0__["Game"](config(this.canvasRef));
      console.log(game);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        ref: function ref(el) {
          return _this2.canvasRef = el;
        }
      });
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./game/scenes/BootScene.ts":
/*!**********************************!*\
  !*** ./game/scenes/BootScene.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BootScene; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "phaser");
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
    key: "preload",
    value: function preload() {
      this.load.multiatlas('spriteSheet', '/static/game/SpriteSheet.json');
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
    key: "create",
    value: function create() {
      this.scene.start('MainMenu');
    }
  }]);

  return BootScene;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"]);



/***/ }),

/***/ "./game/scenes/LeaderBoard.ts":
/*!************************************!*\
  !*** ./game/scenes/LeaderBoard.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeaderBoard; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "phaser");
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



var LeaderBoard =
/*#__PURE__*/
function (_Scene) {
  _inherits(LeaderBoard, _Scene);

  function LeaderBoard(args) {
    var _this;

    _classCallCheck(this, LeaderBoard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LeaderBoard).call(this, args));
    phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"].call(_assertThisInitialized(_assertThisInitialized(_this)), {
      key: 'LeaderBoard'
    });
    return _this;
  }

  _createClass(LeaderBoard, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {}
  }]);

  return LeaderBoard;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"]);



/***/ }),

/***/ "./game/scenes/Level.ts":
/*!******************************!*\
  !*** ./game/scenes/Level.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Level; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "phaser");
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



var Level =
/*#__PURE__*/
function (_Scene) {
  _inherits(Level, _Scene);

  function Level(args) {
    var _this;

    _classCallCheck(this, Level);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Level).call(this, args));
    phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"].call(_assertThisInitialized(_assertThisInitialized(_this)), {
      key: 'Level'
    });
    return _this;
  }

  _createClass(Level, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {}
  }]);

  return Level;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"]);



/***/ }),

/***/ "./game/scenes/MainMenu.ts":
/*!*********************************!*\
  !*** ./game/scenes/MainMenu.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainMenu; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "phaser");
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



var MainMenu =
/*#__PURE__*/
function (_Scene) {
  _inherits(MainMenu, _Scene);

  function MainMenu(args) {
    var _this;

    _classCallCheck(this, MainMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainMenu).call(this, args));
    phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"].call(_assertThisInitialized(_assertThisInitialized(_this)), {
      key: 'MainMenu'
    });
    return _this;
  }

  _createClass(MainMenu, [{
    key: "initialize",
    value: function initialize() {}
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create() {}
  }]);

  return MainMenu;
}(phaser__WEBPACK_IMPORTED_MODULE_0__["Scene"]);



/***/ }),

/***/ "./game/scenes/index.ts":
/*!******************************!*\
  !*** ./game/scenes/index.ts ***!
  \******************************/
/*! exports provided: BootScene, LeaderBoard, Level, MainMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BootScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BootScene */ "./game/scenes/BootScene.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BootScene", function() { return _BootScene__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LeaderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaderBoard */ "./game/scenes/LeaderBoard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeaderBoard", function() { return _LeaderBoard__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Level */ "./game/scenes/Level.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return _Level__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainMenu */ "./game/scenes/MainMenu.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainMenu", function() { return _MainMenu__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ })

};;
//# sourceMappingURL=0.js.map