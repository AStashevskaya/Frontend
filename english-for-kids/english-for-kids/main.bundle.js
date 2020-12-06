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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/index */ \"./src/js/index.js\");\n\n\n\n//# sourceURL=webpack://english-for-kids/./src/index.js?");

/***/ }),

/***/ "./src/js/CardComponent.js":
/*!*********************************!*\
  !*** ./src/js/CardComponent.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ CardComponent\n/* harmony export */ });\n/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create */ \"./src/js/utils/create.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ \"./src/js/utils/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable no-debugger */\n\n // import WordStatistic from './WordStatisticComponent';\n\nvar CardComponent = /*#__PURE__*/function () {\n  function CardComponent(category, options) {\n    _classCallCheck(this, CardComponent);\n\n    this.category = category;\n    var russian = options.russian,\n        english = options.english,\n        image = options.image,\n        sound = options.sound;\n    this.russian = russian;\n    this.english = english;\n    this.image = image;\n    this.audioSRC = sound;\n    this.statistics = null;\n    this.audio = null;\n    this.init();\n  }\n\n  _createClass(CardComponent, [{\n    key: \"init\",\n    value: function init() {\n      this.generateAudio();\n    }\n  }, {\n    key: \"generateAudio\",\n    value: function generateAudio() {\n      debugger;\n      this.audio = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('audio');\n      this.audio.setAttribute('src', \"./assets/sounds/\".concat(this.audioSRC));\n      this.audio.load();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return \" <div class=\\\"card\\\" data-word=\\\"\".concat(this.english, \"\\\" data-train=\\\"\").concat(this.category.layout.state === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_TRAIN ? 'true' : 'false', \"\\\" \").concat(this.category.layout.state === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_TRAIN ? '' : 'data-checked = \"false\"', \">\\n        <div class=\\\"card__front\\\">\\n            <div class=\\\"card__image\\\"><img src=\\\"assets/images/\").concat(this.image, \"\\\" alt=\\\"\").concat(this.english, \"\\\"></div>\\n            <div class=\\\"card__content\\\"><span class=\\\"card__text\\\">\").concat(this.english, \"</span><span class=\\\"turn\\\" data-turn=\\\"true\\\"><img src=\\\"assets/images/rotate.svg\\\" alt=\\\"turn\\\"></span></div>\\n        </div>\\n        <div class=\\\"card__back\\\">  <div class=\\\"card__image\\\"><img src=\\\"assets/images/\").concat(this.image, \"\\\" alt=\\\"\").concat(this.russian, \"\\\"></div>\\n        <div class=\\\"card__content\\\"><span class=\\\"card__text\\\">\").concat(this.russian, \"</span> </div>\\n    </div>\\n      </div>\");\n    }\n  }, {\n    key: \"handleClickEvent\",\n    value: function handleClickEvent(e) {\n      e.stopPropagation();\n\n      if (this.category.state === 'train') {\n        this.audio.play();\n      }\n    } // saveWord(){\n    //   word = this.getWord();\n    //   if(word){\n    //   }\n    // }\n    // getWord(word, arr) {\n    //  const obj = arr.\n    // }\n\n  }]);\n\n  return CardComponent;\n}();\n\n\n\n//# sourceURL=webpack://english-for-kids/./src/js/CardComponent.js?");

/***/ }),

