webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function iFrame(title, url) {\n    return __jsx(\"iframe\", {\n      style: {\n        width: '70vw',\n        maxWidth: '1000px',\n        height: '70vh'\n      },\n      scrolling: \"no\",\n      title: title,\n      src: url + \"?height=265&theme-id=dark&default-tab=css,result\",\n      loading: \"lazy\",\n      allowTransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 565,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 41\n      }\n    }, \"See the Pen <a href=\", url, \">Pure CSS dark mode toggle switcher</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\");\n  }\n\n  function modalTrigger(img, id, title) {\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card\",\n      title: title,\n      style: {\n        backgroundImage: \"url(\".concat(img, \")\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 51\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"codepen1\",\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/pen/GRZbvym\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen2\",\n    title: \"Pure CSS pulsing button effect\",\n    url: \"https://codepen.io/ash_s_west/pen/RwRejrb\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 12\n    }\n  }, __jsx(\"div\", {\n    className: \"flex-gallery\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: iFrame,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }));\n  })));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiaUZyYW1lIiwidGl0bGUiLCJ1cmwiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibW9kYWxUcmlnZ2VyIiwiaW1nIiwiaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtb2RhbExpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBRWhDLFdBQVNDLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxHQUF4QixFQUE2QjtBQUFFLFdBQU87QUFDbEMsV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBRSxNQUFSO0FBQWdCQyxnQkFBUSxFQUFFLFFBQTFCO0FBQW9DQyxjQUFNLEVBQUU7QUFBNUMsT0FEMkI7QUFDMEIsZUFBUyxFQUFDLElBRHBDO0FBQ3lDLFdBQUssRUFBRUosS0FEaEQ7QUFFbEMsU0FBRyxFQUFFQyxHQUFHLEdBQUMsa0RBRnlCO0FBRTJCLGFBQU8sRUFBQyxNQUZuQztBQUUwQyx1QkFBaUIsRUFBQyxNQUY1RDtBQUVtRSxxQkFBZSxFQUFDLE1BRm5GO0FBRTBGLFlBQU0sRUFBRSxHQUZsRztBQUV1RyxpQkFBVyxFQUFDLElBRm5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBR1ZBLEdBSFUseUtBQVA7QUFNOUI7O0FBRUQsV0FBU0ksWUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJDLEVBQTVCLEVBQWdDUCxLQUFoQyxFQUF1QztBQUFFLFdBQU87QUFDNUMsZUFBUyxFQUFFTyxFQUFFLEdBQUMsa0JBRDhCO0FBRTVDLFdBQUssRUFBRVAsS0FGcUM7QUFHNUMsV0FBSyxFQUFFO0FBQUNRLHVCQUFlLGdCQUFTRixHQUFUO0FBQWhCLE9BSHFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUt4Qzs7QUFFRCxNQUFNRyxTQUFTLEdBQUcsQ0FDaEI7QUFBQ0YsTUFBRSxFQUFDLFVBQUo7QUFBZVAsU0FBSyxFQUFDLFFBQXJCO0FBQThCQyxPQUFHLEVBQUMsMkNBQWxDO0FBQThFSyxPQUFHLEVBQUM7QUFBbEYsR0FEZ0IsRUFFaEI7QUFBQ0MsTUFBRSxFQUFDLFVBQUo7QUFBZVAsU0FBSyxFQUFDLGdDQUFyQjtBQUFzREMsT0FBRyxFQUFDLDJDQUExRDtBQUFzR0ssT0FBRyxFQUFDO0FBQTFHLEdBRmdCLENBQWxCO0FBS0UsU0FBTztBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUDtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFR0csU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsV0FDYjtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFPLFVBQUksRUFBRUQsSUFBYjtBQUFtQixhQUFPLEVBQUVaLE1BQTVCO0FBQW9DLGFBQU8sRUFBRU0sWUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRGE7QUFBQSxHQUFkLENBRkgsQ0FGTyxDQUFQO0FBb0JIO0tBMUN1QlAsTyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvQ29kZVBlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vc21hbGxDb21wb25lbnRzL01vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVQZW4oKSB7XG5cbiAgZnVuY3Rpb24gaUZyYW1lICh0aXRsZSwgdXJsKSB7IHJldHVybiA8aWZyYW1lIFxuICAgICAgc3R5bGU9e3t3aWR0aDogJzcwdncnLCBtYXhXaWR0aDogJzEwMDBweCcsIGhlaWdodDogJzcwdmgnfX0gc2Nyb2xsaW5nPVwibm9cIiB0aXRsZT17dGl0bGV9IFxuICAgICAgc3JjPXt1cmwrXCI/aGVpZ2h0PTI2NSZ0aGVtZS1pZD1kYXJrJmRlZmF1bHQtdGFiPWNzcyxyZXN1bHRcIn0gbG9hZGluZz1cImxhenlcIiBhbGxvd1RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvd0Z1bGxTY3JlZW49XCJ0cnVlXCIgaGVpZ2h0PXs1NjV9IGZyYW1lQm9yZGVyPVwibm9cIj5cbiAgICAgIFNlZSB0aGUgUGVuICZsdDthIGhyZWY9e3VybH0mZ3Q7UHVyZSBDU1MgZGFyayBtb2RlIHRvZ2dsZSBzd2l0Y2hlciZsdDsvYSZndDsgYnkgQXNobGV5IFNhbGVlbS1XZXN0XG4gICAgICAoJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QnJmd0O0Bhc2hfc193ZXN0Jmx0Oy9hJmd0Oykgb24gJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvJyZndDtDb2RlUGVuJmx0Oy9hJmd0Oy5cbiAgICA8L2lmcmFtZT5cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlciAoaW1nLCBpZCwgdGl0bGUpIHsgcmV0dXJuIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17aWQrXCItY2FyZCBtb2RhbC1jYXJkXCJ9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2ltZ30pYH19XG4gICAgPjwvZGl2PlxuICB9XG5cbiAgY29uc3QgbW9kYWxMaXN0ID0gW1xuICAgIHtpZDpcImNvZGVwZW4xXCIsdGl0bGU6XCJzZWNvbmRcIix1cmw6XCJodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9wZW4vR1JaYnZ5bVwiLGltZzpcIi9zdGF0aWMvbWFpbnBhZ2UvY29kZXBlbi0xLnBuZ1wifSxcbiAgICB7aWQ6XCJjb2RlcGVuMlwiLHRpdGxlOlwiUHVyZSBDU1MgcHVsc2luZyBidXR0b24gZWZmZWN0XCIsdXJsOlwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL1J3UmVqcmJcIixpbWc6XCIvc3RhdGljL21haW5wYWdlL2NvZGVwZW4tMS5wbmdcIn0sXG4gIF1cblxuICAgIHJldHVybiA8ZGl2IGlkPVwiY29kZXBlbnNcIj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1nYWxsZXJ5XCI+XG5cbiAgICAgIHttb2RhbExpc3QubWFwKChpdGVtLGluZGV4KSA9PiBcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8TW9kYWwgaW5mbz17aXRlbX0gY29udGVudD17aUZyYW1lfSB0cmlnZ2VyPXttb2RhbFRyaWdnZXJ9Lz5cbiAgICAgICAgPC9kaXY+KVxuICAgICAgfVxuXG4gICAgPC9kaXY+XG5cblxuXG5cblxuXG4gICAgICB7LyogPHNjcmlwdCBkZWZlciBzcmM9XCIvc3RhdGljL3NjcmlwdHMvbW9kZWxJZnJhbWUuanNcIj48L3NjcmlwdD4gKi99XG5cbiAgICA8L2Rpdj5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})