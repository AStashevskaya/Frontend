/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index */ \"./src/js/index.js\");\n;\n\n\n//# sourceURL=webpack://gem-puzzle/./src/index.js?");

/***/ }),

/***/ "./src/js/FieldCell.js":
/*!*****************************!*\
  !*** ./src/js/FieldCell.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ FieldCell\n/* harmony export */ });\n/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create */ \"./src/js/utils/create.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar SMALL_FONT_SIZE = 16;\nvar BIG_FONT_SIZE = 36;\nvar CHANGING_FS = 5;\n\nvar FieldCell = /*#__PURE__*/function () {\n  function FieldCell(puzzle, el) {\n    _classCallCheck(this, FieldCell);\n\n    var left = el.left,\n        top = el.top,\n        idx = el.idx;\n    this.puzzle = puzzle;\n    this.width = puzzle.width;\n    this.left = left;\n    this.top = top;\n    this.idx = typeof idx === 'number' ? idx : '';\n    this.image = puzzle.image;\n    this.fieldSize = puzzle.fieldSize;\n    this.size = this.width / this.fieldSize;\n    this.bgPosX = el.bgPosX;\n    this.bgPosY = el.bgPosY;\n  }\n\n  _createClass(FieldCell, [{\n    key: \"getBackgroundPosition\",\n    value: function getBackgroundPosition() {\n      this.bgPosX = \"\".concat(-this.left * this.size, \"px\");\n      this.bgPosY = \"\".concat(-this.top * this.size, \"px\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.container = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'fieldcell', \"\".concat(this.idx));\n      this.container.style.backgroundImage = \"url(./assets/images/\".concat(this.image, \")\");\n      this.container.style.backgroundSize = \"\".concat(this.width, \"px\");\n      this.container.style.width = \"\".concat(this.size, \"px\");\n      this.container.style.height = \"\".concat(this.size, \"px\");\n      this.container.style.top = \"\".concat(this.top * this.size, \"px\");\n      this.container.style.left = \"\".concat(this.left * this.size, \"px\");\n      this.container.style.backgroundPositionX = this.bgPosX;\n      this.container.style.backgroundPositionY = this.bgPosY;\n\n      if (this.fieldSize > CHANGING_FS) {\n        this.container.style.fontSize = \"\".concat(SMALL_FONT_SIZE, \"px\");\n      } else {\n        this.container.style.fontSize = \"\".concat(BIG_FONT_SIZE, \"px\");\n      }\n\n      if (this.idx === '') {\n        this.container.style.opacity = '0';\n      }\n\n      return this.container;\n    }\n  }]);\n\n  return FieldCell;\n}();\n\n\n\n//# sourceURL=webpack://gem-puzzle/./src/js/FieldCell.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create */ \"./src/js/utils/create.js\");\n/* harmony import */ var _utils_addZero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/addZero */ \"./src/js/utils/addZero.js\");\n/* harmony import */ var _GameField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameField */ \"./src/js/GameField.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/constants */ \"./src/js/utils/constants.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n // eslint-disable-next-line import/no-cycle\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.state = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_START;\n    this.time = null;\n    this.sound = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.SOUND_OFF;\n    this.width = Game.getWidth();\n    this.count = 0;\n    this.progressIdentifier = null;\n    this.init();\n  }\n\n  _createClass(Game, [{\n    key: \"renderInitialboard\",\n    value: function renderInitialboard() {\n      this.main = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'game-wrapper');\n      this.container = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'gameSettings-wrapper');\n      this.menuList = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('ul', 'menu__list');\n      this.settings = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'settings-page');\n      this.bestScore = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'best-score');\n      this.savedGames = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'saved-games');\n      this.parent = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'parent');\n      document.body.prepend(this.main);\n      this.main.appendChild(this.container);\n      this.game = new _GameField__WEBPACK_IMPORTED_MODULE_2__.default(this);\n      this.stateButton = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'state-btn', 'Pause');\n      var time = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'time', \"Time: \".concat(this.count));\n      var moves = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'move', \"Moves: \".concat(this.game.moves));\n      this.menuRender();\n      this.settingsRender();\n      this.bestScoreRender();\n      this.savedGamesRender();\n      this.game.overlay.appendChild(this.parent);\n      this.parent.appendChild(this.menuList);\n      this.parent.appendChild(this.settings);\n      this.parent.appendChild(this.bestScore);\n      this.parent.appendChild(this.savedGames);\n      Game.generateBestScores();\n      this.container.appendChild(this.stateButton);\n      this.container.appendChild(time);\n      this.container.appendChild(moves);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.renderInitialboard();\n      this.addSound();\n      this.initializeClickhandlers();\n    }\n  }, {\n    key: \"initializeClickhandlers\",\n    value: function initializeClickhandlers() {\n      var _this = this;\n\n      this.children = _toConsumableArray(this.parent.children);\n      document.getElementById('sound').addEventListener('click', this.soundClick.bind(this));\n      this.stateButton.addEventListener('click', this.changeStateClick.bind(this));\n\n      var menuLinks = _toConsumableArray(document.querySelectorAll('.menu__link'));\n\n      menuLinks.forEach(function (el) {\n        return el.addEventListener('click', _this.menuLinkClick.bind(_this));\n      });\n\n      var backLinks = _toConsumableArray(document.querySelectorAll('#back'));\n\n      backLinks.forEach(function (el) {\n        return el.addEventListener('click', _this.menuLinkClick.bind(_this));\n      });\n      var modalNewGame = document.querySelector('a[data-reset = true]');\n      modalNewGame.addEventListener('click', this.resetGame.bind(this));\n\n      var modalCloseLinks = _toConsumableArray(document.querySelectorAll('#close'));\n\n      modalCloseLinks.forEach(function (el) {\n        return el.addEventListener('click', _this.closeModal.bind(_this));\n      });\n    }\n  }, {\n    key: \"resetGame\",\n    value: function resetGame() {\n      this.count = 0;\n      this.progressIdentifier = setInterval(this.tick.bind(this), 1000);\n      this.game.reset();\n      this.game.modal.close();\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      this.game.modal.close();\n    }\n  }, {\n    key: \"soundClick\",\n    value: function soundClick(e) {\n      if (this.sound === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.SOUND_OFF) {\n        e.target.dataset.sound = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.SOUND_ON;\n        e.target.innerText = \"Sound \".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.SOUND_ON);\n        this.sound = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.SOUND_ON;\n      } else {\n        e.target.innerText = \"Sound \".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.SOUND_OFF);\n        this.sound = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.SOUND_OFF;\n        e.target.dataset.sound = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.SOUND_OFF;\n      }\n    }\n  }, {\n    key: \"changeStateClick\",\n    value: function changeStateClick(e) {\n      if (e.target.innerText === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_PAUSE && this.state === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_START) return;\n\n      if (e.target.innerText === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_PAUSE && this.state === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_PLAYING) {\n        this.state = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_PAUSE;\n        this.menuList.classList.remove('hidden');\n        this.game.overlay.classList.remove('hidden');\n        clearInterval(this.progressIdentifier);\n        e.target.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.RESUME;\n        return;\n      }\n\n      if (e.target.innerText === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.RESUME && this.state === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_PAUSE) {\n        this.state = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_PLAYING;\n        this.progressIdentifier = setInterval(this.tick.bind(this), 1000);\n        this.children.forEach(function (el) {\n          if (el.classList.length < 2) {\n            el.classList.add('hidden');\n          }\n        });\n        this.game.overlay.classList.add('hidden');\n        e.target.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_PAUSE;\n      }\n    }\n  }, {\n    key: \"menuLinkClick\",\n    value: function menuLinkClick(e) {\n      if (e.target.dataset.link === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.NEW_GAME) {\n        this.state = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_PLAYING;\n\n        if (this.stateButton.innerText === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.RESUME) {\n          this.stateButton.innerText = _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATE_PAUSE;\n        }\n\n        this.menuList.classList.add('hidden');\n        this.game.overlay.classList.add('hidden');\n        this.progressIdentifier = setInterval(this.tick.bind(this), 1000);\n        this.game.reset();\n        return;\n      }\n\n      if (e.target.dataset.link === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.SETTINGS) {\n        this.menuList.classList.add('hidden');\n        this.settings.classList.remove('hidden');\n        return;\n      }\n\n      if (e.target.dataset.link === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.BESTSCORES) {\n        this.menuList.classList.add('hidden');\n        this.bestScore.classList.remove('hidden');\n        return;\n      }\n\n      if (e.target.dataset.link === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.BACK) {\n        this.children.forEach(function (el) {\n          if (el.classList.length < 2) {\n            el.classList.add('hidden');\n          }\n        });\n        this.menuList.classList.remove('hidden');\n        return;\n      }\n\n      if (e.target.dataset.link === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.LOAD_GAME) {\n        this.loadGame();\n        return;\n      }\n\n      if (e.target.dataset.link === _utils_constants__WEBPACK_IMPORTED_MODULE_3__.SAVE_GAME) {\n        this.saveGame();\n      }\n    }\n  }, {\n    key: \"menuRender\",\n    value: function menuRender() {\n      this.menuList.innerHTML = \"\\n<span class=\\\"menu__link\\\" data-link=\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.NEW_GAME, \">New Game</span>\\n <span class=\\\"menu__link\\\" data-link=\").concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.SAVE_GAME, \">Save Game</span>\\n <span class=\\\"menu__link\\\" data-link=\").concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.LOAD_GAME, \">Load Game</span>\\n <span class=\\\"menu__link\\\" data-link=\").concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.BESTSCORES, \">Best Scores</span>\\n <span class=\\\"menu__link\\\" data-link=\").concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.SETTINGS, \">Settings</span>\\n\");\n    }\n  }, {\n    key: \"settingsRender\",\n    value: function settingsRender() {\n      this.settings.classList.add('hidden');\n      this.settings.innerHTML = \"<span class=\\\"menu-header\\\">Settings</span>\\n        <span class=\\\"menu-text_big\\\">Field Size</span>\\n        <form class='form'>\\n    <label for=\\\"size\\\" class=\\\"menu-text_small\\\">\\n           <input type=\\\"radio\\\" name=\\\"size\\\" id=\\\"input\\\" value=\\\"3\\\"> 3 X 3\\n       </label>\\n       <label for=\\\"size\\\" class=\\\"menu-text_small\\\">\\n           <input type=\\\"radio\\\" name=\\\"size\\\" id=\\\"input\\\" value=\\\"4\\\" checked> 4 X 4\\n       </label>\\n       <label for=\\\"size\\\" class=\\\"menu-text_small\\\">\\n       <input type=\\\"radio\\\" name=\\\"size\\\" id=\\\"input\\\" value=\\\"5\\\"> 5 X 5\\n</label>\\n       <label for=\\\"size\\\" class=\\\"menu-text_small\\\">\\n           <input type=\\\"radio\\\" name=\\\"size\\\" id=\\\"input\\\" value=\\\"6\\\"> 6 X 6\\n   </label>\\n   <label for=\\\"size\\\" class=\\\"menu-text_small\\\">\\n   <input type=\\\"radio\\\" name=\\\"size\\\" id=\\\"input\\\" value=\\\"7\\\"> 7 X 7\\n</label>\\n<label for=\\\"size\\\" class=\\\"menu-text_small\\\">\\n<input type=\\\"radio\\\" name=\\\"size\\\" id=\\\"input\\\" value=\\\"8\\\"> 8 X 8\\n</label>\\n    </form>\\n    <span id=\\\"sound\\\" data-sound=\\\"off\\\" class=\\\"menu-text_big sound\\\">Sound off</span>\\n    <span class=\\\"menu-text_big\\\" id=\\\"back\\\" data-link=\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.BACK, \">Go back</span>\\n    \");\n    }\n  }, {\n    key: \"bestScoreRender\",\n    value: function bestScoreRender() {\n      this.bestScore.classList.add('hidden');\n      this.bestScore.innerHTML = \"<span class=\\\"menu-header\\\">Best Score</span>\\n        <ul class=\\\"best-score_list\\\">\\n        <li class=\\\"best-score_link menu-text_small\\\"><span>Moves</span><span>Time</span></li>\\n        </ul>\\n        <span class=\\\"menu-text_big\\\" id=\\\"back\\\" data-link=\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.BACK, \">Go back</span>\\n        \");\n    }\n  }, {\n    key: \"savedGamesRender\",\n    value: function savedGamesRender() {\n      this.savedGames.classList.add('hidden');\n      this.savedGames.innerHTML = \"\\n        <span class=\\\"load_game menu-text_small\\\">You haven't got any saved games yet</span>\\n        <span class=\\\"menu-text_big\\\" id=\\\"back\\\" data-link=\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.BACK, \" >Go back</span>\\n        \");\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.count += 1;\n      this.sec = this.count >= 60 ? this.count % 60 : this.count;\n      this.min = Math.floor(this.count / 60);\n      document.querySelector('.time').innerHTML = \"Time: \".concat((0,_utils_addZero__WEBPACK_IMPORTED_MODULE_1__.default)(this.min), \": \").concat((0,_utils_addZero__WEBPACK_IMPORTED_MODULE_1__.default)(this.sec));\n    }\n  }, {\n    key: \"saveGame\",\n    value: function saveGame() {\n      var session = {};\n      session.count = this.count;\n      session.moves = this.game.moves;\n      session.template = this.game.currentTemplate;\n      session.image = this.game.image;\n      session.size = this.game.fieldSize;\n      var jsonObj = JSON.stringify(session);\n      localStorage.setItem('games', jsonObj);\n      var loadedGameText = document.querySelector('.load_game');\n      loadedGameText.innerText = 'Your game is saved!';\n      this.menuList.classList.add('hidden');\n      this.savedGames.classList.remove('hidden');\n    }\n  }, {\n    key: \"loadGame\",\n    value: function loadGame() {\n      var loadedGame = localStorage.getItem('games');\n\n      if (!loadedGame) {\n        var loadedGameText = document.querySelector('.load_game');\n        loadedGameText.innerText = 'You have not any saved games yet!';\n        this.menuList.classList.add('hidden');\n        this.savedGames.classList.remove('hidden');\n      }\n\n      if (loadedGame) {\n        loadedGame = JSON.parse(loadedGame);\n        this.game.renderLoadGame(loadedGame);\n        this.count = loadedGame.count;\n        this.tick();\n      }\n    }\n  }, {\n    key: \"addSound\",\n    value: function addSound() {\n      this.audio = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('audio');\n      this.audio.setAttribute('src', './assets/sounds/english.mp3');\n      this.audio.load();\n    } // eslint-disable-next-line class-methods-use-this\n\n  }], [{\n    key: \"getWidth\",\n    value: function getWidth() {\n      var screenWidth = Number(document.documentElement.clientWidth);\n\n      if (screenWidth > _utils_constants__WEBPACK_IMPORTED_MODULE_3__.CHANGING_SCREEN_WIDTH) {\n        return _utils_constants__WEBPACK_IMPORTED_MODULE_3__.MIN_BOARD_SIZE;\n      }\n\n      return _utils_constants__WEBPACK_IMPORTED_MODULE_3__.MIN_BOARD_SIZE;\n    }\n  }, {\n    key: \"generateBestScores\",\n    value: function generateBestScores() {\n      var bestScores = localStorage.getItem('bestScores');\n      var bestScoresContainer = document.querySelector('.best-score_list');\n      if (!bestScores) return;\n      bestScores = JSON.parse(bestScores);\n      bestScores = bestScores.sort(function (a, b) {\n        return a.moves - b.moves;\n      });\n      var html = '<li class=\"best-score_link menu-text_small\"><span>№</span><span>Size</span><span>Moves</span><span>Time</span></li>';\n\n      if (bestScores.length > 10) {\n        bestScores = bestScores.slice(0, 10);\n      }\n\n      bestScores.forEach(function (el, idx) {\n        html += \"<li class=\\\"best-score_link menu-text_small\\\"><span>\".concat(idx + 1, \".</span><span>\").concat(el.size, \"x\").concat(el.size, \"</span><span>\").concat(el.moves, \"</span><span> \").concat((0,_utils_addZero__WEBPACK_IMPORTED_MODULE_1__.default)(Math.floor(el.count / 60)), \": \").concat((0,_utils_addZero__WEBPACK_IMPORTED_MODULE_1__.default)(el.count % 60), \"</span></li>\");\n      });\n      bestScoresContainer.innerHTML = html;\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://gem-puzzle/./src/js/Game.js?");