/***/ "./src/js/CategoryComponent.js":
/*!*************************************!*\
  !*** ./src/js/CategoryComponent.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ CategoryComponent\n/* harmony export */ });\n/* harmony import */ var _CardComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardComponent */ \"./src/js/CardComponent.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ \"./src/js/utils/constants.js\");\n/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create */ \"./src/js/utils/create.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // import create from './utils/create';\n\nvar CategoryComponent = /*#__PURE__*/function () {\n  function CategoryComponent(layout, options) {\n    var _this = this;\n\n    _classCallCheck(this, CategoryComponent);\n\n    _defineProperty(this, \"handleClickTrainEvent\", function (e) {\n      var target = e.target;\n      var turn = target.closest('[alt=\"turn\"]');\n      if (target === turn) return;\n      _this.clickedCard = target.closest('[data-word]');\n      var cardName = _this.clickedCard.dataset.word;\n\n      var cardObj = _this.cardsComponents.find(function (el) {\n        return el.english === cardName;\n      });\n\n      cardObj.audio.play();\n\n      _this.saveclickToStorage('train'); // if (this.layout.state === constants.STATE_TRAIN) {\n      //   cardObj.audio.play();\n      // }\n\n    });\n\n    _defineProperty(this, \"getClickedCardAudio\", function (e) {\n      if (_this.layout.state === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_TRAIN) return;\n      if (_this.layout.playButton.dataset.btn === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.PLAY) return;\n      var target = e.target;\n      _this.clickedCard = target.closest('.card');\n      var word = _this.clickedCard.dataset.word;\n\n      var cardObj = _this.cards.find(function (el) {\n        return el.english === word;\n      });\n\n      _this.clickedCardAudio = cardObj.sound;\n\n      _this.checkIfCorrect();\n    });\n\n    this.layout = layout;\n    this.image = options.image;\n    this.title = options.title;\n    this.cards = options.cards;\n    this.cardsComponents = [];\n  }\n\n  _createClass(CategoryComponent, [{\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      this.cardsComponents = _toConsumableArray(this.cards).map(function (el) {\n        return new _CardComponent__WEBPACK_IMPORTED_MODULE_0__.default(_this2, el);\n      });\n\n      if (this.layout.state === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_PLAY) {\n        if (this.layout.playButton) {\n          this.layout.removePlayButton();\n        }\n\n        this.layout.createPlayButton();\n      }\n\n      this.layout.contentContainer.innerHTML = this.render();\n      this.initializeCardEvents();\n      this.generateAudioArray();\n      this.createAudiosforPlaying();\n    }\n  }, {\n    key: \"createAudiosforPlaying\",\n    value: function createAudiosforPlaying() {\n      this.currentAudio = (0,_utils_create__WEBPACK_IMPORTED_MODULE_2__.default)('audio');\n      this.currentAudioIdx = 0;\n      this.correctAudio = (0,_utils_create__WEBPACK_IMPORTED_MODULE_2__.default)('audio');\n      this.correctAudio.setAttribute('src', './assets/sounds/correct.mp3');\n      this.correctAudio.load();\n      this.winAudio = (0,_utils_create__WEBPACK_IMPORTED_MODULE_2__.default)('audio');\n      this.winAudio.setAttribute('src', './assets/sounds/success.mp3');\n      this.winAudio.load();\n      this.errorAudio = (0,_utils_create__WEBPACK_IMPORTED_MODULE_2__.default)('audio');\n      this.errorAudio.setAttribute('src', './assets/sounds/error.mp3');\n      this.errorAudio.load();\n    }\n  }, {\n    key: \"playGame\",\n    value: function playGame() {\n      this.currentAudioSrc = this.audiosArr[this.currentAudioIdx];\n      this.currentAudio.setAttribute('src', \"./assets/sounds/\".concat(this.currentAudioSrc));\n      this.currentAudio.load();\n      this.currentAudio.play();\n    }\n  }, {\n    key: \"checkIfCorrect\",\n    value: function checkIfCorrect() {\n      if (this.currentAudioSrc === this.clickedCardAudio) {\n        if (this.currentAudioIdx < this.audiosArr.length - 1) {\n          this.clickedCard.dataset.checked = 'true';\n          this.currentAudioIdx += 1;\n          this.removePlayEvents(this.clickedCard);\n          CategoryComponent.addStars(true);\n          this.correctAudio.play();\n          this.playGame();\n        } else if (this.currentAudioIdx === this.audiosArr.length - 1) {\n          this.clickedCard.dataset.checked = 'true';\n          this.removePlayEvents(this.clickedCard);\n          CategoryComponent.addStars(true);\n          this.currentAudioIdx += 1;\n          this.winAudio.play();\n        }\n\n        this.saveclickToStorage('correct');\n      } else {\n        this.errorAudio.play();\n        CategoryComponent.addStars(false);\n        this.saveclickToStorage('wrong');\n      }\n    }\n  }, {\n    key: \"saveclickToStorage\",\n    value: function saveclickToStorage(key) {\n      var word = this.clickedCard.dataset.word;\n      var wordsArrayJson = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATISTICS);\n      var wordsArray = JSON.parse(wordsArrayJson);\n      var wordObj = wordsArray.find(function (el) {\n        return el.word === word;\n      });\n      wordObj[key] += 1;\n      localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATISTICS, JSON.stringify(wordsArray));\n    }\n  }, {\n    key: \"initializeCardEvents\",\n    value: function initializeCardEvents() {\n      var _this3 = this;\n\n      var cards = _toConsumableArray(document.querySelectorAll('.card'));\n\n      cards.forEach(function (el) {\n        if (_this3.layout.state === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_TRAIN) {\n          _this3.addTrainEvents(el);\n        }\n\n        if (_this3.layout.state === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_PLAY) {\n          _this3.addPlayEvents(el);\n        }\n      });\n\n      var turnButtons = _toConsumableArray(document.querySelectorAll('.turn'));\n\n      turnButtons.forEach(function (el) {\n        el.addEventListener('click', CategoryComponent.turnCard.bind(CategoryComponent));\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var html = '';\n      this.cardsComponents.forEach(function (el) {\n        html += el.render();\n      });\n      return html;\n    }\n  }, {\n    key: \"deleteCards\",\n    value: function deleteCards() {\n      var _this4 = this;\n\n      var turnButtons = _toConsumableArray(document.querySelectorAll('.turn'));\n\n      turnButtons.forEach(function (el) {\n        el.removeEventListener('click', CategoryComponent.turnCard.bind(CategoryComponent));\n      });\n\n      var cards = _toConsumableArray(this.layout.contentContainer.children);\n\n      cards.forEach(function (el) {\n        if (_this4.layout.state === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_TRAIN) {\n          _this4.removeTrainEvents(el);\n        } else {\n          _this4.removePlayEvents(el);\n        }\n\n        _this4.layout.contentContainer.removeChild(el);\n      });\n    }\n  }, {\n    key: \"generateAudioArray\",\n    value: function generateAudioArray() {\n      this.audiosArr = _toConsumableArray(this.cards).map(function (el) {\n        return el.sound;\n      });\n      this.audiosArr = this.audiosArr.sort(function () {\n        return Math.random() - 0.5;\n      });\n    }\n  }, {\n    key: \"addTrainEvents\",\n    value: function addTrainEvents(el) {\n      el.addEventListener('click', this.handleClickTrainEvent);\n      el.addEventListener('mouseleave', CategoryComponent.handleMouseLeaveEvent);\n    }\n  }, {\n    key: \"removeTrainEvents\",\n    value: function removeTrainEvents(el) {\n      el.removeEventListener('click', this.handleClickTrainEvent);\n      el.removeEventListener('mouseleave', CategoryComponent.handleMouseLeaveEvent);\n    }\n  }, {\n    key: \"addPlayEvents\",\n    value: function addPlayEvents(el) {\n      el.addEventListener('click', this.getClickedCardAudio);\n    }\n  }, {\n    key: \"removePlayEvents\",\n    value: function removePlayEvents(el) {\n      el.removeEventListener('click', this.getClickedCardAudio);\n    }\n  }, {\n    key: \"repeatAudio\",\n    value: function repeatAudio() {\n      this.currentAudio.play();\n    }\n  }], [{\n    key: \"turnCard\",\n    value: function turnCard(e) {\n      var target = e.target;\n      var card = target.closest('.card');\n\n      var cardChildren = _toConsumableArray(card.children);\n\n      var cardFront = cardChildren.find(function (el) {\n        return el.className === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.FRONT_CLASS;\n      });\n      var cardBack = cardChildren.find(function (el) {\n        return el.className === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.BACK_CLASS;\n      });\n      cardFront.classList.add(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.FRONT_ROTATE);\n      cardBack.classList.add(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.BACK_ROTATE);\n    }\n  }, {\n    key: \"addStars\",\n    value: function addStars(correct) {\n      var starsContainer = document.querySelector('.answer-container');\n      var correctStar = (0,_utils_create__WEBPACK_IMPORTED_MODULE_2__.default)('img', 'star');\n      correctStar.setAttribute('src', 'assets/images/star-win.svg');\n      var incorrectStar = (0,_utils_create__WEBPACK_IMPORTED_MODULE_2__.default)('img', 'star');\n      incorrectStar.setAttribute('src', 'assets/images/star.svg');\n\n      if (correct) {\n        starsContainer.appendChild(correctStar);\n      } else {\n        starsContainer.appendChild(incorrectStar);\n      }\n    }\n  }]);\n\n  return CategoryComponent;\n}();\n\n_defineProperty(CategoryComponent, \"handleMouseLeaveEvent\", function (e) {\n  var card = e.target;\n\n  var cardChildren = _toConsumableArray(card.children);\n\n  var cardFront = cardChildren.find(function (el) {\n    return el.classList.contains(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.FRONT_CLASS);\n  });\n  var cardBack = cardChildren.find(function (el) {\n    return el.classList.contains(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.BACK_CLASS);\n  });\n  var frontClassesLength = cardFront.classList.length;\n  var backClassesLength = cardBack.classList.length;\n\n  if (frontClassesLength > 1 || backClassesLength > 1) {\n    cardFront.classList.remove(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.FRONT_ROTATE);\n    cardBack.classList.remove(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.BACK_ROTATE);\n  }\n});\n\n\n\n//# sourceURL=webpack://english-for-kids/./src/js/CategoryComponent.js?");

