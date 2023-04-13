"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/render/condicional2";
exports.ids = ["pages/render/condicional2"];
exports.modules = {

/***/ "./components/If.jsx":
/*!***************************!*\
  !*** ./components/If.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ If)\n/* harmony export */ });\nfunction If(props) {\n    if (props.numero) {\n        return props.children;\n    } else {\n        return null;\n    }\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lmLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsR0FBR0MsS0FBSyxFQUFFO0lBQy9CLElBQUlBLE1BQU1DLE1BQU0sRUFBRTtRQUNmLE9BQ0dELE1BQU1FLFFBQVE7SUFFcEIsT0FBTztRQUFDLE9BQU8sSUFBSTtJQUFBLENBQUM7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4ZXJjaWNpb3MvLi9jb21wb25lbnRzL0lmLmpzeD9kZGZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElmKHByb3BzKSB7XG4gICBpZiAocHJvcHMubnVtZXJvKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgIH0gZWxzZSB7cmV0dXJuIG51bGx9XG59O1xuIl0sIm5hbWVzIjpbIklmIiwicHJvcHMiLCJudW1lcm8iLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/If.jsx\n");

/***/ }),

/***/ "./pages/render/condicional2.jsx":
/*!***************************************!*\
  !*** ./pages/render/condicional2.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ condicional2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_If__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/If */ \"./components/If.jsx\");\n\n\nfunction condicional2() {\n    const numero = 5;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_If__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                numero: numero % 2 === 0,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"O numero \",\n                        numero,\n                        \" \\xe9 par\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/render/condicional2.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 40\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/render/condicional2.jsx\",\n                lineNumber: 7,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_If__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                numero: numero % 2 === 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"O numero \",\n                        numero,\n                        \" \\xe9 impar\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/render/condicional2.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 40\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/render/condicional2.jsx\",\n                lineNumber: 8,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/render/condicional2.jsx\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, this);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZW5kZXIvY29uZGljaW9uYWwyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUV0QixTQUFTQyxlQUFlO0lBQ3BDLE1BQU1DLFNBQVM7SUFDZixxQkFDRyw4REFBQ0M7OzBCQUNFLDhEQUFDSCxzREFBRUE7Z0JBQUNFLFFBQVFBLFNBQVMsTUFBTTswQkFBRyw0RUFBQ0U7O3dCQUFHO3dCQUFVRjt3QkFBTzs7Ozs7Ozs7Ozs7OzBCQUNuRCw4REFBQ0Ysc0RBQUVBO2dCQUFDRSxRQUFRQSxTQUFTLE1BQU07MEJBQUcsNEVBQUNFOzt3QkFBRzt3QkFBVUY7d0JBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc1RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhlcmNpY2lvcy8uL3BhZ2VzL3JlbmRlci9jb25kaWNpb25hbDIuanN4P2M4YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElmIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0lmXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmRpY2lvbmFsMigpIHtcbiAgIGNvbnN0IG51bWVybyA9IDVcbiAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgPElmIG51bWVybz17bnVtZXJvICUgMiA9PT0gMH0+PGgxPk8gbnVtZXJvIHtudW1lcm99IMOpIHBhcjwvaDE+PC9JZj5cbiAgICAgICAgIDxJZiBudW1lcm89e251bWVybyAlIDIgPT09IDF9PjxoMT5PIG51bWVybyB7bnVtZXJvfSDDqSBpbXBhcjwvaDE+PC9JZj5cbiAgICAgIDwvZGl2PlxuICAgKVxufTtcbiJdLCJuYW1lcyI6WyJJZiIsImNvbmRpY2lvbmFsMiIsIm51bWVybyIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/render/condicional2.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/render/condicional2.jsx"));
module.exports = __webpack_exports__;

})();