/***/ }),

/***/ "./src/js/GameField.js":
/*!*****************************!*\
  !*** ./src/js/GameField.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ GameField\n/* harmony export */ });\n/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create */ \"./src/js/utils/create.js\");\n/* harmony import */ var _FieldCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldCell */ \"./src/js/FieldCell.js\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup */ \"./src/js/Popup.js\");\n/* harmony import */ var _layouts_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/images */ \"./src/js/layouts/images.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/constants */ \"./src/js/utils/constants.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n // import Game from './Game';\n\n\n\nvar GameField = /*#__PURE__*/function () {\n  function GameField(settings) {\n    _classCallCheck(this, GameField);\n\n    this.settings = settings;\n    this.moves = 0;\n    this.fieldSize = 4;\n    this.buttons = [];\n    this.winTemplate = [];\n    this.width = this.settings.width;\n    this.count = 0;\n    this.currentTemplate = [];\n    this.prevFieldSize = null;\n    this.init();\n  }\n\n  _createClass(GameField, [{\n    key: \"init\",\n    value: function init() {\n      this.generateLayout();\n      this.image = GameField.getImage(_layouts_images__WEBPACK_IMPORTED_MODULE_3__.default);\n      this.modal = new _Popup__WEBPACK_IMPORTED_MODULE_2__.default(this);\n      this.generateWinTemplate();\n      this.render(this.winTemplate);\n    }\n  }, {\n    key: \"generateLayout\",\n    value: function generateLayout() {\n      this.bestScores = GameField.generateBestScoreArr();\n      this.container = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'gamefield');\n      this.overlay = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('span', 'overlay');\n      this.container.style.width = \"\".concat(this.width, \"px\");\n      this.container.style.height = \"\".concat(this.width, \"px\");\n      document.querySelector('.game-wrapper').appendChild(this.container);\n      this.container.appendChild(this.overlay);\n    }\n  }, {\n    key: \"generateWinTemplate\",\n    value: function generateWinTemplate() {\n      this.winTemplate = [];\n\n      for (var i = 0; i < Math.pow(this.fieldSize, 2) - 1; i += 1) {\n        var left = i % this.fieldSize;\n        var top = (i - left) / this.fieldSize;\n        var idx = i + 1;\n        this.winTemplate.push(new _FieldCell__WEBPACK_IMPORTED_MODULE_1__.default(this, {\n          left: left,\n          top: top,\n          idx: idx\n        }));\n      }\n\n      this.winTemplate.push(new _FieldCell__WEBPACK_IMPORTED_MODULE_1__.default(this, {\n        left: this.fieldSize - 1,\n        top: this.fieldSize - 1,\n        idx: ''\n      }));\n      this.winTemplate.forEach(function (el) {\n        return el.getBackgroundPosition();\n      });\n    }\n  }, {\n    key: \"renderLoadGame\",\n    value: function renderLoadGame(options) {\n      var _this = this;\n\n      if (!options) return;\n      var size = options.size,\n          image = options.image,\n          moves = options.moves,\n          template = options.template;\n      this.fieldSize = size;\n      this.image = image;\n      this.moves = moves;\n      this.currentTemplate = template;\n      this.generateWinTemplate();\n      this.buttons = []; // if(this.currentTemplate.length === 0){\n      // }\n\n      this.currentTemplate.forEach(function (el) {\n        return _this.buttons.push(new _FieldCell__WEBPACK_IMPORTED_MODULE_1__.default(_this, el));\n      });\n      document.querySelector('.move').innerHTML = \"Moves: \".concat(this.moves);\n      this.deleteCells();\n      this.render(this.buttons);\n    }\n  }, {\n    key: \"render\",\n    value: function render(arr) {\n      var _this2 = this;\n\n      arr.forEach(function (obj) {\n        var el = obj.render();\n\n        if (el.textContent) {\n          el.draggable = true;\n          el.addEventListener('dragstart', _this2.handleCellDragStart.bind(_this2));\n        } else {\n          el.addEventListener('dragover', GameField.handleCellMove.bind(GameField));\n          el.addEventListener('drop', _this2.handleCellDragEnd.bind(_this2));\n        }\n\n        el.addEventListener('click', _this2.handleCellClick.bind(_this2));\n\n        _this2.container.appendChild(el);\n      });\n    }\n  }, {\n    key: \"shuffle\",\n    value: function shuffle() {\n      var _this3 = this;\n\n      var arr = _toConsumableArray(this.winTemplate);\n\n      var emptyCeil = arr.pop();\n      this.buttons = [];\n      var numbers = this.makeShuffledNumbersArray();\n\n      var _loop = function _loop(i) {\n        var left = i % _this3.fieldSize;\n        var top = (i - left) / _this3.fieldSize;\n        var idx = numbers[i];\n\n        var correctBtn = _this3.winTemplate.find(function (el) {\n          return el.idx === idx;\n        });\n\n        var field = new _FieldCell__WEBPACK_IMPORTED_MODULE_1__.default(_this3, {\n          left: left,\n          top: top,\n          idx: idx\n        });\n        field.bgPosX = correctBtn.bgPosX;\n        field.bgPosY = correctBtn.bgPosY;\n\n        _this3.buttons.push(field);\n      };\n\n      for (var i = 0; i < Math.pow(this.fieldSize, 2) - 1; i += 1) {\n        _loop(i);\n      }\n\n      emptyCeil = new _FieldCell__WEBPACK_IMPORTED_MODULE_1__.default(this, {\n        left: this.fieldSize - 1,\n        top: this.fieldSize - 1,\n        idx: ''\n      });\n      emptyCeil.getBackgroundPosition();\n      this.buttons.push(emptyCeil);\n      this.render(this.buttons);\n      this.saveCurrentTemplate();\n    }\n  }, {\n    key: \"checkSolving\",\n    value: function checkSolving(arr) {\n      var count = this.fieldSize;\n\n      for (var i = 0; i < arr.length; i += 1) {\n        for (var j = i + 1; j < arr.length; j += 1) {\n          if (arr[i] > arr[j]) {\n            count += 1;\n          }\n        }\n      }\n\n      if (count % 2 === 0) return true;\n      return false;\n    }\n  }, {\n    key: \"makeShuffledNumbersArray\",\n    value: function makeShuffledNumbersArray() {\n      var numbers = [];\n      numbers = _toConsumableArray(Array(Math.pow(this.fieldSize, 2) - 1).keys()).sort(function () {\n        return Math.random() - 0.5;\n      }).map(function (el) {\n        return el + 1;\n      });\n\n      if (!this.checkSolving(numbers)) {\n        this.makeShuffledNumbersArray();\n      }\n\n      return numbers;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.image = GameField.getImage(_layouts_images__WEBPACK_IMPORTED_MODULE_3__.default);\n      this.prevFieldSize = this.fieldSize;\n      this.fieldSize = GameField.checkSize();\n      if (this.fieldSize !== this.prevFieldSize) this.generateWinTemplate();\n      this.deleteCells();\n      this.shuffle();\n      this.moves = 0;\n      document.querySelector('.move').innerHTML = \"Moves: \".concat(this.moves);\n      this.settings.count = 0;\n    }\n  }, {\n    key: \"handleCellClick\",\n    value: function handleCellClick(e) {\n      if (this.settings.state === _utils_constants__WEBPACK_IMPORTED_MODULE_4__.STATE_PAUSE) return;\n      this.currentTemplate = [];\n      var number = Number(e.target.innerHTML);\n      var clickedCeil = this.buttons.find(function (el) {\n        return el.idx === number;\n      });\n      var emptyCeil = this.buttons.find(function (el) {\n        return el.idx === '';\n      });\n      var nothingClicked = !clickedCeil || !emptyCeil;\n      if (nothingClicked) return;\n      this.swapCeilPositions(clickedCeil, emptyCeil);\n      this.saveCurrentTemplate();\n      this.findIfWinTemplate();\n    }\n  }, {\n    key: \"swapCeilPositions\",\n    value: function swapCeilPositions(clicked, empty) {\n      var clickedCeil = clicked;\n      var emptyCeil = empty;\n      var left = clickedCeil.left,\n          top = clickedCeil.top;\n      var emptyLeft = emptyCeil.left;\n      var emptyTop = emptyCeil.top;\n      var sum = Math.abs(left - emptyLeft) + Math.abs(top - emptyTop);\n      if (sum !== 1) return;\n      this.moves += 1;\n      document.querySelector('.move').innerHTML = \"Moves: \".concat(this.moves);\n\n      if (this.settings.sound === _utils_constants__WEBPACK_IMPORTED_MODULE_4__.SOUND_ON) {\n        this.settings.audio.play();\n      }\n\n      Object.assign(emptyCeil, {\n        left: left,\n        top: top\n      });\n\n      if (left !== emptyLeft) {\n        GameField.animate('left', clickedCeil, left, emptyLeft);\n        clickedCeil.container.style.top = \"\".concat(clickedCeil.top * clickedCeil.size, \"px\");\n      }\n\n      if (top !== emptyTop) {\n        GameField.animate('top', clickedCeil, top, emptyTop);\n        clickedCeil.container.style.left = \"\".concat(clickedCeil.left * clickedCeil.size, \"px\");\n      }\n\n      clickedCeil.left = emptyLeft;\n      clickedCeil.top = emptyTop;\n      emptyCeil.container.style.top = \"\".concat(emptyCeil.top * emptyCeil.size, \"px\");\n      emptyCeil.container.style.left = \"\".concat(emptyCeil.left * emptyCeil.size, \"px\");\n    }\n  }, {\n    key: \"saveCurrentTemplate\",\n    value: function saveCurrentTemplate() {\n      var _this4 = this;\n\n      this.buttons.forEach(function (el) {\n        var left = el.left,\n            top = el.top,\n            idx = el.idx,\n            bgPosY = el.bgPosY,\n            bgPosX = el.bgPosX;\n\n        _this4.currentTemplate.push({\n          left: left,\n          top: top,\n          idx: idx,\n          bgPosY: bgPosY,\n          bgPosX: bgPosX\n        });\n      });\n    }\n  }, {\n    key: \"handleCellDragStart\",\n    value: function handleCellDragStart(e) {\n      if (this.settings.state === _utils_constants__WEBPACK_IMPORTED_MODULE_4__.STATE_PAUSE) return;\n      var number = Number(e.target.innerHTML);\n      this.clickedCeil = this.buttons.find(function (el) {\n        return el.idx === number;\n      });\n    }\n  }, {\n    key: \"handleCellDragEnd\",\n    value: function handleCellDragEnd() {\n      this.currentTemplate = [];\n      var emptyCeil = this.buttons.find(function (el) {\n        return el.idx === '';\n      });\n      var nothingClicked = !this.clickedCeil || !emptyCeil;\n      if (nothingClicked) return;\n      var _this$clickedCeil = this.clickedCeil,\n          left = _this$clickedCeil.left,\n          top = _this$clickedCeil.top;\n      var emptyLeft = emptyCeil.left;\n      var emptyTop = emptyCeil.top;\n      var sum = Math.abs(left - emptyLeft) + Math.abs(top - emptyTop);\n      if (sum !== 1) return;\n      this.moves += 1;\n      document.querySelector('.move').innerHTML = \"Moves: \".concat(this.moves);\n\n      if (this.settings.sound === _utils_constants__WEBPACK_IMPORTED_MODULE_4__.SOUND_ON) {\n        this.settings.audio.play();\n      }\n\n      Object.assign(emptyCeil, {\n        left: left,\n        top: top\n      });\n      this.clickedCeil.left = emptyLeft;\n      this.clickedCeil.top = emptyTop;\n      this.clickedCeil.container.style.top = \"\".concat(this.clickedCeil.top * this.clickedCeil.size, \"px\");\n      this.clickedCeil.container.style.left = \"\".concat(this.clickedCeil.left * this.clickedCeil.size, \"px\");\n      emptyCeil.container.style.top = \"\".concat(emptyCeil.top * emptyCeil.size, \"px\");\n      emptyCeil.container.style.left = \"\".concat(emptyCeil.left * emptyCeil.size, \"px\");\n      this.saveCurrentTemplate();\n      this.findIfWinTemplate();\n    }\n  }, {\n    key: \"findIfWinTemplate\",\n    value: function findIfWinTemplate() {\n      var _this5 = this;\n\n      var _loop2 = function _loop2(i) {\n        var idx = i + 1;\n\n        var correctObj = _this5.winTemplate.find(function (el) {\n          return el.idx === idx;\n        });\n\n        var currentObj = _this5.buttons.find(function (el) {\n          return el.idx === idx;\n        });\n\n        if (correctObj.left !== currentObj.left) return {\n          v: void 0\n        };\n        if (correctObj.top !== currentObj.top) return {\n          v: void 0\n        };\n      };\n\n      for (var i = 0; i < this.buttons.length - 1; i += 1) {\n        var _ret = _loop2(i);\n\n        if (_typeof(_ret) === \"object\") return _ret.v;\n      }\n\n      this.isWin();\n    }\n  }, {\n    key: \"isWin\",\n    value: function isWin() {\n      var emptyCeil = this.buttons.find(function (el) {\n        return el.idx === '';\n      });\n      emptyCeil.container.style.opacity = '1';\n      document.querySelectorAll('.fieldcell').forEach(function (el) {\n        el.innerText = '';\n        el.style.borderRadius = '0';\n      });\n      var game = {};\n      game.moves = this.moves;\n      game.size = this.fieldSize;\n      game.count = this.settings.count;\n      this.bestScores.push(game); // eslint-disable-next-line no-console\n\n      console.log(this.bestScores);\n      var bestJson = JSON.stringify(this.bestScores);\n      localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_4__.BESTSCORES, bestJson);\n      this.settings.constructor.generateBestScores();\n      this.modal.open();\n    }\n  }, {\n    key: \"deleteCells\",\n    value: function deleteCells() {\n      var _this6 = this;\n\n      var children = _toConsumableArray(this.container.children);\n\n      children.forEach(function (el) {\n        if (el !== _this6.overlay) {\n          if (el.textContent) {\n            el.removeEventListener('dragstart', _this6.handleCellDragStart.bind(_this6));\n          } else {\n            el.removeEventListener('dragover', GameField.handleCellMove.bind(GameField));\n            el.removeEventListener('drop', _this6.handleCellDragEnd.bind(_this6));\n          }\n\n          el.removeEventListener('click', _this6.handleCellClick.bind(_this6));\n\n          _this6.container.removeChild(el);\n        }\n      });\n    }\n  }], [{\n    key: \"getImage\",\n    value: function getImage(arr) {\n      var idx = Math.floor(Math.random() * arr.length);\n      return arr[idx];\n    }\n  }, {\n    key: \"animate\",\n    value: function animate(position, obj, currPos, destination) {\n      var FRAME_RATE = 10;\n      var objNextPosition = destination;\n      var changingPosition = position;\n      var objCurrentPosition = currPos;\n      var step = FRAME_RATE * Math.abs(objNextPosition - objCurrentPosition) / _utils_constants__WEBPACK_IMPORTED_MODULE_4__.ANIMATION_DURATION;\n      var id = setInterval(function () {\n        if (objCurrentPosition < objNextPosition) {\n          objCurrentPosition = Math.min(objNextPosition, objCurrentPosition + step);\n\n          if (objCurrentPosition >= objNextPosition) {\n            clearInterval(id);\n          }\n        } else if (objCurrentPosition > objNextPosition) {\n          objCurrentPosition = Math.max(objNextPosition, objCurrentPosition - step);\n\n          if (objCurrentPosition <= objNextPosition) {\n            clearInterval(id);\n          }\n        }\n\n        obj.container.style[changingPosition] = \"\".concat(objCurrentPosition * obj.size, \"px\");\n      }, FRAME_RATE);\n    }\n  }, {\n    key: \"handleCellMove\",\n    value: function handleCellMove(e) {\n      e.preventDefault();\n    }\n  }, {\n    key: \"generateBestScoreArr\",\n    value: function generateBestScoreArr() {\n      var bestScores = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_4__.BESTSCORES);\n      if (!bestScores) return [];\n      bestScores = JSON.parse(bestScores);\n      return bestScores;\n    }\n  }, {\n    key: \"checkSize\",\n    value: function checkSize() {\n      return Number(document.querySelector('input[name=size]:checked').value);\n    }\n  }]);\n\n  return GameField;\n}();\n\n\n\n//# sourceURL=webpack://gem-puzzle/./src/js/GameField.js?");