/***/ }),

/***/ "./src/js/Layout.js":
/*!**************************!*\
  !*** ./src/js/Layout.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Layout\n/* harmony export */ });\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/constants */ \"./src/js/utils/constants.js\");\n/* harmony import */ var _CategoryComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryComponent */ \"./src/js/CategoryComponent.js\");\n/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/create */ \"./src/js/utils/create.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/js/Menu.js\");\n/* harmony import */ var _Statistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Statistics */ \"./src/js/Statistics.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable max-len */\n\n\n\n\n\n\nvar Layout = /*#__PURE__*/function () {\n  function Layout(mode, categories) {\n    var _this = this;\n\n    _classCallCheck(this, Layout);\n\n    _defineProperty(this, \"handleClickLink\", function (e) {\n      e.stopPropagation();\n      var target = e.target;\n      var menu = document.querySelector('.burger-menu');\n\n      if (target.dataset.category === _utils_constants__WEBPACK_IMPORTED_MODULE_0__.MAIN) {\n        _this.deleteCategories();\n\n        _this.generateMainPage();\n      } else if (target.dataset.category === _utils_constants__WEBPACK_IMPORTED_MODULE_0__.STATISTICS) {\n        if (_this.currentPage === _utils_constants__WEBPACK_IMPORTED_MODULE_0__.MAIN) {\n          _this.deleteCategories();\n        } else {\n          _this.currentPage.deleteCards();\n        }\n\n        _this.currentPage = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.STATISTICS;\n        _this.title.innerHTML = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.STATISTICS;\n        _this.statisticTable = _this.statistic.render();\n\n        _this.contentContainer.appendChild(_this.statisticTable);\n\n        _this.statistic.initializeClicks();\n      } else {\n        _this.handleClickCategory(e);\n      }\n\n      menu.classList.remove('open');\n\n      _this.menu.constructor.changeActiveMenuLink(_this.currentPage);\n    });\n\n    _defineProperty(this, \"handleClickCategory\", function (e) {\n      var target = e.target;\n      var card = target.closest('[data-category]');\n      var clickedCategory = card.dataset.category;\n\n      if (_this.currentPage === _utils_constants__WEBPACK_IMPORTED_MODULE_0__.MAIN) {\n        _this.deleteCategories();\n      } else if (_this.currentPage === _utils_constants__WEBPACK_IMPORTED_MODULE_0__.STATISTICS) {\n        _this.contentContainer.innerHTML = '';\n      } else {\n        _this.currentPage.deleteCards();\n      }\n\n      var choosenCategory = _this.categoriesComponents.find(function (el) {\n        return el.title === clickedCategory;\n      });\n\n      _this.currentPage = choosenCategory;\n      _this.title.innerHTML = _this.currentPage.title;\n      choosenCategory.init();\n    });\n\n    _defineProperty(this, \"createRepeatButton\", function () {\n      _this.playButton.dataset.btn = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.REPEAT;\n      _this.playButton.innerHTML = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.REPEAT;\n\n      _this.playButton.removeEventListener('click', _this.currentPage.repeatAudio.bind(_this.currentPage));\n\n      _this.playButton.addEventListener('click', _this.currentPage.repeatAudio.bind(_this.currentPage));\n\n      _this.currentPage.playGame();\n    });\n\n    this.state = mode;\n    this.categories = categories;\n    this.contentContainer = document.querySelector('.content-container');\n    this.title = document.querySelector('#title');\n    this.init();\n  }\n\n  _createClass(Layout, [{\n    key: \"init\",\n    value: function init() {\n      var _this2 = this;\n\n      this.categoriesComponents = _toConsumableArray(this.categories).map(function (el) {\n        return new _CategoryComponent__WEBPACK_IMPORTED_MODULE_1__.default(_this2, el);\n      });\n      this.content = this.render();\n      this.generateLayout();\n    }\n  }, {\n    key: \"generateLayout\",\n    value: function generateLayout() {\n      this.menu = new _Menu__WEBPACK_IMPORTED_MODULE_3__.default(this);\n      this.statistic = new _Statistics__WEBPACK_IMPORTED_MODULE_4__.default(this);\n      this.generateMainPage();\n    }\n  }, {\n    key: \"generateMainPage\",\n    value: function generateMainPage() {\n      var _this3 = this;\n\n      this.contentContainer.innerHTML = this.content;\n      this.title.innerHTML = 'English for kids';\n      this.currentPage = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.MAIN;\n\n      var categories = _toConsumableArray(document.querySelectorAll('.category-card'));\n\n      categories.forEach(function (el) {\n        return el.addEventListener('click', _this3.handleClickCategory);\n      });\n    }\n  }, {\n    key: \"deleteCategories\",\n    value: function deleteCategories() {\n      var _this4 = this;\n\n      var categories = _toConsumableArray(this.contentContainer.children);\n\n      categories.forEach(function (el) {\n        el.removeEventListener('click', _this4.handleClickCategory);\n\n        _this4.contentContainer.removeChild(el);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this5 = this;\n\n      var html = '';\n      this.categoriesComponents.forEach(function (el) {\n        html += \"\\n      <div class=\\\"category-card\\\" data-category=\\\"\".concat(el.title, \"\\\" data-train=\\\"\").concat(_this5.state === _utils_constants__WEBPACK_IMPORTED_MODULE_0__.STATE_TRAIN ? 'true' : 'false', \"\\\">\\n      <div class=\\\"category-card__image\\\"><img src=\\\"./assets/images/\").concat(el.image, \"\\\" alt=\\\"\").concat(el.title, \"\\\"></div>\\n      <div class=\\\"category-card__title\\\">\").concat(el.title, \"</div>\\n      </div>\");\n      });\n      return html;\n    }\n  }, {\n    key: \"changeLayout\",\n    value: function changeLayout(mode) {\n      var _this6 = this;\n\n      this.state = mode;\n\n      var cards = _toConsumableArray(this.contentContainer.children);\n\n      var main = document.querySelector('.app-container');\n\n      if (this.state === _utils_constants__WEBPACK_IMPORTED_MODULE_0__.STATE_TRAIN) {\n        // this.contentContainer.classList.remove('playing');\n        main.classList.remove('playing');\n\n        if (this.playButton) {\n          this.removePlayButton();\n        }\n\n        if (this.currentPage !== _utils_constants__WEBPACK_IMPORTED_MODULE_0__.MAIN) {\n          cards.forEach(function (el) {\n            el.dataset.train = true;\n            el.removeAttribute('data-checked');\n\n            _this6.currentPage.removePlayEvents(el);\n\n            _this6.currentPage.addTrainEvents(el);\n          });\n        }\n      }\n\n      if (this.state === _utils_constants__WEBPACK_IMPORTED_MODULE_0__.STATE_PLAY) {\n        // this.contentContainer.classList.add('playing');\n        main.classList.add('playing');\n        var answerContainer = document.querySelector('.answer-container');\n        answerContainer.innerHTML = '';\n\n        if (this.currentPage !== _utils_constants__WEBPACK_IMPORTED_MODULE_0__.MAIN) {\n          this.currentPage.currentAudioIdx = 0;\n          cards.forEach(function (el) {\n            el.dataset.train = false;\n            el.dataset.checked = false;\n\n            _this6.currentPage.removeTrainEvents(el);\n\n            _this6.currentPage.addPlayEvents(el);\n          });\n\n          if (!this.playButton) {\n            this.createPlayButton();\n          } else {\n            this.removePlayButton();\n            this.createPlayButton();\n          }\n        }\n      }\n    }\n  }, {\n    key: \"createPlayButton\",\n    value: function createPlayButton() {\n      this.playButton = (0,_utils_create__WEBPACK_IMPORTED_MODULE_2__.default)('div', 'button__play', _utils_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY);\n      this.playButton.dataset.btn = _utils_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY;\n      this.playButton.addEventListener('click', this.createRepeatButton);\n      var container = document.querySelector('.title-container');\n      container.appendChild(this.playButton);\n    }\n  }, {\n    key: \"removePlayButton\",\n    value: function removePlayButton() {\n      var container = document.querySelector('.title-container');\n\n      if (this.playButton.dataset.btn === _utils_constants__WEBPACK_IMPORTED_MODULE_0__.PLAY) {\n        this.playButton.removeEventListener('click', this.createRepeatButtton);\n      } else {\n        this.playButton.removeEventListener('click', this.currentPage.repeatAudio.bind(this.currentPage));\n      }\n\n      container.removeChild(this.playButton);\n      this.playButton = null;\n    }\n  }]);\n\n  return Layout;\n}();\n\n\n\n//# sourceURL=webpack://english-for-kids/./src/js/Layout.js?");

