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

/***/ "./src/images/back-icon.svg":
/*!**********************************!*\
  !*** ./src/images/back-icon.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNTQgMzBoLTM5Ljg5OWwxNS4yNzgtMTQuNTUyYy44LS43NjIuODMxLTIuMDI4LjA2OS0yLjgyOC0uNzYxLS43OTktMi4wMjctLjgzMS0yLjgyOC0uMDY5bC0xNy40NDggMTYuNjJjLS43NTUuNzU2LTEuMTcyIDEuNzYtMS4xNzIgMi44MjkgMCAxLjA2OC40MTcgMi4wNzMgMS4yMDcgMi44NjJsMTcuNDE0IDE2LjU4NmMuMzg3LjM2OS44ODMuNTUyIDEuMzc5LjU1Mi41MjggMCAxLjA1Ni0uMjA4IDEuNDQ5LS42MjEuNzYyLS44LjczMS0yLjA2NS0uMDY5LTIuODI3bC0xNS4zNDItMTQuNTUyaDM5Ljk2MmMxLjEwNCAwIDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6Ii8+PC9zdmc+\"\n\n//# sourceURL=webpack:///./src/images/back-icon.svg?");

/***/ }),

/***/ "./src/images/close-icon.svg":
/*!***********************************!*\
  !*** ./src/images/close-icon.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOS4xIDE3LjJsLTUuMy01LjMgNS4zLTUuMy0xLjgtMS44LTUuMyA1LjQtNS4zLTUuMy0xLjggMS43IDUuMyA1LjMtNS4zIDUuM0w2LjcgMTlsNS4zLTUuMyA1LjMgNS4zIDEuOC0xLjh6Ij48L3BhdGg+PC9zdmc+\"\n\n//# sourceURL=webpack:///./src/images/close-icon.svg?");

/***/ }),

