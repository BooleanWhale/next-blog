webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  // function iFrame (props) { return <iframe \n  //     style={{width: '70vw', maxWidth: '1000px', height: '70vh'}} scrolling=\"no\" title={props.title} \n  //     src={props.url+\"?height=265&theme-id=dark&default-tab=css,result\"} loading=\"lazy\" allowTransparency=\"true\" allowFullScreen=\"true\" height={565} frameBorder=\"no\">\n  //     See the Pen &lt;a href={props.url}&gt;Pure CSS dark mode toggle switcher&lt;/a&gt; by Ashley Saleem-West\n  //     (&lt;a href='https://codepen.io/ash_s_west'&gt;@ash_s_west&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.\n  //   </iframe>\n  // }\n  function iFrame(_ref) {\n    var title = _ref.title,\n        url = _ref.url;\n    return __jsx(\"iframe\", {\n      style: {\n        width: '70vw',\n        maxWidth: '1000px',\n        height: '70vh'\n      },\n      scrolling: \"no\",\n      title: title,\n      src: url + \"?height=265&theme-id=dark&default-tab=css,result\",\n      loading: \"lazy\",\n      allowTransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 565,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 42\n      }\n    }, \"See the Pen <a href=\", url, \">Pure CSS dark mode toggle switcher</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\");\n  }\n\n  function modalTrigger(img, id, title) {\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(\".concat(img, \")\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 51\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"codepen1\",\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/pen/GRZbvym\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen2\",\n    title: \"Pure CSS pulsing button effect\",\n    url: \"https://codepen.io/ash_s_west/pen/RwRejrb\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen3\",\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/pen/GRZbvym\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen4\",\n    title: \"Pure CSS pulsing button effect\",\n    url: \"https://codepen.io/ash_s_west/pen/RwRejrb\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 12\n    }\n  }, __jsx(\"h3\", {\n    className: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, \"CodePens\"), __jsx(\"div\", {\n    className: \"flex-gallery row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: iFrame,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }\n    }));\n  })));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiaUZyYW1lIiwidGl0bGUiLCJ1cmwiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibW9kYWxUcmlnZ2VyIiwiaW1nIiwiaWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtb2RhbExpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsV0FBU0MsTUFBVCxPQUE4QjtBQUFBLFFBQVpDLEtBQVksUUFBWkEsS0FBWTtBQUFBLFFBQU5DLEdBQU0sUUFBTkEsR0FBTTtBQUFFLFdBQU87QUFDckMsV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBRSxNQUFSO0FBQWdCQyxnQkFBUSxFQUFFLFFBQTFCO0FBQW9DQyxjQUFNLEVBQUU7QUFBNUMsT0FEOEI7QUFDdUIsZUFBUyxFQUFDLElBRGpDO0FBQ3NDLFdBQUssRUFBRUosS0FEN0M7QUFFckMsU0FBRyxFQUFFQyxHQUFHLEdBQUMsa0RBRjRCO0FBRXdCLGFBQU8sRUFBQyxNQUZoQztBQUV1Qyx1QkFBaUIsRUFBQyxNQUZ6RDtBQUVnRSxxQkFBZSxFQUFDLE1BRmhGO0FBRXVGLFlBQU0sRUFBRSxHQUYvRjtBQUVvRyxpQkFBVyxFQUFDLElBRmhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBR2JBLEdBSGEseUtBQVA7QUFNakM7O0FBRUMsV0FBU0ksWUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJDLEVBQTVCLEVBQWdDUCxLQUFoQyxFQUF1QztBQUFFLFdBQU87QUFDNUMsZUFBUyxFQUFFTyxFQUFFLEdBQUMsNkJBRDhCO0FBRTVDLFdBQUssRUFBRVAsS0FGcUM7QUFHNUMsV0FBSyxFQUFFO0FBQUNRLHVCQUFlLGdCQUFTRixHQUFUO0FBQWhCLE9BSHFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUt4Qzs7QUFFRCxNQUFNRyxTQUFTLEdBQUcsQ0FDaEI7QUFBQ0YsTUFBRSxFQUFDLFVBQUo7QUFBZVAsU0FBSyxFQUFDLFFBQXJCO0FBQThCQyxPQUFHLEVBQUMsMkNBQWxDO0FBQThFSyxPQUFHLEVBQUM7QUFBbEYsR0FEZ0IsRUFFaEI7QUFBQ0MsTUFBRSxFQUFDLFVBQUo7QUFBZVAsU0FBSyxFQUFDLGdDQUFyQjtBQUFzREMsT0FBRyxFQUFDLDJDQUExRDtBQUFzR0ssT0FBRyxFQUFDO0FBQTFHLEdBRmdCLEVBR2hCO0FBQUNDLE1BQUUsRUFBQyxVQUFKO0FBQWVQLFNBQUssRUFBQyxRQUFyQjtBQUE4QkMsT0FBRyxFQUFDLDJDQUFsQztBQUE4RUssT0FBRyxFQUFDO0FBQWxGLEdBSGdCLEVBSWhCO0FBQUNDLE1BQUUsRUFBQyxVQUFKO0FBQWVQLFNBQUssRUFBQyxnQ0FBckI7QUFBc0RDLE9BQUcsRUFBQywyQ0FBMUQ7QUFBc0dLLE9BQUcsRUFBQztBQUExRyxHQUpnQixDQUFsQjtBQU9FLFNBQU87QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVA7QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZPLEVBSVA7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVHRyxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU1DLEtBQU47QUFBQSxXQUNiO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhEQUFEO0FBQU8sVUFBSSxFQUFFRCxJQUFiO0FBQW1CLGFBQU8sRUFBRVosTUFBNUI7QUFBb0MsYUFBTyxFQUFFTSxZQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEYTtBQUFBLEdBQWQsQ0FGSCxDQUpPLENBQVA7QUFzQkg7S0F0RHVCUCxPIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9ob21lUGFnZS9zZWN0aW9uQ29tcG9uZW50cy9Db2RlUGVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9zbWFsbENvbXBvbmVudHMvTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVBlbigpIHtcblxuICAvLyBmdW5jdGlvbiBpRnJhbWUgKHByb3BzKSB7IHJldHVybiA8aWZyYW1lIFxuICAvLyAgICAgc3R5bGU9e3t3aWR0aDogJzcwdncnLCBtYXhXaWR0aDogJzEwMDBweCcsIGhlaWdodDogJzcwdmgnfX0gc2Nyb2xsaW5nPVwibm9cIiB0aXRsZT17cHJvcHMudGl0bGV9IFxuICAvLyAgICAgc3JjPXtwcm9wcy51cmwrXCI/aGVpZ2h0PTI2NSZ0aGVtZS1pZD1kYXJrJmRlZmF1bHQtdGFiPWNzcyxyZXN1bHRcIn0gbG9hZGluZz1cImxhenlcIiBhbGxvd1RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvd0Z1bGxTY3JlZW49XCJ0cnVlXCIgaGVpZ2h0PXs1NjV9IGZyYW1lQm9yZGVyPVwibm9cIj5cbiAgLy8gICAgIFNlZSB0aGUgUGVuICZsdDthIGhyZWY9e3Byb3BzLnVybH0mZ3Q7UHVyZSBDU1MgZGFyayBtb2RlIHRvZ2dsZSBzd2l0Y2hlciZsdDsvYSZndDsgYnkgQXNobGV5IFNhbGVlbS1XZXN0XG4gIC8vICAgICAoJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QnJmd0O0Bhc2hfc193ZXN0Jmx0Oy9hJmd0Oykgb24gJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvJyZndDtDb2RlUGVuJmx0Oy9hJmd0Oy5cbiAgLy8gICA8L2lmcmFtZT5cbiAgLy8gfVxuXG4gIGZ1bmN0aW9uIGlGcmFtZSAoe3RpdGxlLHVybH0pIHsgcmV0dXJuIDxpZnJhbWUgXG4gICAgc3R5bGU9e3t3aWR0aDogJzcwdncnLCBtYXhXaWR0aDogJzEwMDBweCcsIGhlaWdodDogJzcwdmgnfX0gc2Nyb2xsaW5nPVwibm9cIiB0aXRsZT17dGl0bGV9IFxuICAgIHNyYz17dXJsK1wiP2hlaWdodD0yNjUmdGhlbWUtaWQ9ZGFyayZkZWZhdWx0LXRhYj1jc3MscmVzdWx0XCJ9IGxvYWRpbmc9XCJsYXp5XCIgYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dGdWxsU2NyZWVuPVwidHJ1ZVwiIGhlaWdodD17NTY1fSBmcmFtZUJvcmRlcj1cIm5vXCI+XG4gICAgU2VlIHRoZSBQZW4gJmx0O2EgaHJlZj17dXJsfSZndDtQdXJlIENTUyBkYXJrIG1vZGUgdG9nZ2xlIHN3aXRjaGVyJmx0Oy9hJmd0OyBieSBBc2hsZXkgU2FsZWVtLVdlc3RcbiAgICAoJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QnJmd0O0Bhc2hfc193ZXN0Jmx0Oy9hJmd0Oykgb24gJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvJyZndDtDb2RlUGVuJmx0Oy9hJmd0Oy5cbiAgPC9pZnJhbWU+XG59XG5cbiAgZnVuY3Rpb24gbW9kYWxUcmlnZ2VyIChpbWcsIGlkLCB0aXRsZSkgeyByZXR1cm4gPGRpdlxuICAgICAgY2xhc3NOYW1lPXtpZCtcIi1jYXJkIG1vZGFsLWNhcmQgaG92ZXItZ3Jvd1wifVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWd9KWB9fVxuICAgID48L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IG1vZGFsTGlzdCA9IFtcbiAgICB7aWQ6XCJjb2RlcGVuMVwiLHRpdGxlOlwic2Vjb25kXCIsdXJsOlwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL0dSWmJ2eW1cIixpbWc6XCIvc3RhdGljL21haW5wYWdlL2NvZGVwZW4tMS5wbmdcIn0sXG4gICAge2lkOlwiY29kZXBlbjJcIix0aXRsZTpcIlB1cmUgQ1NTIHB1bHNpbmcgYnV0dG9uIGVmZmVjdFwiLHVybDpcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L3Blbi9Sd1JlanJiXCIsaW1nOlwiL3N0YXRpYy9tYWlucGFnZS9jb2RlcGVuLTEucG5nXCJ9LFxuICAgIHtpZDpcImNvZGVwZW4zXCIsdGl0bGU6XCJzZWNvbmRcIix1cmw6XCJodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9wZW4vR1JaYnZ5bVwiLGltZzpcIi9zdGF0aWMvbWFpbnBhZ2UvY29kZXBlbi0xLnBuZ1wifSxcbiAgICB7aWQ6XCJjb2RlcGVuNFwiLHRpdGxlOlwiUHVyZSBDU1MgcHVsc2luZyBidXR0b24gZWZmZWN0XCIsdXJsOlwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL1J3UmVqcmJcIixpbWc6XCIvc3RhdGljL21haW5wYWdlL2NvZGVwZW4tMS5wbmdcIn0sXG4gIF1cblxuICAgIHJldHVybiA8ZGl2IGlkPVwiY29kZXBlbnNcIj5cblxuICAgIDxoMyBjbGFzc05hbWU9XCJjZW50ZXJcIj5Db2RlUGVuczwvaDM+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ2FsbGVyeSByb3dcIj5cblxuICAgICAge21vZGFsTGlzdC5tYXAoKGl0ZW0saW5kZXgpID0+IFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxNb2RhbCBpbmZvPXtpdGVtfSBjb250ZW50PXtpRnJhbWV9IHRyaWdnZXI9e21vZGFsVHJpZ2dlcn0vPlxuICAgICAgICA8L2Rpdj4pXG4gICAgICB9XG5cbiAgICA8L2Rpdj5cblxuXG5cblxuXG5cbiAgICAgIHsvKiA8c2NyaXB0IGRlZmVyIHNyYz1cIi9zdGF0aWMvc2NyaXB0cy9tb2RlbElmcmFtZS5qc1wiPjwvc2NyaXB0PiAqL31cblxuICAgIDwvZGl2PlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})