/***/ }),

/***/ "./src/js/Menu.js":
/*!************************!*\
  !*** ./src/js/Menu.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Menu\n/* harmony export */ });\n/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create */ \"./src/js/utils/create.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ \"./src/js/utils/constants.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Menu = /*#__PURE__*/function () {\n  function Menu(layout) {\n    _classCallCheck(this, Menu);\n\n    this.layout = layout;\n    this.container = document.querySelector('.menu-list');\n    this.init();\n  }\n\n  _createClass(Menu, [{\n    key: \"init\",\n    value: function init() {\n      this.render();\n      this.initializeMenuClick();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var html = '';\n      this.layout.categories.forEach(function (el) {\n        html += \" <li><a href=\\\"#\\\" class=\\\"menu-list__link\\\" data-category=\\\"\".concat(el.title, \"\\\">\").concat(el.title, \"</a></li>\");\n      });\n      var linkTOmain = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('li');\n      linkTOmain.innerHTML = \"<a href=\\\"#\\\" class=\\\"menu-list__link menu-list__link_active\\\" data-category=\\\"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.MAIN, \"\\\">Main page</a>\");\n      var linkTOstaticticks = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('li');\n      linkTOstaticticks.innerHTML = \"<a href=\\\"#\\\" class=\\\"menu-list__link\\\" data-category=\\\"\".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATISTICS, \"\\\">Statistics</a>\");\n      this.container.innerHTML = html;\n      this.container.prepend(linkTOmain);\n      this.container.appendChild(linkTOstaticticks);\n    }\n  }, {\n    key: \"initializeMenuClick\",\n    value: function initializeMenuClick() {\n      var _this = this;\n\n      var menuLinks = _toConsumableArray(document.querySelectorAll('.menu-list__link'));\n\n      menuLinks.forEach(function (el) {\n        return el.addEventListener('click', _this.layout.handleClickLink);\n      });\n    }\n  }], [{\n    key: \"changeActiveMenuLink\",\n    value: function changeActiveMenuLink(currentPage) {\n      var activeLink = document.querySelector('.menu-list__link_active');\n      activeLink.classList.remove('menu-list__link_active');\n      var newActiveLink = document.querySelector(\"a[data-category=\\\"\".concat(currentPage.title || currentPage, \"\\\"]\"));\n      newActiveLink.classList.add('menu-list__link_active');\n    }\n  }]);\n\n  return Menu;\n}();\n\n\n\n//# sourceURL=webpack://english-for-kids/./src/js/Menu.js?");

