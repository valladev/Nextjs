"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/basics/botao",{

/***/ "./pages/basics/botao.jsx":
/*!********************************!*\
  !*** ./pages/basics/botao.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ botao; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction click() {\n    console.log(\"click\");\n}\nfunction botao() {\n    function click2() {\n        console.log(\"click 2\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    border: \"1px solid #ffff\",\n                    padding: \"10px\",\n                    margin: \"10px\",\n                    cursor: \"pointer\"\n                },\n                onClick: click,\n                children: \"click\"\n            }, void 0, false, {\n                fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/basics/botao.jsx\",\n                lineNumber: 12,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    border: \"1px solid #ffff\",\n                    padding: \"10px\",\n                    margin: \"10px\",\n                    cursor: \"pointer\"\n                },\n                onClick: click2,\n                children: \"click2\"\n            }, void 0, false, {\n                fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/basics/botao.jsx\",\n                lineNumber: 18,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    border: \"1px solid #ffff\",\n                    padding: \"10px\",\n                    margin: \"10px\",\n                    cursor: \"pointer\"\n                },\n                onClick: function() {\n                    console.log();\n                },\n                children: \"click2\"\n            }, void 0, false, {\n                fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/basics/botao.jsx\",\n                lineNumber: 24,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joaobarboza/Documents/Udemy/Nextjs/pages/basics/botao.jsx\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9iYXNpY3MvYm90YW8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQSxRQUFRO0lBQ2RDLFFBQVFDLEdBQUcsQ0FBQztBQUNmO0FBRWUsU0FBU0MsUUFBUTtJQUM3QixTQUFTQyxTQUFTO1FBQ2ZILFFBQVFDLEdBQUcsQ0FBQztJQUNmO0lBRUEscUJBQ0csOERBQUNHOzswQkFDRSw4REFBQ0M7Z0JBQ0VDLE9BQU87b0JBQUNDLFFBQVE7b0JBQW1CQyxTQUFTO29CQUFRQyxRQUFRO29CQUFRQyxRQUFRO2dCQUFTO2dCQUNyRkMsU0FBU1o7MEJBQU87Ozs7OzswQkFJbkIsOERBQUNNO2dCQUNFQyxPQUFPO29CQUFDQyxRQUFRO29CQUFtQkMsU0FBUztvQkFBUUMsUUFBUTtvQkFBUUMsUUFBUTtnQkFBUztnQkFDckZDLFNBQVNSOzBCQUFROzs7Ozs7MEJBSXBCLDhEQUFDRTtnQkFDRUMsT0FBTztvQkFBQ0MsUUFBUTtvQkFBbUJDLFNBQVM7b0JBQVFDLFFBQVE7b0JBQVFDLFFBQVE7Z0JBQVM7Z0JBQ3JGQyxTQUFTLFdBQVc7b0JBQ2pCWCxRQUFRQyxHQUFHO2dCQUNkOzBCQUFHOzs7Ozs7Ozs7Ozs7QUFRZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jhc2ljcy9ib3Rhby5qc3g/MGIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjbGljaygpIHtcbiAgIGNvbnNvbGUubG9nKCdjbGljaycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvdGFvKCkge1xuICAgZnVuY3Rpb24gY2xpY2syKCkge1xuICAgICAgY29uc29sZS5sb2coXCJjbGljayAyXCIpXG4gICB9XG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiBcIjFweCBzb2xpZCAjZmZmZlwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgbWFyZ2luOiBcIjEwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIn19XG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja30+XG4gICAgICAgICAgICBjbGlja1xuICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogXCIxcHggc29saWQgI2ZmZmZcIiwgcGFkZGluZzogXCIxMHB4XCIsIG1hcmdpbjogXCIxMHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fVxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2syfT5cbiAgICAgICAgICAgIGNsaWNrMlxuICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogXCIxcHggc29saWQgI2ZmZmZcIiwgcGFkZGluZzogXCIxMHB4XCIsIG1hcmdpbjogXCIxMHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCJ9fVxuICAgICAgICAgICAgb25DbGljaz17ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIGNsaWNrMlxuICAgICAgICAgPC9idXR0b24+XG5cblxuICAgICAgPC9kaXY+XG4gICApXG4gICBcbn07XG4iXSwibmFtZXMiOlsiY2xpY2siLCJjb25zb2xlIiwibG9nIiwiYm90YW8iLCJjbGljazIiLCJkaXYiLCJidXR0b24iLCJzdHlsZSIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW4iLCJjdXJzb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/basics/botao.jsx\n"));

/***/ })

});