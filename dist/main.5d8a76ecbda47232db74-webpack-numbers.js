(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./library/a"), require("./library/b"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["./library/a", "./library/b", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory(require("./library/a"), require("./library/b"), require("lodash"));
	else
		root["webpackNumbers"] = factory(root["./library/a"], root["./library/b"], root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__library_a__, __WEBPACK_EXTERNAL_MODULE__library_b__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./library/a":
/*!******************************!*\
  !*** external "./library/a" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__library_a__;\n\n//# sourceURL=webpack://webpackNumbers/external_%22./library/a%22?");

/***/ }),

/***/ "./library/b":
/*!******************************!*\
  !*** external "./library/b" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__library_b__;\n\n//# sourceURL=webpack://webpackNumbers/external_%22./library/b%22?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: numToWord, wordToNum, out */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numToWord\", function() { return numToWord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wordToNum\", function() { return wordToNum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"out\", function() { return out; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ref_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ref.json */ \"./src/ref.json\");\nvar _ref_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ref.json */ \"./src/ref.json\", 1);\n/* harmony import */ var _library_a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/a */ \"./library/a\");\n/* harmony import */ var _library_a__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_library_a__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _library_b__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library/b */ \"./library/b\");\n/* harmony import */ var _library_b__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_library_b__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nfunction numToWord(num) {\r\n  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(\r\n    _ref_json__WEBPACK_IMPORTED_MODULE_1__,\r\n    (accum, ref) => {\r\n      return ref.num === num ? ref.word : accum;\r\n    },\r\n    \"\"\r\n  );\r\n}\r\n\r\nfunction wordToNum(word) {\r\n  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(\r\n    _ref_json__WEBPACK_IMPORTED_MODULE_1__,\r\n    (accum, ref) => {\r\n      return ref.word === word && word.toLowerCase() ? ref.num : accum;\r\n    },\r\n    -1\r\n  );\r\n}\r\nfunction out() {\r\n  return {\r\n    a: _library_a__WEBPACK_IMPORTED_MODULE_2___default.a.a,\r\n    b: _library_b__WEBPACK_IMPORTED_MODULE_3___default.a.b\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://webpackNumbers/./src/index.js?");

/***/ }),

/***/ "./src/ref.json":
/*!**********************!*\
  !*** ./src/ref.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"num\\\":1,\\\"word\\\":\\\"One\\\"},{\\\"num\\\":2,\\\"word\\\":\\\"Two\\\"},{\\\"num\\\":3,\\\"word\\\":\\\"Three\\\"},{\\\"num\\\":4,\\\"word\\\":\\\"Four\\\"},{\\\"num\\\":5,\\\"word\\\":\\\"Five\\\"},{\\\"num\\\":0,\\\"word\\\":\\\"Zero\\\"}]\");\n\n//# sourceURL=webpack://webpackNumbers/./src/ref.json?");

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://webpackNumbers/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22,%22root%22:%22_%22%7D?");

/***/ })

/******/ });
});