/***/ }),

/***/ "./src/js/Mode.js":
/*!************************!*\
  !*** ./src/js/Mode.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Mode\n/* harmony export */ });\n/* harmony import */ var _data_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/categories */ \"./src/js/data/categories.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants */ \"./src/js/utils/constants.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ \"./src/js/Layout.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Mode = /*#__PURE__*/function () {\n  function Mode() {\n    _classCallCheck(this, Mode);\n\n    this.mode = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_TRAIN;\n    this.layout = new _Layout__WEBPACK_IMPORTED_MODULE_2__.default(this.mode, _data_categories__WEBPACK_IMPORTED_MODULE_0__.default);\n    this.indicator = document.querySelector('input');\n    this.initClickEvents();\n  }\n\n  _createClass(Mode, [{\n    key: \"initClickEvents\",\n    value: function initClickEvents() {\n      var switcher = document.querySelector('.switch');\n      switcher.addEventListener('mousedown', this.checkMode.bind(this));\n    }\n  }, {\n    key: \"checkMode\",\n    value: function checkMode() {\n      // eslint-disable-next-line no-console\n      console.log(this.indicator);\n\n      if (this.indicator.checked) {\n        this.mode = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_TRAIN;\n        this.layout.changeLayout(this.mode); // eslint-disable-next-line no-console\n\n        console.log('to train');\n      } else {\n        this.mode = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STATE_PLAY;\n        this.layout.changeLayout(this.mode); // eslint-disable-next-line no-console\n\n        console.log('to play');\n      }\n    }\n  }]);\n\n  return Mode;\n}();\n\n\n\n//# sourceURL=webpack://english-for-kids/./src/js/Mode.js?");

/***/ }),

/***/ "./src/js/Statistics.js":
/*!******************************!*\
  !*** ./src/js/Statistics.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Statistic\n/* harmony export */ });\n/* harmony import */ var _utils_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create */ \"./src/js/utils/create.js\");\n/* harmony import */ var _utils_uppercase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/uppercase */ \"./src/js/utils/uppercase.js\");\n/* harmony import */ var _WordStatisticComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WordStatisticComponent */ \"./src/js/WordStatisticComponent.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/constants */ \"./src/js/utils/constants.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable no-console */\n\n\n\n // import * as constants from './utils/constants';\n\nvar Statistic = /*#__PURE__*/function () {\n  function Statistic(layout) {\n    var _this = this;\n\n    _classCallCheck(this, Statistic);\n\n    _defineProperty(this, \"sortWordsDown\", function (e) {\n      var target = e.target;\n      var clickedBtn = target.closest('[data-id]');\n      var sortAttribute = clickedBtn.dataset.id;\n      console.log(sortAttribute);\n\n      var newArrWords = _toConsumableArray(_this.wordsArray);\n\n      newArrWords.sort(function (a, b) {\n        if (a[sortAttribute] < b[sortAttribute]) {\n          return -1;\n        }\n\n        return 1;\n      });\n\n      _this.deleteCells();\n\n      _this.renderCells(newArrWords);\n\n      console.log(newArrWords);\n    });\n\n    _defineProperty(this, \"sortWordsUp\", function (e) {\n      var target = e.target;\n      var clickedBtn = target.closest('[data-id]');\n      var sortAttribute = clickedBtn.dataset.id;\n\n      var newArrWords = _toConsumableArray(_this.wordsArray);\n\n      newArrWords.sort(function (a, b) {\n        if (a[sortAttribute] > b[sortAttribute]) {\n          return -1;\n        }\n\n        return 1;\n      });\n\n      _this.deleteCells();\n\n      _this.renderCells(newArrWords);\n\n      console.log(newArrWords);\n    });\n\n    this.layout = layout;\n    this.categories = _toConsumableArray(layout.categoriesComponents);\n    this.wordsArray = [];\n    this.table = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('table', 'statistics__table');\n    this.heading = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('tr', 'statistics__heading');\n    this.cardsContainer = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('tbody');\n    this.init();\n  }\n\n  _createClass(Statistic, [{\n    key: \"init\",\n    value: function init() {\n      // this.categories = [...this.layout.categories];\n      this.getfromStorage();\n      this.renderHeading(); // this.render();\n    }\n  }, {\n    key: \"renderHeading\",\n    value: function renderHeading() {\n      var _this2 = this;\n\n      var words = _toConsumableArray(this.wordsArray);\n\n      var wordObj = words[0];\n      var wordsKeys = Object.keys(wordObj);\n      wordsKeys.push('percent');\n      wordsKeys.forEach(function (key) {\n        var word = key;\n        var cell = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('td');\n        cell.innerHTML = \"<span class=\\\"statistics__cell-wrapper\\\">\\n                        <span class=\\\"title\\\">\".concat((0,_utils_uppercase__WEBPACK_IMPORTED_MODULE_1__.default)(word), \"</span><span class=\\\"statistics__buttons-wrapper\\\" data-id=\\\"\").concat(word, \"\\\">\\n                        <span class=\\\"up\\\" data-up='\").concat(word, \"'><img src=\\\"./assets/images/up-arrow.svg\\\" alt=\\\"up-arrow\\\"></span>\\n                        <span class=\\\"down\\\" data-down='\").concat(word, \"'><img src=\\\"./assets/images/down-arrow.svg\\\" alt=\\\"down-arrow\\\"></span>\\n                        </span>\\n                        </span>\");\n\n        _this2.heading.appendChild(cell);\n      });\n      this.table.appendChild(this.heading);\n    }\n  }, {\n    key: \"initializeClicks\",\n    value: function initializeClicks() {\n      var _this3 = this;\n\n      var arrowsUp = document.querySelectorAll('[data-up]');\n      arrowsUp.forEach(function (el) {\n        return el.addEventListener('click', _this3.sortWordsUp);\n      });\n      var arrowsDown = document.querySelectorAll('[data-down]');\n      arrowsDown.forEach(function (el) {\n        return el.addEventListener('click', _this3.sortWordsDown);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.getfromStorage();\n      this.renderCells(this.wordsArray); // this.wordsArray.forEach((word) => {\n      //   let percent = (word.correct / (word.correct + word.wrong)) * 100;\n      //   percent = Math.floor(percent) || 0;\n      //   const row = create('tr');\n      //   row.innerHTML = `<td>${word.category}</td>\n      //   <td>${word.word}</td>\n      //   <td>${word.translation}</td>\n      //   <td>${word.train}</td>\n      //   <td>${word.correct}</td>\n      //   <td>${word.wrong}</td>\n      //   <td>${percent}%</td> `;\n      //   this.cardsContainer.appendChild(row);\n      // });\n\n      this.table.appendChild(this.cardsContainer);\n      return this.table;\n    }\n  }, {\n    key: \"getfromStorage\",\n    value: function getfromStorage() {\n      var statistic = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATISTICS);\n\n      if (statistic) {\n        this.wordsArray = _toConsumableArray(JSON.parse(statistic));\n      } else {\n        this.saveToStorage();\n      }\n    }\n  }, {\n    key: \"saveToStorage\",\n    value: function saveToStorage() {\n      var _this4 = this;\n\n      this.categories.forEach(function (category) {\n        category.cards.forEach(function (card) {\n          _this4.wordsArray.push(new _WordStatisticComponent__WEBPACK_IMPORTED_MODULE_2__.default(card, category));\n        });\n      });\n      var wordsJson = JSON.stringify(this.wordsArray);\n      localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.STATISTICS, wordsJson);\n    }\n  }, {\n    key: \"renderCells\",\n    value: function renderCells(arr) {\n      var _this5 = this;\n\n      this.sortedArr = _toConsumableArray(arr);\n      this.sortedArr.forEach(function (word) {\n        var percent = word.correct / (word.correct + word.wrong) * 100;\n        percent = Math.floor(percent) || 0;\n        var row = (0,_utils_create__WEBPACK_IMPORTED_MODULE_0__.default)('tr');\n        row.innerHTML = \"<td>\".concat(word.category, \"</td>\\n      <td>\").concat(word.word, \"</td>\\n      <td>\").concat(word.translation, \"</td>\\n      <td>\").concat(word.train, \"</td>\\n      <td>\").concat(word.correct, \"</td>\\n      <td>\").concat(word.wrong, \"</td>\\n      <td>\").concat(percent, \"%</td> \");\n\n        _this5.cardsContainer.appendChild(row);\n      });\n    }\n  }, {\n    key: \"deleteCells\",\n    value: function deleteCells() {\n      var _this6 = this;\n\n      var tableRows = _toConsumableArray(this.cardsContainer.children);\n\n      tableRows.forEach(function (el) {\n        if (!el.classList.contains('statistics__heading')) {\n          _this6.cardsContainer.removeChild(el);\n        }\n      });\n    }\n  }]);\n\n  return Statistic;\n}();\n\n\n\n//# sourceURL=webpack://english-for-kids/./src/js/Statistics.js?");

