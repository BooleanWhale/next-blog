webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function codePenShot(_ref) {\n    var title = _ref.title,\n        url = _ref.url,\n        id = _ref.id;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"modal-header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", {\n      href: \"https://codepen.io/ash_s_west\",\n      className: \"modal-icon-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      className: \"modal-icon\",\n      src: \"/static/mainpage/codepen/codepen_icon.svg\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }), __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"CODEPEN\")), __jsx(\"a\", {\n      href: url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"h4\", {\n      className: \"modal-title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, title)), __jsx(\"label\", {\n      htmlFor: id + \"-check\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      className: \"close-modal\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 36\n      }\n    }, \"x\"))), __jsx(\"iframe\", {\n      style: {\n        width: '70vw',\n        maxWidth: '1000px',\n        minHeight: '70vh'\n      },\n      scrolling: \"no\",\n      title: \"Button click pulsing effect - Pure CSS\",\n      src: \"https://codepen.io/ash_s_west/embed/\" + url + \"?height=265&theme-id=dark&default-tab=css,result\",\n      loading: \"lazy\",\n      allowtransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 265,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }\n    }, \"See the Pen <a href=\", \"https://codepen.io/ash_s_west/pen/\" + url, \">\", title, \"</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\"));\n  }\n\n  function modalTrigger(_ref2) {\n    var img = _ref2.img,\n        id = _ref2.id,\n        title = _ref2.title;\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(\".concat(img, \")\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 53\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"codepen1\",\n    title: \"Pure CSS pulsing button effect\",\n    url: \"GRZbvym\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen2\",\n    title: \"Pure CSS dark mode switch\",\n    url: \"RwRejrb\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen3\",\n    title: \"Pure CSS pulsing button effect\",\n    url: \"GRZbvym\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }, {\n    id: \"codepen4\",\n    title: \"Pure CSS dark mode switch\",\n    url: \"RwRejrb\",\n    img: \"/static/mainpage/codepen-1.png\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    className: \"center-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 10\n    }\n  }, __jsx(\"h3\", {\n    className: \"center works-subtitle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, \"CodePens\"), __jsx(\"div\", {\n    className: \"flex-gallery row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: codePenShot,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }));\n  })), __jsx(\"a\", {\n    className: \"button black-button\",\n    href: \"https://codepen.io/ash_s_west\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, \"See more on CodePen\"));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiY29kZVBlblNob3QiLCJ0aXRsZSIsInVybCIsImlkIiwid2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1vZGFsVHJpZ2dlciIsImltZyIsImJhY2tncm91bmRJbWFnZSIsIm1vZGFsTGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFFaEMsV0FBU0MsV0FBVCxPQUFzQztBQUFBLFFBQWZDLEtBQWUsUUFBZkEsS0FBZTtBQUFBLFFBQVRDLEdBQVMsUUFBVEEsR0FBUztBQUFBLFFBQUxDLEVBQUssUUFBTEEsRUFBSztBQUFFLFdBQU8sbUVBQzdDO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLCtCQUFSO0FBQXdDLGVBQVMsRUFBQyxpQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsU0FBRyxFQUFDLDJDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLENBREYsRUFNRTtBQUFHLFVBQUksRUFBRUQsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTZCRCxLQUE3QixDQURGLENBTkYsRUFVRTtBQUFPLGFBQU8sRUFBRUUsRUFBRSxHQUFDLFFBQW5CO0FBQUE7QUFBQTtB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L2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvQ29kZVBlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vc21hbGxDb21wb25lbnRzL01vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVQZW4oKSB7XG5cbiAgZnVuY3Rpb24gY29kZVBlblNob3QgKHt0aXRsZSx1cmwsaWR9KSB7IHJldHVybiA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3RcIiBjbGFzc05hbWU9XCJtb2RhbC1pY29uLWxpbmtcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtb2RhbC1pY29uXCIgc3JjPScvc3RhdGljL21haW5wYWdlL2NvZGVwZW4vY29kZXBlbl9pY29uLnN2ZycvPlxuICAgICAgICA8c3Bhbj5DT0RFUEVOPC9zcGFuPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPXt1cmx9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oND5cbiAgICAgIDwvYT5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkK1wiLWNoZWNrXCJ9PjxhIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+eDwvYT48L2xhYmVsPlxuICAgIDwvZGl2PlxuICBcbiAgICB7LyogPGlmcmFtZSBcbiAgICAgIHN0eWxlPXt7d2lkdGg6ICc3MHZ3JywgbWF4V2lkdGg6ICcxMDAwcHgnLCBoZWlnaHQ6ICc3MHZoJ319IHNjcm9sbGluZz1cIm5vXCIgdGl0bGU9e3RpdGxlfSBcbiAgICAgIHNyYz17dXJsK1wiP2hlaWdodD0yNjUmdGhlbWUtaWQ9ZGFyayZkZWZhdWx0LXRhYj1jc3MscmVzdWx0XCJ9IGxvYWRpbmc9XCJsYXp5XCIgYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dGdWxsU2NyZWVuPVwidHJ1ZVwiIGhlaWdodD17NTY1fSBmcmFtZUJvcmRlcj1cIm5vXCI+XG4gICAgICBTZWUgdGhlIFBlbiAmbHQ7YSBocmVmPXt1cmx9Jmd0O1B1cmUgQ1NTIGRhcmsgbW9kZSB0b2dnbGUgc3dpdGNoZXImbHQ7L2EmZ3Q7IGJ5IEFzaGxleSBTYWxlZW0tV2VzdFxuICAgICAgKCZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0JyZndDtAYXNoX3Nfd2VzdCZsdDsvYSZndDspIG9uICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pbycmZ3Q7Q29kZVBlbiZsdDsvYSZndDsuXG4gICAgPC9pZnJhbWU+ICovfVxuXG4gICAgPGlmcmFtZSBzdHlsZT17e3dpZHRoOiAnNzB2dycsIG1heFdpZHRoOiAnMTAwMHB4JywgbWluSGVpZ2h0OiAnNzB2aCd9fSBzY3JvbGxpbmc9XCJub1wiIHRpdGxlPVwiQnV0dG9uIGNsaWNrIHB1bHNpbmcgZWZmZWN0IC0gUHVyZSBDU1NcIiBcbiAgICAgICAgc3JjPXtcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L2VtYmVkL1wiK3VybCtcIj9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwifSBcbiAgICAgICAgbG9hZGluZz1cImxhenlcIiBhbGxvd3RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvd0Z1bGxTY3JlZW49XCJ0cnVlXCIgaGVpZ2h0PXsyNjV9IGZyYW1lQm9yZGVyPVwibm9cIj5cbiAgICAgICAgU2VlIHRoZSBQZW4gJmx0O2EgaHJlZj17XCJodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9wZW4vXCIrdXJsfSZndDt7dGl0bGV9Jmx0Oy9hJmd0OyBieSBBc2hsZXkgU2FsZWVtLVdlc3RcbiAgICAgICAgKCZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0JyZndDtAYXNoX3Nfd2VzdCZsdDsvYSZndDspIG9uICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pbycmZ3Q7Q29kZVBlbiZsdDsvYSZndDsuXG4gICAgPC9pZnJhbWU+XG4gIDwvPlxufVxuXG4gIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlciAoe2ltZywgaWQsIHRpdGxlfSkgeyByZXR1cm4gPGRpdlxuICAgICAgY2xhc3NOYW1lPXtpZCtcIi1jYXJkIG1vZGFsLWNhcmQgaG92ZXItZ3Jvd1wifVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWd9KWB9fVxuICAgID48L2Rpdj5cbiAgfVxuXG4gIGNvbnN0IG1vZGFsTGlzdCA9IFtcbiAgICB7aWQ6XCJjb2RlcGVuMVwiLHRpdGxlOlwiUHVyZSBDU1MgcHVsc2luZyBidXR0b24gZWZmZWN0XCIsdXJsOlwiR1JaYnZ5bVwiLGltZzpcIi9zdGF0aWMvbWFpbnBhZ2UvY29kZXBlbi0xLnBuZ1wifSxcbiAgICB7aWQ6XCJjb2RlcGVuMlwiLHRpdGxlOlwiUHVyZSBDU1MgZGFyayBtb2RlIHN3aXRjaFwiLHVybDpcIlJ3UmVqcmJcIixpbWc6XCIvc3RhdGljL21haW5wYWdlL2NvZGVwZW4tMS5wbmdcIn0sXG4gICAge2lkOlwiY29kZXBlbjNcIix0aXRsZTpcIlB1cmUgQ1NTIHB1bHNpbmcgYnV0dG9uIGVmZmVjdFwiLHVybDpcIkdSWmJ2eW1cIixpbWc6XCIvc3RhdGljL21haW5wYWdlL2NvZGVwZW4tMS5wbmdcIn0sXG4gICAge2lkOlwiY29kZXBlbjRcIix0aXRsZTpcIlB1cmUgQ1NTIGRhcmsgbW9kZSBzd2l0Y2hcIix1cmw6XCJSd1JlanJiXCIsaW1nOlwiL3N0YXRpYy9tYWlucGFnZS9jb2RlcGVuLTEucG5nXCJ9LFxuICBdXG5cbiAgcmV0dXJuIDxkaXYgaWQ9XCJjb2RlcGVuc1wiIGNsYXNzTmFtZT1cImNlbnRlci10ZXh0XCI+XG5cbiAgICA8aDMgY2xhc3NOYW1lPVwiY2VudGVyIHdvcmtzLXN1YnRpdGxlXCI+Q29kZVBlbnM8L2gzPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdhbGxlcnkgcm93XCI+XG5cbiAgICAgIHttb2RhbExpc3QubWFwKChpdGVtLGluZGV4KSA9PiBcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8TW9kYWwgaW5mbz17aXRlbX0gY29udGVudD17Y29kZVBlblNob3R9IHRyaWdnZXI9e21vZGFsVHJpZ2dlcn0vPlxuICAgICAgICA8L2Rpdj4pXG4gICAgICB9XG5cbiAgICA8L2Rpdj5cblxuICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBibGFjay1idXR0b25cIiBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3RcIj5TZWUgbW9yZSBvbiBDb2RlUGVuPC9hPlxuICAgIHsvKiA8c2NyaXB0IGRlZmVyIHNyYz1cIi9zdGF0aWMvc2NyaXB0cy9tb2RlbElmcmFtZS5qc1wiPjwvc2NyaXB0PiAqL31cblxuICA8L2Rpdj5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})