/***/ }),

/***/ "./src/js/Popup.js":
/*!*************************!*\
  !*** ./src/js/Popup.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Modal\n/* harmony export */ });\n/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create */ \"./src/js/utils/create.js\");\n/* harmony import */ var _utils_addZero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/addZero */ \"./src/js/utils/addZero.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants */ \"./src/js/utils/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(gamefield) {\n    _classCallCheck(this, Modal);\n\n    this.gamefield = gamefield;\n    this.closing = false;\n    this.init();\n  }\n\n  _createClass(Modal, [{\n    key: \"init\",\n    value: function init() {\n      this.renderModal();\n    }\n  }, {\n    key: \"renderModal\",\n    value: function renderModal() {\n      this.modal = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'modal');\n      this.layout = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'modal__overlay');\n      this.modalWrapper = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'modal__window');\n      document.body.appendChild(this.modal);\n      this.modal.appendChild(this.layout);\n      this.layout.setAttribute('id', 'close');\n      this.modalWrapper.innerHTML = \"  <div class=\\\"modal__header\\\"><span  class=\\\"close_btn\\\" id=\\\"close\\\" data-close='true'>&times</span></div>\\n        <div class=\\\"modal__content\\\"><span class=\\\"congrats\\\">Congratulations!</span>\\n            <span class=\\\"congrats\\\" id='solve-with'></span>\\n            <span class=\\\" congrats question\\\">Would you like to play one more game?</span>\\n            <div class=\\\"buttons__wrapper\\\">\\n            <a href=\\\"#\\\" class=\\\"modal__btn \\\" data-reset='true'>Yes</a>\\n            <a href=\\\"#\\\" class=\\\"modal__btn\\\" id=\\\"close\\\"  data-close='true'>No</a>\\n            </div>\\n        </div>\";\n      this.layout.appendChild(this.modalWrapper);\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      if (this.closing) return;\n      this.modal.classList.add('open');\n      document.getElementById('solve-with').innerText = \"You solve puzzle in \".concat((0,_utils_addZero__WEBPACK_IMPORTED_MODULE_1__.default)(this.gamefield.settings.min), \":\").concat((0,_utils_addZero__WEBPACK_IMPORTED_MODULE_1__.default)(this.gamefield.settings.sec), \" with \").concat(this.gamefield.moves, \" moves\");\n      clearInterval(this.gamefield.settings.progressIdentifier);\n\n      if (document.body.classList.contains('modal-close')) {\n        document.body.classList.remove('modal-close');\n      }\n\n      document.body.classList.add('modal-open');\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      var _this = this;\n\n      this.closing = true;\n      this.modal.classList.remove('open');\n      this.modal.classList.add('hide');\n      setTimeout(function () {\n        _this.modal.classList.remove('hide');\n\n        _this.closing = false;\n\n        if (document.body.classList.contains('modal-open')) {\n          document.body.classList.remove('modal-open');\n        }\n\n        document.body.classList.add('modal-close');\n      }, _utils_constants__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_DURATION);\n    }\n  }]);\n\n  return Modal;\n}();\n\n\n\n//# sourceURL=webpack://gem-puzzle/./src/js/Popup.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _Game__WEBPACK_IMPORTED_MODULE_0__.default());\n\n//# sourceURL=webpack://gem-puzzle/./src/js/index.js?");