/***/ }),

/***/ "./src/js/WordStatisticComponent.js":
/*!******************************************!*\
  !*** ./src/js/WordStatisticComponent.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ WordStatistic\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar WordStatistic = function WordStatistic(word, category) {\n  _classCallCheck(this, WordStatistic);\n\n  this.category = category.title;\n  this.word = word.english;\n  this.translation = word.russian;\n  this.train = 0;\n  this.correct = 0;\n  this.wrong = 0;\n};\n\n\n\n//# sourceURL=webpack://english-for-kids/./src/js/WordStatisticComponent.js?");

/***/ }),

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar menu = document.querySelector('.burger-menu');\nmenu.addEventListener('click', function (e) {\n  e.stopPropagation();\n  menu.classList.toggle('open');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://english-for-kids/./src/js/burger.js?");

/***/ }),

/***/ "./src/js/data/categories.js":
/*!***********************************!*\
  !*** ./src/js/data/categories.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar categories = [{\n  title: 'Weather',\n  image: 'weather.jpg',\n  cards: [{\n    russian: 'день',\n    english: 'day',\n    image: 'day.jpg',\n    sound: 'day.mp3'\n  }, {\n    russian: 'ночь',\n    english: 'night',\n    image: 'night.jpg',\n    sound: 'night.mp3'\n  }, {\n    russian: 'ветер',\n    english: 'wind',\n    image: 'wind.jpg',\n    sound: 'wind.mp3'\n  }, {\n    russian: 'солнце',\n    english: 'sun',\n    image: 'sun.jpg',\n    sound: 'sun.mp3'\n  }, {\n    russian: 'ураган',\n    english: 'storm',\n    image: 'storm.jpg',\n    sound: 'storm.mp3'\n  }, {\n    russian: 'облако',\n    english: 'cloud',\n    image: 'cloud.jpg',\n    sound: 'cloud.mp3'\n  }, {\n    russian: 'дождь',\n    english: 'rain',\n    image: 'rain.jpg',\n    sound: 'rain.mp3'\n  }, {\n    russian: 'снег',\n    english: 'snow',\n    image: 'snow.jpg',\n    sound: 'snow.mp3'\n  }]\n}, {\n  title: 'Animals',\n  image: 'animals.jpg',\n  cards: [{\n    russian: 'тигр',\n    english: 'tiger',\n    image: 'tiger.jpg',\n    sound: 'tiger.mp3'\n  }, {\n    russian: 'мышка',\n    english: 'mouse',\n    image: 'mouse.jpg',\n    sound: 'mouse.mp3'\n  }, {\n    russian: 'обезьянка',\n    english: 'monkey',\n    image: 'monkey.jpg',\n    sound: 'monkey.mp3'\n  }, {\n    russian: 'жираф',\n    english: 'giraffe',\n    image: 'giraffe.jpg',\n    sound: 'giraffe.mp3'\n  }, {\n    russian: 'лиса',\n    english: 'fox',\n    image: 'fox.jpg',\n    sound: 'fox.mp3'\n  }, {\n    russian: 'слон',\n    english: 'elephant',\n    image: 'elephant.jpg',\n    sound: 'elephant.mp3'\n  }, {\n    russian: 'медведь',\n    english: 'bear',\n    image: 'bear.jpg',\n    sound: 'bear.mp3'\n  }, {\n    russian: 'свинка',\n    english: 'pig',\n    image: 'pig.jpg',\n    sound: 'pig.mp3'\n  }]\n}, {\n  title: 'Fruits',\n  image: 'fruits.jpg',\n  cards: [{\n    russian: 'яблоко',\n    english: 'apple',\n    image: 'apple.jpg',\n    sound: 'apple.mp3'\n  }, {\n    russian: 'банан',\n    english: 'banana',\n    image: 'banana.jpg',\n    sound: 'banana.mp3'\n  }, {\n    russian: 'инжир',\n    english: 'fig',\n    image: 'fig.jpg',\n    sound: 'fig.mp3'\n  }, {\n    russian: 'манго',\n    english: 'mango',\n    image: 'mango.jpg',\n    sound: 'mango.mp3'\n  }, {\n    russian: 'дыня',\n    english: 'melon',\n    image: 'melon.jpg',\n    sound: 'melon.mp3'\n  }, {\n    russian: 'груша',\n    english: 'pear',\n    image: 'pear.jpg',\n    sound: 'pear.mp3'\n  }, {\n    russian: 'ананас',\n    english: 'pineapple',\n    image: 'pineapple.jpg',\n    sound: 'pineapple.mp3'\n  }, {\n    russian: 'слива',\n    english: 'plum',\n    image: 'plum.jpg',\n    sound: 'plum.mp3'\n  }]\n}, {\n  title: 'Furniture',\n  image: 'furniture.jpg',\n  cards: [{\n    russian: 'растение',\n    english: 'plant',\n    image: 'plant.jpg',\n    sound: 'plant.mp3'\n  }, {\n    russian: 'ковер',\n    english: 'carpet',\n    image: 'carpet.jpg',\n    sound: 'carpet.mp3'\n  }, {\n    russian: 'кровать',\n    english: 'bed',\n    image: 'bed.jpg',\n    sound: 'bed.mp3'\n  }, {\n    russian: 'стул',\n    english: 'chair',\n    image: 'chair.jpg',\n    sound: 'chair.mp3'\n  }, {\n    russian: 'часы',\n    english: 'clock',\n    image: 'clock.jpg',\n    sound: 'clock.mp3'\n  }, {\n    russian: 'диван',\n    english: 'sofa',\n    image: 'sofa.jpg',\n    sound: 'sofa.mp3'\n  }, {\n    russian: 'стол',\n    english: 'table',\n    image: 'table.jpg',\n    sound: 'table.mp3'\n  }, {\n    russian: 'кресло',\n    english: 'armchair',\n    image: 'armchair.jpg',\n    sound: 'armchair.mp3'\n  }]\n}, {\n  title: 'Clothes',\n  image: 'clothes.jpg',\n  cards: [{\n    russian: 'джинсы',\n    english: 'jeans',\n    image: 'jeans.jpg',\n    sound: 'jeans.mp3'\n  }, {\n    russian: 'майка',\n    english: 't-shirt',\n    image: 't-shirt.jpg',\n    sound: 't-shirt.mp3'\n  }, {\n    russian: 'шарф',\n    english: 'scarf',\n    image: 'scarf.jpg',\n    sound: 'scarf.mp3'\n  }, {\n    russian: 'сумка',\n    english: 'bag',\n    image: 'bag.jpg',\n    sound: 'bag.mp3'\n  }, {\n    russian: 'носки',\n    english: 'socks',\n    image: 'socks.jpg',\n    sound: 'socks.mp3'\n  }, {\n    russian: 'рубашка',\n    english: 'shirt',\n    image: 'shirt.jpg',\n    sound: 'shirt.mp3'\n  }, {\n    russian: 'ботинки',\n    english: 'boots',\n    image: 'boots.jpg',\n    sound: 'boots.mp3'\n  }, {\n    russian: 'свитер',\n    english: 'sweater',\n    image: 'sweater.jpg',\n    sound: 'sweater.mp3'\n  }]\n}, {\n  title: 'Vegetables',\n  image: 'fruits.jpg',\n  cards: [{\n    russian: 'помидор',\n    english: 'tomato',\n    image: 'tomato.jpg',\n    sound: 'tomato.mp3'\n  }, {\n    russian: 'тыква',\n    english: 'pumpkin',\n    image: 'pumpkin.jpg',\n    sound: 'pumpkin.mp3'\n  }, {\n    russian: 'спаржа',\n    english: 'asparagus',\n    image: 'asparagus.jpg',\n    sound: 'asparagus.mp3'\n  }, {\n    russian: 'цукини',\n    english: 'zucchini',\n    image: 'zucchini.jpg',\n    sound: 'zucchini.mp3'\n  }, {\n    russian: 'лук',\n    english: 'onion',\n    image: 'onion.jpg',\n    sound: 'onion.mp3'\n  }, {\n    russian: 'кукуруза',\n    english: 'corn',\n    image: 'corn.jpg',\n    sound: 'corn.mp3'\n  }, {\n    russian: 'авакадо',\n    english: 'avacado',\n    image: 'avacado.jpg',\n    sound: 'avacado.mp3'\n  }, {\n    russian: 'морковь',\n    english: 'carrot',\n    image: 'carrot.jpg',\n    sound: 'carrot.mp3'\n  }]\n}, {\n  title: 'Transport',\n  image: 'scooter.jpg',\n  cards: [{\n    russian: 'автобус',\n    english: 'bus',\n    image: 'bus.jpg',\n    sound: 'bus.mp3'\n  }, {\n    russian: 'машина',\n    english: 'car',\n    image: 'car.jpg',\n    sound: 'car.mp3'\n  }, {\n    russian: 'поезд',\n    english: 'train',\n    image: 'train.jpg',\n    sound: 'train.mp3'\n  }, {\n    russian: 'лодка',\n    english: 'boat',\n    image: 'boat.jpg',\n    sound: 'boat.mp3'\n  }, {\n    russian: 'велосипед',\n    english: 'bike',\n    image: 'bike.jpg',\n    sound: 'bike.mp3'\n  }, {\n    russian: 'мотоцикл',\n    english: 'motobike',\n    image: 'motobike.jpg',\n    sound: 'motobike.mp3'\n  }, {\n    russian: 'самолет',\n    english: 'plane',\n    image: 'plane.jpg',\n    sound: 'plane.mp3'\n  }, {\n    russian: 'воздушный шар',\n    english: 'balloon',\n    image: 'balloon.jpg',\n    sound: 'balloon.mp3'\n  }]\n}, {\n  title: 'Dishware',\n  image: 'dishware.jpg',\n  cards: [{\n    russian: 'ложка',\n    english: 'spoon',\n    image: 'spoon.jpg',\n    sound: 'spoon.mp3'\n  }, {\n    russian: 'тарелка',\n    english: 'plate',\n    image: 'plate.jpg',\n    sound: 'plate.mp3'\n  }, {\n    russian: 'нож',\n    english: 'knife',\n    image: 'knife.jpg',\n    sound: 'knife.mp3'\n  }, {\n    russian: 'кастрюля',\n    english: 'pan',\n    image: 'pan.jpg',\n    sound: 'pan.mp3'\n  }, {\n    russian: 'кружка',\n    english: 'cup',\n    image: 'cup.jpg',\n    sound: 'cup.mp3'\n  }, {\n    russian: 'вилка',\n    english: 'fork',\n    image: 'fork.jpg',\n    sound: 'fork.mp3'\n  }, {\n    russian: 'миска',\n    english: 'bowl',\n    image: 'bowl.jpg',\n    sound: 'bowl.mp3'\n  }, {\n    russian: 'чайник',\n    english: 'kettle',\n    image: 'kettle.jpg',\n    sound: 'kettle.mp3'\n  }]\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categories);\n\n//# sourceURL=webpack://english-for-kids/./src/js/data/categories.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ \"./src/js/burger.js\");\n/* harmony import */ var _Mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mode */ \"./src/js/Mode.js\");\n\n // import onNavigate from './utils/onNavigate';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _Mode__WEBPACK_IMPORTED_MODULE_1__.default());\n\n//# sourceURL=webpack://english-for-kids/./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/*! namespace exports */
