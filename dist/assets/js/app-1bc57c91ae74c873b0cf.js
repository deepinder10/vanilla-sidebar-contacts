/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/close-icon.svg":
/*!***********************************!*\
  !*** ./src/images/close-icon.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOS4xIDE3LjJsLTUuMy01LjMgNS4zLTUuMy0xLjgtMS44LTUuMyA1LjQtNS4zLTUuMy0xLjggMS43IDUuMyA1LjMtNS4zIDUuM0w2LjcgMTlsNS4zLTUuMyA1LjMgNS4zIDEuOC0xLjh6Ij48L3BhdGg+PC9zdmc+\"\n\n//# sourceURL=webpack:///./src/images/close-icon.svg?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/random */ \"./src/js/utilities/random.js\");\n/* harmony import */ var _utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/copyToClipboard */ \"./src/js/utilities/copyToClipboard.js\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/close-icon.svg */ \"./src/images/close-icon.svg\");\n/* harmony import */ var _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar copyIconElem = document.getElementById('invoice__header__close-icon');\ncopyIconElem.src = _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3___default.a;\n\ncopyIconElem.onclick = function () {\n  Object(_utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.getElementById('actual_password').innerText);\n  alert('Copied to clipboard!');\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var randomStringGenerator = new _utilities_random__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var randomString = \"Random String: <span id=\\\"actual_password\\\">\".concat(randomStringGenerator.generate(), \"</span>\");\n  document.getElementById('random_password').innerHTML = randomString;\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/utilities/copyToClipboard.js":
/*!*********************************************!*\
  !*** ./src/js/utilities/copyToClipboard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar copyToClipboard = function copyToClipboard(str) {\n  var el = document.createElement('textarea');\n  el.value = str;\n  el.setAttribute('readonly', '');\n  el.style.position = 'absolute';\n  el.style.left = '-9999px';\n  document.body.appendChild(el);\n  el.select();\n  document.execCommand('copy');\n  document.body.removeChild(el);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (copyToClipboard);\n\n//# sourceURL=webpack:///./src/js/utilities/copyToClipboard.js?");

/***/ }),

/***/ "./src/js/utilities/random.js":
/*!************************************!*\
  !*** ./src/js/utilities/random.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RandomStringGenerator; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RandomStringGenerator = /*#__PURE__*/function () {\n  function RandomStringGenerator() {\n    _classCallCheck(this, RandomStringGenerator);\n  }\n\n  _createClass(RandomStringGenerator, [{\n    key: \"generate\",\n    value: function generate() {\n      return this._rand() + this._rand();\n    }\n  }, {\n    key: \"_rand\",\n    value: function _rand() {\n      return Math.random().toString(36).substring(2, 15);\n    }\n  }]);\n\n  return RandomStringGenerator;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/utilities/random.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\n\\n    @include make-padding(1rem);\\n            ^\\n      No mixin named make-padding\\n      in /Users/deepindersingh/Documents/getting-started-webpack/Part-7/src/scss/app.scss (line 31, column 14)\\n    at /Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.callback (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/sass-loader/dist/index.js:89:7)\\n    at Object.done [as callback] (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/neo-async/async.js:8069:18)\\n    at options.error (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/node-sass/lib/index.js:294:32)\");\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/deepindersingh/Documents/getting-started-webpack/Part-7/src/js/app.js */\"./src/js/app.js\");\nmodule.exports = __webpack_require__(/*! /Users/deepindersingh/Documents/getting-started-webpack/Part-7/src/scss/app.scss */\"./src/scss/app.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/app.js_./src/scss/app.scss?");

/***/ })

/******/ });