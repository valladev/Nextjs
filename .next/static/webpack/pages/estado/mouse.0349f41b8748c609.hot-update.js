"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/estado/mouse",{

/***/ "./pages/estado/mouse.jsx":
/*!********************************!*\
  !*** ./pages/estado/mouse.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ mouse; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction mouse() {\n    _s();\n    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [y, setY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const arrayY = useState(0)\n    // let y = arrayY\n    // const alterarY = arrayY[1]\n    const estilo = {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItens: \"center\",\n        backgroundColor: \"#222\",\n        color: \"#fff\",\n        height: \"100vh\"\n    };\n    function quandoMover(ev) {\n        setX(ev.clientX);\n        alterarY(ev.clientY);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: estilo,\n        onMouseMove: quandoMover,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Eixo X: \",\n                    x\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/estado/mouse.jsx\",\n                lineNumber: 28,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"Eixo Y: \",\n                    y\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/estado/mouse.jsx\",\n                lineNumber: 29,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/estado/mouse.jsx\",\n        lineNumber: 27,\n        columnNumber: 7\n    }, this);\n}\n_s(mouse, \"5ktbIWa127cjFL72iUfyHXgs40w=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lc3RhZG8vbW91c2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFFakIsU0FBU0MsUUFBUTs7SUFDN0IsTUFBTSxDQUFDQyxHQUFHQyxLQUFLLEdBQUdILCtDQUFRQSxDQUFDO0lBQzNCLE1BQU0sQ0FBQ0ksR0FBR0MsS0FBSyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUzQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUU3QixNQUFNTSxTQUFTO1FBQ1pDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsaUJBQWlCO1FBQ2pCQyxPQUFPO1FBQ1BDLFFBQVE7SUFDWDtJQUVBLFNBQVNDLFlBQVlDLEVBQUUsRUFBRTtRQUN0QlosS0FBS1ksR0FBR0MsT0FBTztRQUNmQyxTQUFTRixHQUFHRyxPQUFPO0lBQ3RCO0lBRUEscUJBQ0csOERBQUNDO1FBQUlDLE9BQU9kO1FBQVFlLGFBQWFQOzswQkFDOUIsOERBQUNROztvQkFBSztvQkFBU3BCOzs7Ozs7OzBCQUNmLDhEQUFDb0I7O29CQUFLO29CQUFTbEI7Ozs7Ozs7Ozs7Ozs7QUFHeEIsQ0FBQztHQTdCdUJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VzdGFkby9tb3VzZS5qc3g/ZTI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vdXNlKCkge1xuICAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGUoMClcbiAgIGNvbnN0IFt5LCBzZXRZXSA9IHVzZVN0YXRlKDApXG5cbiAgIC8vIGNvbnN0IGFycmF5WSA9IHVzZVN0YXRlKDApXG4gICAvLyBsZXQgeSA9IGFycmF5WVxuICAgLy8gY29uc3QgYWx0ZXJhclkgPSBhcnJheVlbMV1cblxuICAgY29uc3QgZXN0aWxvID0ge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICBhbGlnbkl0ZW5zOiBcImNlbnRlclwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMjJcIixcbiAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiXG4gICB9XG5cbiAgIGZ1bmN0aW9uIHF1YW5kb01vdmVyKGV2KSB7XG4gICAgICBzZXRYKGV2LmNsaWVudFgpXG4gICAgICBhbHRlcmFyWShldi5jbGllbnRZKVxuICAgfVxuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17ZXN0aWxvfSBvbk1vdXNlTW92ZT17cXVhbmRvTW92ZXJ9PlxuICAgICAgICAgPHNwYW4+RWl4byBYOiB7eH08L3NwYW4+XG4gICAgICAgICA8c3Bhbj5FaXhvIFk6IHt5fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgKVxufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm1vdXNlIiwieCIsInNldFgiLCJ5Iiwic2V0WSIsImVzdGlsbyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW5zIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJoZWlnaHQiLCJxdWFuZG9Nb3ZlciIsImV2IiwiY2xpZW50WCIsImFsdGVyYXJZIiwiY2xpZW50WSIsImRpdiIsInN0eWxlIiwib25Nb3VzZU1vdmUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/estado/mouse.jsx\n"));

/***/ })

});