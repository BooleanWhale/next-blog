webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function codePenShot(_ref) {\n    var title = _ref.title,\n        url = _ref.url,\n        id = _ref.id;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"modal-header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", {\n      href: \"https://codepen.io/ash_s_west\",\n      className: \"modal-icon-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      className: \"modal-icon\",\n      src: \"/static/mainpage/codepen/codepen_icon.svg\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }), __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"CODEPEN\")), __jsx(\"a\", {\n      href: url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"h4\", {\n      className: \"modal-title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, title)), __jsx(\"label\", {\n      htmlFor: id + \"-check\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      className: \"close-modal\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 36\n      }\n    }, \"x\"))), __jsx(\"iframe\", {\n      style: {\n        width: '70vw',\n        maxWidth: '1000px',\n        minHeight: '70vh'\n      },\n      scrolling: \"no\",\n      title: \"Button click pulsing effect - Pure CSS\",\n      src: \"https://codepen.io/ash_s_west/embed/\" + url + \"?height=265&theme-id=dark&default-tab=css,result\",\n      loading: \"lazy\",\n      allowtransparency: value.toString(true),\n      allowFullScreen: true,\n      height: 265,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }\n    }, \"See the Pen <a href=\", \"https://codepen.io/ash_s_west/pen/\" + url, \">\", title, \"</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\"));\n  }\n\n  function modalTrigger(_ref2) {\n    var img = _ref2.img,\n        id = _ref2.id,\n        title = _ref2.title;\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(\".concat(img, \")\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 53\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"codepen1\",\n    title: \"Pure CSS pulsing button effect\",\n    url: \"GRZbvym\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen2\",\n    title: \"Pure CSS dark mode switch\",\n    url: \"RwRejrb\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen3\",\n    title: \"Pure CSS pulsing button effect\",\n    url: \"GRZbvym\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen4\",\n    title: \"Pure CSS dark mode switch\",\n    url: \"RwRejrb\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    className: \"center-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 10\n    }\n  }, __jsx(\"h3\", {\n    className: \"center works-subtitle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, \"CodePens\"), __jsx(\"div\", {\n    className: \"flex-gallery row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: codePenShot,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }));\n  })), __jsx(\"a\", {\n    className: \"button black-button\",\n    href: \"https://codepen.io/ash_s_west\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, \"See more on CodePen\"));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiY29kZVBlblNob3QiLCJ0aXRsZSIsInVybCIsImlkIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsInZhbHVlIiwidG9TdHJpbmciLCJtb2RhbFRyaWdnZXIiLCJpbWciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtb2RhbExpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBRWhDLFdBQVNDLFdBQVQsT0FBc0M7QUFBQSxRQUFmQyxLQUFlLFFBQWZBLEtBQWU7QUFBQSxRQUFUQyxHQUFTLFFBQVRBLEdBQVM7QUFBQSxRQUFMQyxFQUFLLFFBQUxBLEVBQUs7QUFBRSxXQUFPLG1FQUM3QztBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQywrQkFBUjtBQUF3QyxlQUFTLEVBQUMsaUJBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQTRCLFNBQUcsRUFBQywyQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixDQURGLEVBTUU7QUFBRyxVQUFJLEVBQUVELEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2QkQsS0FBN0IsQ0FERixDQU5GLEVBVUU7QUFBTyxhQUFPLEVBQUVFLEVBQUUsR0FBQyxRQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTZCO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE3QixDQVZGLENBRDZDLEVBcUI3QztBQUFRLFdBQUssRUFBRTtBQUFDQyxhQUFLLEVBQUUsTUFBUjtBQUFnQkMsZ0JBQVEsRUFBRSxRQUExQjtBQUFvQ0MsaUJBQVMsRUFBRTtBQUEvQyxPQUFmO0FBQXVFLGVBQVMsRUFBQyxJQUFqRjtBQUFzRixXQUFLLEVBQUMsd0NBQTVGO0FBQ0ksU0FBRyxFQUFFLHlDQUF1Q0osR0FBdkMsR0FBMkMsa0RBRHBEO0FBRUksYUFBTyxFQUFDLE1BRlo7QUFFbUIsdUJBQWlCLEVBQUVLLEtBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FGdEM7QUFFNEQscUJBQWUsRUFBRSxJQUY3RTtBQUVtRixZQUFNLEVBQUUsR0FGM0Y7QUFFZ0csaUJBQVcsRUFBQyxJQUY1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUc0Qix1Q0FBcUNOLEdBSGpFLE9BRzBFRCxLQUgxRSxzSUFyQjZDLENBQVA7QUE0QnpDOztBQUVDLFdBQVNRLFlBQVQsUUFBeUM7QUFBQSxRQUFqQkMsR0FBaUIsU0FBakJBLEdBQWlCO0FBQUEsUUFBWlAsRUFBWSxTQUFaQSxFQUFZO0FBQUEsUUFBUkYsS0FBUSxTQUFSQSxLQUFRO0FBQUUsV0FBTztBQUM5QyxlQUFTLEVBQUVFLEVBQUUsR0FBQyw2QkFEZ0M7QUFFOUMsV0FBSyxFQUFFRixLQUZ1QztBQUc5QyxXQUFLLEVBQUU7QUFBQ1UsdUJBQWUsZ0JBQVNELEdBQVQ7QUFBaEIsT0FIdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBSzFDOztBQUVELE1BQU1FLFNBQVMsR0FBRyxDQUNoQjtBQUFDVCxNQUFFLEVBQUMsVUFBSjtBQUFlRixTQUFLLEVBQUMsZ0NBQXJCO0FBQXNEQyxPQUFHLEVBQUMsU0FBMUQ7QUFBb0VRLE9BQUcsRUFBQztBQUF4RSxHQURnQixFQUVoQjtBQUFDUCxNQUFFLEVBQUMsVUFBSjtBQUFlRixTQUFLLEVBQUMsMkJBQXJCO0FBQWlEQyxPQUFHLEVBQUMsU0FBckQ7QUFBK0RRLE9BQUcsRUFBQztBQUFuRSxHQUZnQixFQUdoQjtBQUFDUCxNQUFFLEVBQUMsVUFBSjtBQUFlRixTQUFLLEVBQUMsZ0NBQXJCO0FBQXNEQyxPQUFHLEVBQUMsU0FBMUQ7QUFBb0VRLE9BQUcsRUFBQztBQUF4RSxHQUhnQixFQUloQjtBQUFDUCxNQUFFLEVBQUMsVUFBSjtBQUFlRixTQUFLLEVBQUMsMkJBQXJCO0FBQWlEQyxPQUFHLEVBQUMsU0FBckQ7QUFBK0RRLE9BQUcsRUFBQztBQUFuRSxHQUpnQixDQUFsQjtBQU9BLFNBQU87QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVBQUMsYUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVMO0FBQUksYUFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkssRUFJTDtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUdFLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQ2I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFBTyxVQUFJLEVBQUVELElBQWI7QUFBbUIsYUFBTyxFQUFFZCxXQUE1QjtBQUF5QyxhQUFPLEVBQUVTLFlBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURhO0FBQUEsR0FBZCxDQUZILENBSkssRUFjTDtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFtQyxRQUFJLEVBQUMsK0JBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZEssQ0FBUDtBQWtCRDtLQWhFdUJWLE8iLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL3NtYWxsQ29tcG9uZW50cy9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlUGVuKCkge1xuXG4gIGZ1bmN0aW9uIGNvZGVQZW5TaG90ICh7dGl0bGUsdXJsLGlkfSkgeyByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0XCIgY2xhc3NOYW1lPVwibW9kYWwtaWNvbi1saW5rXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9kYWwtaWNvblwiIHNyYz0nL3N0YXRpYy9tYWlucGFnZS9jb2RlcGVuL2NvZGVwZW5faWNvbi5zdmcnLz5cbiAgICAgICAgPHNwYW4+Q09ERVBFTjwvc3Bhbj5cbiAgICAgIDwvYT5cblxuICAgICAgPGEgaHJlZj17dXJsfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvaDQ+XG4gICAgICA8L2E+XG5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpZCtcIi1jaGVja1wifT48YSBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiPng8L2E+PC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgXG4gICAgey8qIDxpZnJhbWUgXG4gICAgICBzdHlsZT17e3dpZHRoOiAnNzB2dycsIG1heFdpZHRoOiAnMTAwMHB4JywgaGVpZ2h0OiAnNzB2aCd9fSBzY3JvbGxpbmc9XCJub1wiIHRpdGxlPXt0aXRsZX0gXG4gICAgICBzcmM9e3VybCtcIj9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwifSBsb2FkaW5nPVwibGF6eVwiIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZX0gYWxsb3dGdWxsU2NyZWVuPXt0cnVlfSBoZWlnaHQ9ezU2NX0gZnJhbWVCb3JkZXI9XCJub1wiPlxuICAgICAgU2VlIHRoZSBQZW4gJmx0O2EgaHJlZj17dXJsfSZndDtQdXJlIENTUyBkYXJrIG1vZGUgdG9nZ2xlIHN3aXRjaGVyJmx0Oy9hJmd0OyBieSBBc2hsZXkgU2FsZWVtLVdlc3RcbiAgICAgICgmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdCcmZ3Q7QGFzaF9zX3dlc3QmbHQ7L2EmZ3Q7KSBvbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8nJmd0O0NvZGVQZW4mbHQ7L2EmZ3Q7LlxuICAgIDwvaWZyYW1lPiAqL31cblxuICAgIDxpZnJhbWUgc3R5bGU9e3t3aWR0aDogJzcwdncnLCBtYXhXaWR0aDogJzEwMDBweCcsIG1pbkhlaWdodDogJzcwdmgnfX0gc2Nyb2xsaW5nPVwibm9cIiB0aXRsZT1cIkJ1dHRvbiBjbGljayBwdWxzaW5nIGVmZmVjdCAtIFB1cmUgQ1NTXCIgXG4gICAgICAgIHNyYz17XCJodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9lbWJlZC9cIit1cmwrXCI/aGVpZ2h0PTI2NSZ0aGVtZS1pZD1kYXJrJmRlZmF1bHQtdGFiPWNzcyxyZXN1bHRcIn0gXG4gICAgICAgIGxvYWRpbmc9XCJsYXp5XCIgYWxsb3d0cmFuc3BhcmVuY3k9e3ZhbHVlLnRvU3RyaW5nKHRydWUpfSBhbGxvd0Z1bGxTY3JlZW49e3RydWV9IGhlaWdodD17MjY1fSBmcmFtZUJvcmRlcj1cIm5vXCI+XG4gICAgICAgIFNlZSB0aGUgUGVuICZsdDthIGhyZWY9e1wiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL1wiK3VybH0mZ3Q7e3RpdGxlfSZsdDsvYSZndDsgYnkgQXNobGV5IFNhbGVlbS1XZXN0XG4gICAgICAgICgmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdCcmZ3Q7QGFzaF9zX3dlc3QmbHQ7L2EmZ3Q7KSBvbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8nJmd0O0NvZGVQZW4mbHQ7L2EmZ3Q7LlxuICAgIDwvaWZyYW1lPlxuICA8Lz5cbn1cblxuICBmdW5jdGlvbiBtb2RhbFRyaWdnZXIgKHtpbWcsIGlkLCB0aXRsZX0pIHsgcmV0dXJuIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17aWQrXCItY2FyZCBtb2RhbC1jYXJkIGhvdmVyLWdyb3dcIn1cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1nfSlgfX1cbiAgICA+PC9kaXY+XG4gIH1cblxuICBjb25zdCBtb2RhbExpc3QgPSBbXG4gICAge2lkOlwiY29kZXBlbjFcIix0aXRsZTpcIlB1cmUgQ1NTIHB1bHNpbmcgYnV0dG9uIGVmZmVjdFwiLHVybDpcIkdSWmJ2eW1cIixpbWc6XCIvc3RhdGljL21haW5wYWdlL2NvZGVwZW4tMS5wbmdcIn0sXG4gICAge2lkOlwiY29kZXBlbjJcIix0aXRsZTpcIlB1cmUgQ1NTIGRhcmsgbW9kZSBzd2l0Y2hcIix1cmw6XCJSd1JlanJiXCIsaW1nOlwiL3N0YXRpYy9tYWlucGFnZS9jb2RlcGVuLTEucG5nXCJ9LFxuICAgIHtpZDpcImNvZGVwZW4zXCIsdGl0bGU6XCJQdXJlIENTUyBwdWxzaW5nIGJ1dHRvbiBlZmZlY3RcIix1cmw6XCJHUlpidnltXCIsaW1nOlwiL3N0YXRpYy9tYWlucGFnZS9jb2RlcGVuLTEucG5nXCJ9LFxuICAgIHtpZDpcImNvZGVwZW40XCIsdGl0bGU6XCJQdXJlIENTUyBkYXJrIG1vZGUgc3dpdGNoXCIsdXJsOlwiUndSZWpyYlwiLGltZzpcIi9zdGF0aWMvbWFpbnBhZ2UvY29kZXBlbi0xLnBuZ1wifSxcbiAgXVxuXG4gIHJldHVybiA8ZGl2IGlkPVwiY29kZXBlbnNcIiBjbGFzc05hbWU9XCJjZW50ZXItdGV4dFwiPlxuXG4gICAgPGgzIGNsYXNzTmFtZT1cImNlbnRlciB3b3Jrcy1zdWJ0aXRsZVwiPkNvZGVQZW5zPC9oMz5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1nYWxsZXJ5IHJvd1wiPlxuXG4gICAgICB7bW9kYWxMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT4gXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgPE1vZGFsIGluZm89e2l0ZW19IGNvbnRlbnQ9e2NvZGVQZW5TaG90fSB0cmlnZ2VyPXttb2RhbFRyaWdnZXJ9Lz5cbiAgICAgICAgPC9kaXY+KVxuICAgICAgfVxuXG4gICAgPC9kaXY+XG5cbiAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gYmxhY2stYnV0dG9uXCIgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0XCI+U2VlIG1vcmUgb24gQ29kZVBlbjwvYT5cbiAgICB7LyogPHNjcmlwdCBkZWZlciBzcmM9XCIvc3RhdGljL3NjcmlwdHMvbW9kZWxJZnJhbWUuanNcIj48L3NjcmlwdD4gKi99XG5cbiAgPC9kaXY+XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})