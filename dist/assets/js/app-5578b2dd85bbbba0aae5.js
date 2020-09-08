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

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/deepindersingh/Documents/getting-started-webpack/Part-7/src/js/app.js: Unexpected token (13:27)\\n\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m  \\u001b[36mconst\\u001b[39m recentContacts \\u001b[33m=\\u001b[39m contacts\\u001b[33m.\\u001b[39mslice(\\u001b[35m10\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m  \\u001b[36mfor\\u001b[39m (let item of recentContacts) {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 13 | \\u001b[39m    createContactCard(item\\u001b[33m.\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m  }\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m\\u001b[36mconst\\u001b[39m createContactCard \\u001b[33m=\\u001b[39m (name) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n    at Parser._raise (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:766:17)\\n    at Parser.raiseWithData (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:759:17)\\n    at Parser.raise (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:753:17)\\n    at Parser.unexpected (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:8966:16)\\n    at Parser.parseIdentifierName (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11086:18)\\n    at Parser.parseIdentifier (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11059:23)\\n    at Parser.parseMaybePrivateName (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:10363:19)\\n    at Parser.parseMember (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9910:63)\\n    at Parser.parseSubscript (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9898:19)\\n    at Parser.parseSubscripts (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9867:19)\\n    at Parser.parseExprSubscripts (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9850:17)\\n    at Parser.parseUpdate (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9824:21)\\n    at Parser.parseMaybeUnary (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9813:17)\\n    at Parser.parseExprOps (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9683:23)\\n    at Parser.parseMaybeConditional (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9657:23)\\n    at Parser.parseMaybeAssign (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9620:21)\\n    at /Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9586:39\\n    at Parser.allowInAnd (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11303:12)\\n    at Parser.parseMaybeAssignAllowIn (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9586:17)\\n    at Parser.parseExprListItem (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11051:18)\\n    at Parser.parseCallExpressionArguments (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:10053:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9960:29)\\n    at Parser.parseSubscript (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9896:19)\\n    at Parser.parseSubscripts (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9867:19)\\n    at Parser.parseExprSubscripts (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9850:17)\\n    at Parser.parseUpdate (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9824:21)\\n    at Parser.parseMaybeUnary (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9813:17)\\n    at Parser.parseExprOps (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9683:23)\\n    at Parser.parseMaybeConditional (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9657:23)\\n    at Parser.parseMaybeAssign (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9620:21)\\n    at Parser.parseExpressionBase (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9564:23)\\n    at /Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9558:39\\n    at Parser.allowInAnd (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11303:12)\\n    at Parser.parseExpression (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:9558:17)\\n    at Parser.parseStatementContent (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11562:23)\\n    at Parser.parseStatement (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/@babel/parser/lib/index.js:11431:17)\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

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