/***/ }),

/***/ "./src/js/layouts/images.js":
/*!**********************************!*\
  !*** ./src/js/layouts/images.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar arr = _toConsumableArray(Array(148).keys());\n\nvar images = arr.map(function (el) {\n  return \"\".concat(el + 1, \".jpg\");\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (images);\n\n//# sourceURL=webpack://gem-puzzle/./src/js/layouts/images.js?");

/***/ }),

/***/ "./src/js/utils/addZero.js":
/*!*********************************!*\
  !*** ./src/js/utils/addZero.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ addZero\n/* harmony export */ });\nfunction addZero(n) {\n  return n < 10 ? \"0\".concat(n) : \"\".concat(n);\n}\n\n//# sourceURL=webpack://gem-puzzle/./src/js/utils/addZero.js?");

/***/ }),

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/*! namespace exports */
/*! export ANIMATION_DURATION [provided] [no usage info] [missing usage info prevents renaming] */
/*! export BACK [provided] [no usage info] [missing usage info prevents renaming] */
/*! export BESTSCORES [provided] [no usage info] [missing usage info prevents renaming] */
/*! export CHANGING_SCREEN_WIDTH [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LAST_BEST_SCORE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export LOAD_GAME [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MAX_BOARD_SIZE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MIN_BOARD_SIZE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export NEW_GAME [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RESUME [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SAVE_GAME [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SETTINGS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SOUND_OFF [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SOUND_ON [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATE_PAUSE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATE_PLAYING [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATE_START [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STATE_PLAYING\": () => /* binding */ STATE_PLAYING,\n/* harmony export */   \"STATE_PAUSE\": () => /* binding */ STATE_PAUSE,\n/* harmony export */   \"STATE_START\": () => /* binding */ STATE_START,\n/* harmony export */   \"MIN_BOARD_SIZE\": () => /* binding */ MIN_BOARD_SIZE,\n/* harmony export */   \"MAX_BOARD_SIZE\": () => /* binding */ MAX_BOARD_SIZE,\n/* harmony export */   \"CHANGING_SCREEN_WIDTH\": () => /* binding */ CHANGING_SCREEN_WIDTH,\n/* harmony export */   \"SOUND_ON\": () => /* binding */ SOUND_ON,\n/* harmony export */   \"SOUND_OFF\": () => /* binding */ SOUND_OFF,\n/* harmony export */   \"ANIMATION_DURATION\": () => /* binding */ ANIMATION_DURATION,\n/* harmony export */   \"LAST_BEST_SCORE\": () => /* binding */ LAST_BEST_SCORE,\n/* harmony export */   \"BESTSCORES\": () => /* binding */ BESTSCORES,\n/* harmony export */   \"SETTINGS\": () => /* binding */ SETTINGS,\n/* harmony export */   \"RESUME\": () => /* binding */ RESUME,\n/* harmony export */   \"NEW_GAME\": () => /* binding */ NEW_GAME,\n/* harmony export */   \"LOAD_GAME\": () => /* binding */ LOAD_GAME,\n/* harmony export */   \"SAVE_GAME\": () => /* binding */ SAVE_GAME,\n/* harmony export */   \"BACK\": () => /* binding */ BACK\n/* harmony export */ });\nvar STATE_PLAYING = 'playing';\nvar STATE_PAUSE = 'Pause';\nvar STATE_START = 'start';\nvar MIN_BOARD_SIZE = 300;\nvar MAX_BOARD_SIZE = 400;\nvar CHANGING_SCREEN_WIDTH = 500;\nvar SOUND_ON = 'on';\nvar SOUND_OFF = 'off';\nvar ANIMATION_DURATION = 300;\nvar LAST_BEST_SCORE = 10;\nvar NEW_GAME = 'newGame';\nvar RESUME = 'Resume';\nvar SETTINGS = 'settings';\nvar BESTSCORES = 'bestScoreses';\nvar BACK = 'back';\nvar SAVE_GAME = 'saveGame';\nvar LOAD_GAME = 'loadGame';\n\n\n//# sourceURL=webpack://gem-puzzle/./src/js/utils/constants.js?");