/***/ "./src/images/contact-icon.svg":
/*!*************************************!*\
  !*** ./src/images/contact-icon.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNGRDEwNEQiPjxnPjxwYXRoIGQ9Im00NDggMGgtMzUyYy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1djY2aC0xN2MtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXM2LjcxNiAxNSAxNSAxNWgxN3Y1MGgtMTdjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTVoMTd2NTBoLTE3Yy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1czYuNzE2IDE1IDE1IDE1aDE3djUwaC0xN2MtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXM2LjcxNiAxNSAxNSAxNWgxN3Y1MGgtMTdjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTVoMTd2NjZjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWgzNTJjOC4yODQgMCAxNS02LjcxNiAxNS0xNXYtNDgyYzAtOC4yODQtNi43MTYtMTUtMTUtMTV6bS0xNSA0ODJoLTMyMnYtNTFoMTdjOC4yODQgMCAxNS02LjcxNiAxNS0xNXMtNi43MTYtMTUtMTUtMTVoLTE3di01MGgxN2M4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02LjcxNi0xNS0xNS0xNWgtMTd2LTUwaDE3YzguMjg0IDAgMTUtNi43MTYgMTUtMTVzLTYuNzE2LTE1LTE1LTE1aC0xN3YtNTBoMTdjOC4yODQgMCAxNS02LjcxNiAxNS0xNXMtNi43MTYtMTUtMTUtMTVoLTE3di01MGgxN2M4LjI4NCAwIDE1LTYuNzE2IDE1LTE1cy02LjcxNi0xNS0xNS0xNWgtMTd2LTUxaDMyMnoiLz48cGF0aCBkPSJtMTc3IDM2MGMwIDguMjg0IDYuNzE2IDE1IDE1IDE1czE1LTYuNzE2IDE1LTE1YzAtMzkuODE2IDI0LjMxMy04MSA2NS04MXM2NSA0MS4xODQgNjUgODFjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNWMwLTM4LjExNi0xNy4zOTgtNzcuNTk1LTQ5LjI2LTk3Ljc1NiAxNS40MzMtMTMuMDM0IDI1LjI2LTMyLjUwOSAyNS4yNi01NC4yNDQgMC0zOS4xNDktMzEuODUxLTcxLTcxLTcxcy03MSAzMS44NTEtNzEgNzFjMCAyMS43MzUgOS44MjcgNDEuMjEgMjUuMjYgNTQuMjQ0LTMxLjg2MSAyMC4xNi00OS4yNiA1OS42NDYtNDkuMjYgOTcuNzU2em01NC0xNTJjMC0yMi42MDcgMTguMzkzLTQxIDQxLTQxczQxIDE4LjM5MyA0MSA0MS0xOC4zOTMgNDEtNDEgNDEtNDEtMTguMzkzLTQxLTQxeiIvPjwvZz48L3N2Zz4=\"\n\n//# sourceURL=webpack:///./src/images/contact-icon.svg?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/random */ \"./src/js/utilities/random.js\");\n/* harmony import */ var _utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/copyToClipboard */ \"./src/js/utilities/copyToClipboard.js\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/close-icon.svg */ \"./src/images/close-icon.svg\");\n/* harmony import */ var _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_back_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/back-icon.svg */ \"./src/images/back-icon.svg\");\n/* harmony import */ var _images_back_icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_back_icon_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_contact_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/contact-icon.svg */ \"./src/images/contact-icon.svg\");\n/* harmony import */ var _images_contact_icon_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_contact_icon_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utilities_contacts_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/contacts.json */ \"./src/js/utilities/contacts.json\");\nvar _utilities_contacts_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./utilities/contacts.json */ \"./src/js/utilities/contacts.json\", 1);\n/* harmony import */ var _utilities_randomColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/randomColor */ \"./src/js/utilities/randomColor.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\nvar alphabets = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\", \"K\", \"L\", \"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"T\", \"U\", \"V\", \"W\", \"X\", \"Y\", \"Z\"]; // const crossIcon = document.getElementById('invoice__header__close-icon');\n// crossIcon.src = closeIcon;\n// const selectContactButton = document.getElementById('select-contact-icon');\n// selectContactButton.src = selectContactIcon;\n\nvar recentContacts = document.querySelector('#recent-contacts');\nvar backButton = document.getElementById('contact-back-btn');\nbackButton.src = _images_back_icon_svg__WEBPACK_IMPORTED_MODULE_4___default.a;\n\nvar pickRecentContacts = function pickRecentContacts() {\n  var recentContacts = _utilities_contacts_json__WEBPACK_IMPORTED_MODULE_6__.slice(10);\n\n  var _iterator = _createForOfIteratorHelper(recentContacts),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      createContactCard(item.name);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\nvar createContactCard = function createContactCard(name) {\n  var el = document.createElement('div');\n  el.classList.add('invoice__body__contact-card', 'd-flex', 'flex-column', 'align-center');\n  var nameImage = document.createElement('div');\n  nameImage.style.backgroundColor = Object(_utilities_randomColor__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  nameImage.classList.add('invoice__body__contact-image', 'd-flex', 'justify-center', 'align-center');\n  el.appendChild(nameImage);\n  nameImage.textContent = name[0];\n  var textNameDiv = document.createElement('p');\n  textNameDiv.classList.add('invoice__body__contact-text');\n  textNameDiv.textContent = name;\n  el.appendChild(textNameDiv);\n  recentContacts.appendChild(el);\n};\n\npickRecentContacts();\nfillRecentContacts();\ncopyIconElem.src = _images_close_icon_svg__WEBPACK_IMPORTED_MODULE_3___default.a;\n\ncopyIconElem.onclick = function () {\n  Object(_utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.getElementById('actual_password').innerText);\n  alert('Copied to clipboard!');\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var randomStringGenerator = new _utilities_random__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var randomString = \"Random String: <span id=\\\"actual_password\\\">\".concat(randomStringGenerator.generate(), \"</span>\");\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/utilities/contacts.json":
