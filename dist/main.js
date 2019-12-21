/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Mali/index.js":
/*!***************************!*\
  !*** ./src/Mali/index.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (1);\n\n//# sourceURL=webpack:///./src/Mali/index.js?");

/***/ }),

/***/ "./src/MaliElements/Element.js":
/*!*************************************!*\
  !*** ./src/MaliElements/Element.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar Element = function Element(_ref) {\n  var type = _ref.type,\n      children = _ref.children,\n      attr = _ref.attr,\n      value = _ref.value;\n  return {\n    type: type,\n    children: children,\n    attr: attr\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);\n\n//# sourceURL=webpack:///./src/MaliElements/Element.js?");

/***/ }),

/***/ "./src/MaliElements/createElement.js":
/*!*******************************************!*\
  !*** ./src/MaliElements/createElement.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/MaliElements/index.js\");\n\n\nvar createElement = function createElement(el) {\n  var elm = typeof el === 'function' ? el() : el;\n  var type = elm.type,\n      attr = elm.attr,\n      children = elm.children,\n      value = elm.value;\n  if (!type) return elm.toString();\n  if (!children) return (0,_index__WEBPACK_IMPORTED_MODULE_0__.Element)({\n    type: type,\n    attr: attr\n  });\n\n  var _children = children.map(function (child) {\n    return createElement(child);\n  });\n\n  return (0,_index__WEBPACK_IMPORTED_MODULE_0__.Element)({\n    type: type,\n    attr: attr,\n    children: _children,\n    value: value\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack:///./src/MaliElements/createElement.js?");

/***/ }),

/***/ "./src/MaliElements/index.js":
/*!***********************************!*\
  !*** ./src/MaliElements/index.js ***!
  \***********************************/
/*! namespace exports */
/*! export Element [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Element\": () => /* reexport safe */ _Element__WEBPACK_IMPORTED_MODULE_0__.default,\n/* harmony export */   \"createElement\": () => /* reexport safe */ _createElement__WEBPACK_IMPORTED_MODULE_1__.default\n/* harmony export */ });\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ \"./src/MaliElements/Element.js\");\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElement */ \"./src/MaliElements/createElement.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/MaliElements/index.js?");

/***/ }),

/***/ "./src/MaliMethods/index.js":
/*!**********************************!*\
  !*** ./src/MaliMethods/index.js ***!
  \**********************************/
/*! namespace exports */
/*! export mountApp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setState [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mountApp\": () => /* reexport safe */ _mountApp__WEBPACK_IMPORTED_MODULE_0__.default,\n/* harmony export */   \"setState\": () => /* reexport safe */ _setState__WEBPACK_IMPORTED_MODULE_1__.default\n/* harmony export */ });\n/* harmony import */ var _mountApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mountApp */ \"./src/MaliMethods/mountApp.js\");\n/* harmony import */ var _setState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setState */ \"./src/MaliMethods/setState.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/MaliMethods/index.js?");

/***/ }),

/***/ "./src/MaliMethods/mountApp.js":
/*!*************************************!*\
  !*** ./src/MaliMethods/mountApp.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar mountApp = function mountApp(app, doc) {\n  if (!window.APP) window.APP = app();\n  if (!window.EXECUTE) window.EXECUTE = app;\n  console.log(window.APP);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mountApp);\n\n//# sourceURL=webpack:///./src/MaliMethods/mountApp.js?");

/***/ }),

/***/ "./src/MaliMethods/setState.js":
/*!*************************************!*\
  !*** ./src/MaliMethods/setState.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar setState = function setState(component, value) {\n  console.log(window.APP);\n  console.log(window.EXECUTE());\n  return _objectSpread({}, component, {\n    value: value\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setState);\n\n//# sourceURL=webpack:///./src/MaliMethods/setState.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mountApp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setState [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__,\n/* harmony export */   \"mountApp\": () => /* reexport safe */ _MaliMethods__WEBPACK_IMPORTED_MODULE_1__.mountApp,\n/* harmony export */   \"setState\": () => /* reexport safe */ _MaliMethods__WEBPACK_IMPORTED_MODULE_1__.setState,\n/* harmony export */   \"createElement\": () => /* reexport safe */ _MaliElements__WEBPACK_IMPORTED_MODULE_2__.createElement\n/* harmony export */ });\n/* harmony import */ var _Mali__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mali */ \"./src/Mali/index.js\");\n/* harmony import */ var _MaliMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaliMethods */ \"./src/MaliMethods/index.js\");\n/* harmony import */ var _MaliElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaliElements */ \"./src/MaliElements/index.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n\n\n // test function\n\n // export\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Mali__WEBPACK_IMPORTED_MODULE_0__.default);\n // run test\n\n(0,_test__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _testApp_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testApp/App */ \"./src/testApp/App.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  (0,_index__WEBPACK_IMPORTED_MODULE_0__.mountApp)(_testApp_App__WEBPACK_IMPORTED_MODULE_1__.default, document.getElementById('root'));\n});\n\n//# sourceURL=webpack:///./src/test.js?");

/***/ }),

/***/ "./src/testApp/App.js":
/*!****************************!*\
  !*** ./src/testApp/App.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/testApp/Button.js\");\n\n\n\nvar App = function App() {\n  var state = {\n    name: 'Manh Nguyen'\n  };\n  return (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)({\n    type: 'h1',\n    children: [_Button__WEBPACK_IMPORTED_MODULE_1__.default],\n    attr: [],\n    value: state\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack:///./src/testApp/App.js?");

/***/ }),

/***/ "./src/testApp/Button.js":
/*!*******************************!*\
  !*** ./src/testApp/Button.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\nvar Button = function Button(state) {\n  if (!state) state = {\n    value: 1\n  };\n  console.log(state);\n  setInterval(function () {\n    return increase();\n  }, 1000);\n\n  var increase = function increase() {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.setState)(Button, {\n      value: state.value + 1\n    });\n  };\n\n  return (0,_index__WEBPACK_IMPORTED_MODULE_0__.createElement)({\n    type: 'button',\n    attr: [],\n    children: [],\n    value: state\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack:///./src/testApp/Button.js?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;