/***/ }),

/***/ "./src/js/utils/create.js":
/*!********************************!*\
  !*** ./src/js/utils/create.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ create\n/* harmony export */ });\nfunction create(el, className, children) {\n  var element = null;\n\n  if (el) {\n    element = window.document.createElement(el); //    element = document.createElement(el)\n  }\n\n  if (className) {\n    element.classList.add(className);\n  }\n\n  if (children) {\n    element.innerHTML = children;\n  }\n\n  return element;\n}\n\n//# sourceURL=webpack://gem-puzzle/./src/js/utils/create.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 186:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n\n    if (!fileMap) {\n      return [src.replace('.js', '.css')];\n    }\n\n    return fileMap.split(',').map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), 'g');\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split('?')[0];\n  }\n\n  if (!isUrlRequest(url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf('.css') > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener('error', function () {\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href, {\n    stripWWW: false\n  }); // eslint-disable-next-line array-callback-return\n\n  src.some(function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^https?:/i.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log('no window.document found, will not HMR CSS');\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log('[HMR] Detected local css modules. Reload all css');\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://gem-puzzle/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 22:0-14 */
/***/ ((module) => {

eval("\n\n/* eslint-disable */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case '..':\n        accumulator.pop();\n        break;\n\n      case '.':\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  }, []).join('/');\n}\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf('//') !== -1 ? urlString.split('//')[0] + '//' : '';\n  var components = urlString.replace(new RegExp(protocol, 'i'), '').split('/');\n  var host = components[0].toLowerCase().replace(/\\.$/, '');\n  components[0] = '';\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://gem-puzzle/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, module.id, module, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1606609708485\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://gem-puzzle/./src/css/style.css?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => "" + __webpack_require__.h() + ".hot-update.json";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "c26e6d9d30a0428da9de"
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "gem-puzzle:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				const oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdategem_puzzle"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;