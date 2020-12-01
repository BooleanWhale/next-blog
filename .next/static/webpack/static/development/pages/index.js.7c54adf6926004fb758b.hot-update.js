webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function iFrame(info) {\n    return __jsx(\"iframe\", {\n      style: {\n        width: '70vw',\n        maxWidth: '1000px',\n        height: '70vh'\n      },\n      scrolling: \"no\",\n      title: info[title],\n      src: info.url + \"?height=265&theme-id=dark&default-tab=css,result\",\n      loading: \"lazy\",\n      allowTransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 565,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 35\n      }\n    }, \"See the Pen <a href=\", info.url, \">Pure CSS dark mode toggle switcher</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\");\n  }\n\n  function modalTrigger(img, id, title) {\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(\".concat(img, \")\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 51\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"codepen1\",\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/pen/GRZbvym\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen2\",\n    title: \"Pure CSS pulsing button effect\",\n    url: \"https://codepen.io/ash_s_west/pen/RwRejrb\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen3\",\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/pen/GRZbvym\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen4\",\n    title: \"Pure CSS pulsing button effect\",\n    url: \"https://codepen.io/ash_s_west/pen/RwRejrb\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 12\n    }\n  }, __jsx(\"h3\", {\n    className: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, \"CodePens\"), __jsx(\"div\", {\n    className: \"flex-gallery row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: iFrame,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }\n    }));\n  })));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiaUZyYW1lIiwiaW5mbyIsIndpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJ0aXRsZSIsInVybCIsIm1vZGFsVHJpZ2dlciIsImltZyIsImlkIiwiYmFja2dyb3VuZEltYWdlIiwibW9kYWxMaXN0IiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUVoQyxXQUFTQyxNQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUFFLFdBQU87QUFDNUIsV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBRSxNQUFSO0FBQWdCQyxnQkFBUSxFQUFFLFFBQTFCO0FBQW9DQyxjQUFNLEVBQUU7QUFBNUMsT0FEcUI7QUFDZ0MsZUFBUyxFQUFDLElBRDFDO0FBQytDLFdBQUssRUFBRUgsSUFBSSxDQUFDSSxLQUFELENBRDFEO0FBRTVCLFNBQUcsRUFBRUosSUFBSSxDQUFDSyxHQUFMLEdBQVMsa0RBRmM7QUFFc0MsYUFBTyxFQUFDLE1BRjlDO0FBRXFELHVCQUFpQixFQUFDLE1BRnZFO0FBRThFLHFCQUFlLEVBQUMsTUFGOUY7QUFFcUcsWUFBTSxFQUFFLEdBRjdHO0FBRWtILGlCQUFXLEVBQUMsSUFGOUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFHSkwsSUFBSSxDQUFDSyxHQUhELHlLQUFQO0FBTXhCOztBQUVELFdBQVNDLFlBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxFQUE1QixFQUFnQ0osS0FBaEMsRUFBdUM7QUFBRSxXQUFPO0FBQzVDLGVBQVMsRUFBRUksRUFBRSxHQUFDLDZCQUQ4QjtBQUU1QyxXQUFLLEVBQUVKLEtBRnFDO0FBRzVDLFdBQUssRUFBRTtBQUFDSyx1QkFBZSxnQkFBU0YsR0FBVDtBQUFoQixPQUhxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFLeEM7O0FBRUQsTUFBTUcsU0FBUyxHQUFHLENBQ2hCO0FBQUNGLE1BQUUsRUFBQyxVQUFKO0FBQWVKLFNBQUssRUFBQyxRQUFyQjtBQUE4QkMsT0FBRyxFQUFDLDJDQUFsQztBQUE4RUUsT0FBRyxFQUFDO0FBQWxGLEdBRGdCLEVBRWhCO0FBQUNDLE1BQUUsRUFBQyxVQUFKO0FBQWVKLFNBQUssRUFBQyxnQ0FBckI7QUFBc0RDLE9BQUcsRUFBQywyQ0FBMUQ7QUFBc0dFLE9BQUcsRUFBQztBQUExRyxHQUZnQixFQUdoQjtBQUFDQyxNQUFFLEVBQUMsVUFBSjtBQUFlSixTQUFLLEVBQUMsUUFBckI7QUFBOEJDLE9BQUcsRUFBQywyQ0FBbEM7QUFBOEVFLE9BQUcsRUFBQztBQUFsRixHQUhnQixFQUloQjtBQUFDQyxNQUFFLEVBQUMsVUFBSjtBQUFlSixTQUFLLEVBQUMsZ0NBQXJCO0FBQXNEQyxPQUFHLEVBQUMsMkNBQTFEO0FBQXNHRSxPQUFHLEVBQUM7QUFBMUcsR0FKZ0IsQ0FBbEI7QUFPRSxTQUFPO0FBQUssTUFBRSxFQUFDLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVQO0FBQUksYUFBUyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGTyxFQUlQO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFR0csU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsV0FDYjtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFPLFVBQUksRUFBRUQsSUFBYjtBQUFtQixhQUFPLEVBQUViLE1BQTVCO0FBQW9DLGFBQU8sRUFBRU8sWUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRGE7QUFBQSxHQUFkLENBRkgsQ0FKTyxDQUFQO0FBc0JIO0tBOUN1QlIsTyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvQ29kZVBlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vc21hbGxDb21wb25lbnRzL01vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVQZW4oKSB7XG5cbiAgZnVuY3Rpb24gaUZyYW1lIChpbmZvKSB7IHJldHVybiA8aWZyYW1lIFxuICAgICAgc3R5bGU9e3t3aWR0aDogJzcwdncnLCBtYXhXaWR0aDogJzEwMDBweCcsIGhlaWdodDogJzcwdmgnfX0gc2Nyb2xsaW5nPVwibm9cIiB0aXRsZT17aW5mb1t0aXRsZV19IFxuICAgICAgc3JjPXtpbmZvLnVybCtcIj9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwifSBsb2FkaW5nPVwibGF6eVwiIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIiBoZWlnaHQ9ezU2NX0gZnJhbWVCb3JkZXI9XCJub1wiPlxuICAgICAgU2VlIHRoZSBQZW4gJmx0O2EgaHJlZj17aW5mby51cmx9Jmd0O1B1cmUgQ1NTIGRhcmsgbW9kZSB0b2dnbGUgc3dpdGNoZXImbHQ7L2EmZ3Q7IGJ5IEFzaGxleSBTYWxlZW0tV2VzdFxuICAgICAgKCZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0JyZndDtAYXNoX3Nfd2VzdCZsdDsvYSZndDspIG9uICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pbycmZ3Q7Q29kZVBlbiZsdDsvYSZndDsuXG4gICAgPC9pZnJhbWU+XG4gIH1cblxuICBmdW5jdGlvbiBtb2RhbFRyaWdnZXIgKGltZywgaWQsIHRpdGxlKSB7IHJldHVybiA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2lkK1wiLWNhcmQgbW9kYWwtY2FyZCBob3Zlci1ncm93XCJ9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2ltZ30pYH19XG4gICAgPjwvZGl2PlxuICB9XG5cbiAgY29uc3QgbW9kYWxMaXN0ID0gW1xuICAgIHtpZDpcImNvZGVwZW4xXCIsdGl0bGU6XCJzZWNvbmRcIix1cmw6XCJodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9wZW4vR1JaYnZ5bVwiLGltZzpcIi9zdGF0aWMvbWFpbnBhZ2UvY29kZXBlbi0xLnBuZ1wifSxcbiAgICB7aWQ6XCJjb2RlcGVuMlwiLHRpdGxlOlwiUHVyZSBDU1MgcHVsc2luZyBidXR0b24gZWZmZWN0XCIsdXJsOlwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL1J3UmVqcmJcIixpbWc6XCIvc3RhdGljL21haW5wYWdlL2NvZGVwZW4tMS5wbmdcIn0sXG4gICAge2lkOlwiY29kZXBlbjNcIix0aXRsZTpcInNlY29uZFwiLHVybDpcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L3Blbi9HUlpidnltXCIsaW1nOlwiL3N0YXRpYy9tYWlucGFnZS9jb2RlcGVuLTEucG5nXCJ9LFxuICAgIHtpZDpcImNvZGVwZW40XCIsdGl0bGU6XCJQdXJlIENTUyBwdWxzaW5nIGJ1dHRvbiBlZmZlY3RcIix1cmw6XCJodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9wZW4vUndSZWpyYlwiLGltZzpcIi9zdGF0aWMvbWFpbnBhZ2UvY29kZXBlbi0xLnBuZ1wifSxcbiAgXVxuXG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJjb2RlcGVuc1wiPlxuXG4gICAgPGgzIGNsYXNzTmFtZT1cImNlbnRlclwiPkNvZGVQZW5zPC9oMz5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1nYWxsZXJ5IHJvd1wiPlxuXG4gICAgICB7bW9kYWxMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT4gXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgPE1vZGFsIGluZm89e2l0ZW19IGNvbnRlbnQ9e2lGcmFtZX0gdHJpZ2dlcj17bW9kYWxUcmlnZ2VyfS8+XG4gICAgICAgIDwvZGl2PilcbiAgICAgIH1cblxuICAgIDwvZGl2PlxuXG5cblxuXG5cblxuICAgICAgey8qIDxzY3JpcHQgZGVmZXIgc3JjPVwiL3N0YXRpYy9zY3JpcHRzL21vZGVsSWZyYW1lLmpzXCI+PC9zY3JpcHQ+ICovfVxuXG4gICAgPC9kaXY+XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})