/*! export BACK_CLASS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export BACK_ROTATE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export CLICK [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FRONT_CLASS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FRONT_ROTATE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MAIN [provided] [no usage info] [missing usage info prevents renaming] */
/*! export PLAY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export REPEAT [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATE_PLAY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATE_TRAIN [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STATISTICS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export routes [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STATE_PLAY\": () => /* binding */ STATE_PLAY,\n/* harmony export */   \"STATE_TRAIN\": () => /* binding */ STATE_TRAIN,\n/* harmony export */   \"routes\": () => /* binding */ routes,\n/* harmony export */   \"MAIN\": () => /* binding */ MAIN,\n/* harmony export */   \"STATISTICS\": () => /* binding */ STATISTICS,\n/* harmony export */   \"FRONT_ROTATE\": () => /* binding */ FRONT_ROTATE,\n/* harmony export */   \"BACK_ROTATE\": () => /* binding */ BACK_ROTATE,\n/* harmony export */   \"BACK_CLASS\": () => /* binding */ BACK_CLASS,\n/* harmony export */   \"FRONT_CLASS\": () => /* binding */ FRONT_CLASS,\n/* harmony export */   \"PLAY\": () => /* binding */ PLAY,\n/* harmony export */   \"REPEAT\": () => /* binding */ REPEAT,\n/* harmony export */   \"CLICK\": () => /* binding */ CLICK\n/* harmony export */ });\nvar STATE_TRAIN = 'Train';\nvar STATE_PLAY = 'Play';\nvar MAIN = 'main';\nvar STATISTICS = 'statistics';\nvar BACK_ROTATE = 'back-rotate';\nvar FRONT_ROTATE = 'front-rotate';\nvar BACK_CLASS = 'card__back';\nvar FRONT_CLASS = 'card__front';\nvar PLAY = 'play';\nvar REPEAT = 'repeat';\nvar CLICK = 'Click';\nvar routes = {};\n\n\n//# sourceURL=webpack://english-for-kids/./src/js/utils/constants.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ create\n/* harmony export */ });\nfunction create(el, className, children) {\n  var element = null;\n\n  if (el) {\n    element = window.document.createElement(el); //    element = document.createElement(el)\n  }\n\n  if (className) {\n    element.classList.add(className);\n  }\n\n  if (children) {\n    element.innerHTML = children;\n  }\n\n  return element;\n}\n\n//# sourceURL=webpack://english-for-kids/./src/js/utils/create.js?");

