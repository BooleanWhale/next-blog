webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/smallComponents/Navigation.js":
/*!********************************************************!*\
  !*** ./pages/components/smallComponents/Navigation.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/smallComponents/Navigation.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // export default function Navigation() {\n//     const navLinks = [\n//         {title:\"Home\", path:\"/\"},\n//         {title:\"Blog\", path:\"/blog\"},\n//         {title:\"About\", path:\"/about\"},\n//         {title:\"Contact\", path:\"/contact\"}\n//     ]\n//     return <nav className=\"navigation\">\n//         <ul>\n//             { navLinks.map((link, index) => \n//                     <li key={link.title}>\n//                         <Link as={link.path} href={link.path}><a>{link.title}</a></Link>\n//                     </li>\n//                 )\n//             }\n//         </ul>\n//     </nav>\n// }\n\nfunction Navigation() {\n  var _this = this;\n\n  var navLinks = [{\n    title: \"Home\",\n    path: \"/\"\n  }, {\n    title: \"Blog\",\n    path: \"/blog\"\n  }, {\n    title: \"About\",\n    path: \"/about\"\n  }, {\n    title: \"Contact\",\n    path: \"/contact\"\n  }];\n  return __jsx(\"nav\", {\n    className: \"navigation\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 12\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, navLinks.map(function (link, index) {\n    return __jsx(\"li\", {\n      key: link.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      href: link.path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 25\n      }\n    }, link.title));\n  })), \"s\");\n}\n_c = Navigation;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzP2NhMTAiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIm5hdkxpbmtzIiwidGl0bGUiLCJwYXRoIiwibWFwIiwibGluayIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0NBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFFakMsTUFBTUMsUUFBUSxHQUFHLENBQ2I7QUFBQ0MsU0FBSyxFQUFDLE1BQVA7QUFBZUMsUUFBSSxFQUFDO0FBQXBCLEdBRGEsRUFFYjtBQUFDRCxTQUFLLEVBQUMsTUFBUDtBQUFlQyxRQUFJLEVBQUM7QUFBcEIsR0FGYSxFQUdiO0FBQUNELFNBQUssRUFBQyxPQUFQO0FBQWdCQyxRQUFJLEVBQUM7QUFBckIsR0FIYSxFQUliO0FBQUNELFNBQUssRUFBQyxTQUFQO0FBQWtCQyxRQUFJLEVBQUM7QUFBdkIsR0FKYSxDQUFqQjtBQU9BLFNBQU87QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNRixRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNQO0FBQUksU0FBRyxFQUFFRCxJQUFJLENBQUNILEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsVUFBSSxFQUFFRyxJQUFJLENBQUNGLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQkUsSUFBSSxDQUFDSCxLQUExQixDQURKLENBRE87QUFBQSxHQUFiLENBRE4sQ0FERyxNQUFQO0FBVUg7S0FuQnVCRixVIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9zbWFsbENvbXBvbmVudHMvTmF2aWdhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xuXG4vLyAgICAgY29uc3QgbmF2TGlua3MgPSBbXG4vLyAgICAgICAgIHt0aXRsZTpcIkhvbWVcIiwgcGF0aDpcIi9cIn0sXG4vLyAgICAgICAgIHt0aXRsZTpcIkJsb2dcIiwgcGF0aDpcIi9ibG9nXCJ9LFxuLy8gICAgICAgICB7dGl0bGU6XCJBYm91dFwiLCBwYXRoOlwiL2Fib3V0XCJ9LFxuLy8gICAgICAgICB7dGl0bGU6XCJDb250YWN0XCIsIHBhdGg6XCIvY29udGFjdFwifVxuLy8gICAgIF1cblxuLy8gICAgIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbi8vICAgICAgICAgPHVsPlxuLy8gICAgICAgICAgICAgeyBuYXZMaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiBcbi8vICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bGluay50aXRsZX0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17bGluay5wYXRofSBocmVmPXtsaW5rLnBhdGh9PjxhPntsaW5rLnRpdGxlfTwvYT48L0xpbms+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICA8L3VsPlxuLy8gICAgIDwvbmF2PlxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xuXG4gICAgY29uc3QgbmF2TGlua3MgPSBbXG4gICAgICAgIHt0aXRsZTpcIkhvbWVcIiwgcGF0aDpcIi9cIn0sXG4gICAgICAgIHt0aXRsZTpcIkJsb2dcIiwgcGF0aDpcIi9ibG9nXCJ9LFxuICAgICAgICB7dGl0bGU6XCJBYm91dFwiLCBwYXRoOlwiL2Fib3V0XCJ9LFxuICAgICAgICB7dGl0bGU6XCJDb250YWN0XCIsIHBhdGg6XCIvY29udGFjdFwifVxuICAgIF1cblxuICAgIHJldHVybiA8bmF2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgeyBuYXZMaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bGluay50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLnBhdGh9PntsaW5rLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvdWw+c1xuICAgIDwvbmF2PlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/smallComponents/Navigation.js\n");

/***/ })

})