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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/deepindersingh/Documents/getting-started-webpack/Part-7/src/js/app.js: Unexpected token (9:6)\\n\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m\\u001b[36mimport\\u001b[39m getRandomColor from \\u001b[32m\\\"./utilities/randomColor\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  9 | \\u001b[39m\\u001b[36mconst\\u001b[39m \\u001b[33m=\\u001b[39m [\\u001b[32m'A'\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[32m'B'\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[32m'C'\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[32m'D'\\u001b[39m]\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[36mconst\\u001b[39m crossIcon \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'invoice__header__close-icon'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39mcrossIcon\\u001b[33m.\\u001b[39msrc \\u001b[33m=\\u001b[39m closeIcon\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m\\u001b[36mconst\\u001b[39m selectContactButton \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'select-contact-icon'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:766:17)\\n    at Parser.raiseWithData (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:759:17)\\n    at Parser.raise (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:753:17)\\n    at Parser.unexpected (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:8966:16)\\n    at Parser.parseIdentifierName (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11086:18)\\n    at Parser.parseIdentifier (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11059:23)\\n    at Parser.parseBindingAtom (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9330:17)\\n    at Parser.parseVarId (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:12118:20)\\n    at Parser.parseVar (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:12094:12)\\n    at Parser.parseVarStatement (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11906:10)\\n    at Parser.parseStatementContent (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11498:21)\\n    at Parser.parseStatement (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11431:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:12013:25)\\n    at Parser.parseBlockBody (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11999:10)\\n    at Parser.parseTopLevel (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11362:10)\\n    at Parser.parse (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:13045:10)\\n    at parse (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:13098:38)\\n    at parser (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/gensync/index.js:254:32)\\n    at /Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/gensync/index.js:266:13\\n    at async.call.result.err.err (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/gensync/index.js:216:11)\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

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