/*!****************************************!*\
  !*** ./src/js/utilities/contacts.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"Felice Heiss\\\",\\\"email\\\":\\\"fheiss0@flavors.me\\\"},{\\\"name\\\":\\\"Trixi Willingham\\\",\\\"email\\\":\\\"twillingham1@domainmarket.com\\\"},{\\\"name\\\":\\\"Inna Banasik\\\",\\\"email\\\":\\\"ibanasik2@godaddy.com\\\"},{\\\"name\\\":\\\"Sonja Dulin\\\",\\\"email\\\":\\\"sdulin3@weather.com\\\"},{\\\"name\\\":\\\"Evey Joderli\\\",\\\"email\\\":\\\"ejoderli4@technorati.com\\\"},{\\\"name\\\":\\\"Hashim Stoyell\\\",\\\"email\\\":\\\"hstoyell5@google.it\\\"},{\\\"name\\\":\\\"Damiano Berntssen\\\",\\\"email\\\":\\\"dberntssen6@twitter.com\\\"},{\\\"name\\\":\\\"Heidie Miguet\\\",\\\"email\\\":\\\"hmiguet7@answers.com\\\"},{\\\"name\\\":\\\"Judith Romanin\\\",\\\"email\\\":\\\"jromanin8@unc.edu\\\"},{\\\"name\\\":\\\"Britni Sebert\\\",\\\"email\\\":\\\"bsebert9@cnbc.com\\\"},{\\\"name\\\":\\\"Kiah Drever\\\",\\\"email\\\":\\\"kdrevera@taobao.com\\\"},{\\\"name\\\":\\\"Elfrieda Eglinton\\\",\\\"email\\\":\\\"eeglintonb@blog.com\\\"},{\\\"name\\\":\\\"Goldia Duer\\\",\\\"email\\\":\\\"gduerc@cornell.edu\\\"},{\\\"name\\\":\\\"Odele Aleksandrikin\\\",\\\"email\\\":\\\"oaleksandrikind@mozilla.com\\\"},{\\\"name\\\":\\\"Kelila Bloxsome\\\",\\\"email\\\":\\\"kbloxsomee@devhub.com\\\"},{\\\"name\\\":\\\"May Billinge\\\",\\\"email\\\":\\\"mbillingef@marriott.com\\\"},{\\\"name\\\":\\\"Constantino Simao\\\",\\\"email\\\":\\\"csimaog@boston.com\\\"},{\\\"name\\\":\\\"Cris Wyborn\\\",\\\"email\\\":\\\"cwybornh@examiner.com\\\"},{\\\"name\\\":\\\"Gussy Tabor\\\",\\\"email\\\":\\\"gtabori@booking.com\\\"},{\\\"name\\\":\\\"Riannon Sisneros\\\",\\\"email\\\":\\\"rsisnerosj@mediafire.com\\\"},{\\\"name\\\":\\\"Amalea Leitch\\\",\\\"email\\\":\\\"aleitchk@lulu.com\\\"},{\\\"name\\\":\\\"Janek Whimper\\\",\\\"email\\\":\\\"jwhimperl@51.la\\\"},{\\\"name\\\":\\\"Filberte Gaitskill\\\",\\\"email\\\":\\\"fgaitskillm@artisteer.com\\\"},{\\\"name\\\":\\\"Keith Hyslop\\\",\\\"email\\\":\\\"khyslopn@craigslist.org\\\"},{\\\"name\\\":\\\"Phyllida Loakes\\\",\\\"email\\\":\\\"ploakeso@bluehost.com\\\"},{\\\"name\\\":\\\"Appolonia Flipsen\\\",\\\"email\\\":\\\"aflipsenp@adobe.com\\\"},{\\\"name\\\":\\\"Maryl O'Shee\\\",\\\"email\\\":\\\"mosheeq@last.fm\\\"},{\\\"name\\\":\\\"Doralin Pinkney\\\",\\\"email\\\":\\\"dpinkneyr@businessweek.com\\\"},{\\\"name\\\":\\\"Selestina Gundrey\\\",\\\"email\\\":\\\"sgundreys@stanford.edu\\\"},{\\\"name\\\":\\\"Malorie Chasmoor\\\",\\\"email\\\":\\\"mchasmoort@cisco.com\\\"},{\\\"name\\\":\\\"Mireielle Haygreen\\\",\\\"email\\\":\\\"mhaygreenu@state.gov\\\"},{\\\"name\\\":\\\"Elicia Illem\\\",\\\"email\\\":\\\"eillemv@about.com\\\"},{\\\"name\\\":\\\"Peggie Ritchie\\\",\\\"email\\\":\\\"pritchiew@pagesperso-orange.fr\\\"},{\\\"name\\\":\\\"Kimball Beeson\\\",\\\"email\\\":\\\"kbeesonx@liveinternet.ru\\\"},{\\\"name\\\":\\\"Hall Jerram\\\",\\\"email\\\":\\\"hjerramy@ebay.co.uk\\\"},{\\\"name\\\":\\\"Nevin Bangs\\\",\\\"email\\\":\\\"nbangsz@cocolog-nifty.com\\\"},{\\\"name\\\":\\\"Tommie Caso\\\",\\\"email\\\":\\\"tcaso10@alibaba.com\\\"},{\\\"name\\\":\\\"Pincus Laxen\\\",\\\"email\\\":\\\"plaxen11@exblog.jp\\\"},{\\\"name\\\":\\\"Victoir Mushawe\\\",\\\"email\\\":\\\"vmushawe12@bloglines.com\\\"},{\\\"name\\\":\\\"Kerri Scipsey\\\",\\\"email\\\":\\\"kscipsey13@nymag.com\\\"},{\\\"name\\\":\\\"Ruthy Shafto\\\",\\\"email\\\":\\\"rshafto14@blog.com\\\"},{\\\"name\\\":\\\"Zola Hearty\\\",\\\"email\\\":\\\"zhearty15@techcrunch.com\\\"},{\\\"name\\\":\\\"Liesa Hendrickx\\\",\\\"email\\\":\\\"lhendrickx16@webmd.com\\\"},{\\\"name\\\":\\\"Mari Kalisch\\\",\\\"email\\\":\\\"mkalisch17@biblegateway.com\\\"},{\\\"name\\\":\\\"Anabelle O'Malley\\\",\\\"email\\\":\\\"aomalley18@oracle.com\\\"},{\\\"name\\\":\\\"Roxie Dickons\\\",\\\"email\\\":\\\"rdickons19@blog.com\\\"},{\\\"name\\\":\\\"Tyrus Furman\\\",\\\"email\\\":\\\"tfurman1a@auda.org.au\\\"},{\\\"name\\\":\\\"Aguste Mullis\\\",\\\"email\\\":\\\"amullis1b@mashable.com\\\"},{\\\"name\\\":\\\"Maxim Gozzett\\\",\\\"email\\\":\\\"mgozzett1c@cnn.com\\\"},{\\\"name\\\":\\\"Daphne Kaemena\\\",\\\"email\\\":\\\"dkaemena1d@berkeley.edu\\\"},{\\\"name\\\":\\\"Gerhard Braunton\\\",\\\"email\\\":\\\"gbraunton1e@blogtalkradio.com\\\"},{\\\"name\\\":\\\"Stephine Avramow\\\",\\\"email\\\":\\\"savramow1f@irs.gov\\\"},{\\\"name\\\":\\\"Stirling Pettwood\\\",\\\"email\\\":\\\"spettwood1g@hubpages.com\\\"},{\\\"name\\\":\\\"Allister Veivers\\\",\\\"email\\\":\\\"aveivers1h@mediafire.com\\\"},{\\\"name\\\":\\\"Shirlee Yapp\\\",\\\"email\\\":\\\"syapp1i@cloudflare.com\\\"},{\\\"name\\\":\\\"Trish Adnett\\\",\\\"email\\\":\\\"tadnett1j@imdb.com\\\"},{\\\"name\\\":\\\"Mathilda Braisted\\\",\\\"email\\\":\\\"mbraisted1k@desdev.cn\\\"},{\\\"name\\\":\\\"Alfie Witten\\\",\\\"email\\\":\\\"awitten1l@cbsnews.com\\\"},{\\\"name\\\":\\\"Zoe Tofts\\\",\\\"email\\\":\\\"ztofts1m@mit.edu\\\"},{\\\"name\\\":\\\"Amabel Kneeland\\\",\\\"email\\\":\\\"akneeland1n@sphinn.com\\\"},{\\\"name\\\":\\\"Barn Fermor\\\",\\\"email\\\":\\\"bfermor1o@oracle.com\\\"},{\\\"name\\\":\\\"Rafa Brimming\\\",\\\"email\\\":\\\"rbrimming1p@google.de\\\"},{\\\"name\\\":\\\"Matias Foord\\\",\\\"email\\\":\\\"mfoord1q@bluehost.com\\\"},{\\\"name\\\":\\\"Lucky Jahnel\\\",\\\"email\\\":\\\"ljahnel1r@japanpost.jp\\\"},{\\\"name\\\":\\\"Neal MacGillivrie\\\",\\\"email\\\":\\\"nmacgillivrie1s@ucoz.ru\\\"},{\\\"name\\\":\\\"Lonnie Merdew\\\",\\\"email\\\":\\\"lmerdew1t@wix.com\\\"},{\\\"name\\\":\\\"Rayner Morston\\\",\\\"email\\\":\\\"rmorston1u@pagesperso-orange.fr\\\"},{\\\"name\\\":\\\"Leopold Patrickson\\\",\\\"email\\\":\\\"lpatrickson1v@friendfeed.com\\\"},{\\\"name\\\":\\\"Clarette Marchiso\\\",\\\"email\\\":\\\"cmarchiso1w@miitbeian.gov.cn\\\"},{\\\"name\\\":\\\"Orton Cargo\\\",\\\"email\\\":\\\"ocargo1x@pagesperso-orange.fr\\\"},{\\\"name\\\":\\\"Ave O'Keeffe\\\",\\\"email\\\":\\\"aokeeffe1y@reddit.com\\\"},{\\\"name\\\":\\\"Sandra Longlands\\\",\\\"email\\\":\\\"slonglands1z@live.com\\\"},{\\\"name\\\":\\\"Erhart Aglione\\\",\\\"email\\\":\\\"eaglione20@photobucket.com\\\"},{\\\"name\\\":\\\"Ernesta Joyson\\\",\\\"email\\\":\\\"ejoyson21@yale.edu\\\"},{\\\"name\\\":\\\"Kelby Farrear\\\",\\\"email\\\":\\\"kfarrear22@furl.net\\\"},{\\\"name\\\":\\\"Howard Storcke\\\",\\\"email\\\":\\\"hstorcke23@auda.org.au\\\"},{\\\"name\\\":\\\"Carroll Wellbelove\\\",\\\"email\\\":\\\"cwellbelove24@cafepress.com\\\"},{\\\"name\\\":\\\"Rubie Dalglish\\\",\\\"email\\\":\\\"rdalglish25@simplemachines.org\\\"},{\\\"name\\\":\\\"Shelby Latimer\\\",\\\"email\\\":\\\"slatimer26@icq.com\\\"},{\\\"name\\\":\\\"Marcille Shales\\\",\\\"email\\\":\\\"mshales27@about.com\\\"},{\\\"name\\\":\\\"Darwin Sperwell\\\",\\\"email\\\":\\\"dsperwell28@rambler.ru\\\"},{\\\"name\\\":\\\"Huey Gonnely\\\",\\\"email\\\":\\\"hgonnely29@wiley.com\\\"},{\\\"name\\\":\\\"Thorpe Anthonies\\\",\\\"email\\\":\\\"tanthonies2a@51.la\\\"},{\\\"name\\\":\\\"Deny Iskov\\\",\\\"email\\\":\\\"diskov2b@sakura.ne.jp\\\"},{\\\"name\\\":\\\"Roz Ixor\\\",\\\"email\\\":\\\"rixor2c@about.com\\\"},{\\\"name\\\":\\\"Celesta Copins\\\",\\\"email\\\":\\\"ccopins2d@wikispaces.com\\\"},{\\\"name\\\":\\\"Kylie Haynesford\\\",\\\"email\\\":\\\"khaynesford2e@thetimes.co.uk\\\"},{\\\"name\\\":\\\"Crysta Wheeldon\\\",\\\"email\\\":\\\"cwheeldon2f@blogtalkradio.com\\\"},{\\\"name\\\":\\\"Cam Ferguson\\\",\\\"email\\\":\\\"cferguson2g@wufoo.com\\\"},{\\\"name\\\":\\\"Aloysius Lodewick\\\",\\\"email\\\":\\\"alodewick2h@ycombinator.com\\\"},{\\\"name\\\":\\\"Eryn Quarrell\\\",\\\"email\\\":\\\"equarrell2i@mail.ru\\\"},{\\\"name\\\":\\\"Dede Pendred\\\",\\\"email\\\":\\\"dpendred2j@xinhuanet.com\\\"},{\\\"name\\\":\\\"Fanchette Bartod\\\",\\\"email\\\":\\\"fbartod2k@techcrunch.com\\\"},{\\\"name\\\":\\\"Timofei Jephcott\\\",\\\"email\\\":\\\"tjephcott2l@accuweather.com\\\"},{\\\"name\\\":\\\"Lenna Peegrem\\\",\\\"email\\\":\\\"lpeegrem2m@themeforest.net\\\"},{\\\"name\\\":\\\"Fredra Kowal\\\",\\\"email\\\":\\\"fkowal2n@fda.gov\\\"},{\\\"name\\\":\\\"Dulcine Charon\\\",\\\"email\\\":\\\"dcharon2o@disqus.com\\\"},{\\\"name\\\":\\\"Sidonia Bownde\\\",\\\"email\\\":\\\"sbownde2p@surveymonkey.com\\\"},{\\\"name\\\":\\\"Madelle Prettyjohns\\\",\\\"email\\\":\\\"mprettyjohns2q@alexa.com\\\"},{\\\"name\\\":\\\"Dori Stife\\\",\\\"email\\\":\\\"dstife2r@soup.io\\\"}]\");\n\n//# sourceURL=webpack:///./src/js/utilities/contacts.json?");

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

/***/ "./src/js/utilities/randomColor.js":
/*!*****************************************!*\
  !*** ./src/js/utilities/randomColor.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRandomColor; });\nfunction getRandomColor() {\n  var letters = '0123456789ABCDEF';\n  var color = '#';\n\n  for (var i = 0; i < 6; i++) {\n    color += letters[Math.floor(Math.random() * 16)];\n  }\n\n  return color;\n}\n\n//# sourceURL=webpack:///./src/js/utilities/randomColor.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\n\\n    @include(0, )\\n   ^\\n      Invalid CSS after \\\"    @include\\\": expected identifier, was \\\"(0, )\\\"\\n      in /Users/deepindersingh/Documents/getting-started-webpack/Part-7/src/scss/app.scss (line 146, column 5)\\n    at /Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.callback (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/sass-loader/dist/index.js:89:7)\\n    at Object.done [as callback] (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/neo-async/async.js:8069:18)\\n    at options.error (/Users/deepindersingh/Documents/getting-started-webpack/Part-7/node_modules/node-sass/lib/index.js:294:32)\");\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

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