/***/ }),

/***/ "./src/js/utils/uppercase.js":
/*!***********************************!*\
  !*** ./src/js/utils/uppercase.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ uppercase\n/* harmony export */ });\nfunction uppercase(word) {\n  var newWord = word.split('');\n  newWord[0] = newWord[0].toUpperCase();\n  newWord = newWord.join('');\n  return newWord;\n}\n\n//# sourceURL=webpack://english-for-kids/./src/js/utils/uppercase.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 186:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n\n    if (!fileMap) {\n      return [src.replace('.js', '.css')];\n    }\n\n    return fileMap.split(',').map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), 'g');\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split('?')[0];\n  }\n\n  if (!isUrlRequest(url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf('.css') > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener('error', function () {\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href, {\n    stripWWW: false\n  }); // eslint-disable-next-line array-callback-return\n\n  src.some(function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^https?:/i.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log('no window.document found, will not HMR CSS');\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log('[HMR] Detected local css modules. Reload all css');\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://english-for-kids/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 22:0-14 */
/***/ ((module) => {

eval("\n\n/* eslint-disable */\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case '..':\n        accumulator.pop();\n        break;\n\n      case '.':\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  }, []).join('/');\n}\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf('//') !== -1 ? urlString.split('//')[0] + '//' : '';\n  var components = urlString.replace(new RegExp(protocol, 'i'), '').split('/');\n  var host = components[0].toLowerCase().replace(/\\.$/, '');\n  components[0] = '';\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://english-for-kids/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, module.id, module, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1607277408050\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://english-for-kids/./src/css/style.css?");

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
/******/ 		__webpack_require__.h = () => "d63899eb1ce42625d339"
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
/******/ 		var dataWebpackPrefix = "english-for-kids:";
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
/******/ 		__webpack_require__.p = "";
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
/******/ 		self["webpackHotUpdateenglish_for_kids"] = (chunkId, moreModules, runtime) => {
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