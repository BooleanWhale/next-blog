webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smallComponents/Navigation */ \"./pages/components/smallComponents/Navigation.js\");\n/* harmony import */ var _svg_IconMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/IconMenu */ \"./pages/components/svg/IconMenu.jsx\");\n/* harmony import */ var _smallComponents_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smallComponents/DarkModeToggle */ \"./pages/components/smallComponents/DarkModeToggle.js\");\n/* harmony import */ var _svg_LogoIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/LogoIcon */ \"./pages/components/svg/LogoIcon.jsx\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      menuActive = _useState[0],\n      setMenuActive = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"header\", {\n    className: \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"/#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }\n  }, __jsx(_svg_LogoIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 30\n    }\n  })), __jsx(\"div\", {\n    className: \"menu-container \".concat(menuActive && 'active'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, __jsx(_smallComponents_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    className: \"nav-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(_smallComponents_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }), __jsx(\"div\", {\n    className: \"menu-icon\",\n    onClick: function onClick() {\n      return setMenuActive(!menuActive);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 21\n    }\n  }, __jsx(_svg_IconMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 25\n    }\n  })))), __jsx(\"div\", {\n    className: \"header-spacer dark-bg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  })); // not all browsers support position:sticky;\n} // import React, {useState} from 'react';\n// import Navigation from './Navigation.js'\n// import DarkModeButton from './smallComps/DarkModeButton.js'\n// export default function Header() {\n//     const [menuActive, setMenuActive] = useState(false);\n//     return <header className=\"mainHeader\">\n//         <div className=\"logo\">logo</div>\n//         <div className={`menu-container ${menuActive && 'active'}`}>\n//             <Navigation/>\n//             {/* <DarkModeButton/> */}\n//         </div>\n//         <i className=\"ionicons icon ion-ios-menu menu-icon\" onClick={()=> setMenuActive(!menuActive)}/>\n//     </header>\n//   }\n\n_s(Header, \"qXd1yfUBuWwj4A+xwewe8jtNaK4=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlci5qcz9iMDY5Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsS0FBRCxDQURmO0FBQUEsTUFDdEJDLFVBRHNCO0FBQUEsTUFDVkMsYUFEVTs7QUFHN0IsU0FDSSxtRUFDSTtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBRyxRQUFJLEVBQUMsSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWEsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWIsQ0FGSixFQUdJO0FBQUssYUFBUywyQkFBb0JELFVBQVUsSUFBSSxRQUFsQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUhKLEVBTUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQU8sRUFBRTtBQUFBLGFBQUtDLGFBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWxCO0FBQUEsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBRkosQ0FOSixDQURKLEVBZUk7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZKLENBREosQ0FINkIsQ0FxQjNCO0FBQ0wsQyxDQUtEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBNUN3QkYsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vc21hbGxDb21wb25lbnRzL05hdmlnYXRpb24nXG5pbXBvcnQgSGFtYnVyZ2VySWNvbiBmcm9tICcuL3N2Zy9JY29uTWVudSdcbmltcG9ydCBEYXJrTW9kZVRvZ2dsZSBmcm9tICcuL3NtYWxsQ29tcG9uZW50cy9EYXJrTW9kZVRvZ2dsZSc7XG5pbXBvcnQgTG9nb0ljb24gZnJvbSAnLi9zdmcvTG9nb0ljb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgY29uc3QgW21lbnVBY3RpdmUsIHNldE1lbnVBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cInNpdGUtbG9nb1wiIHNyYz0nL3N0YXRpYy9sb2dvLnBuZycvPiAqL31cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIj48TG9nb0ljb24vPjwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1lbnUtY29udGFpbmVyICR7bWVudUFjdGl2ZSAmJiAnYWN0aXZlJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxEYXJrTW9kZVRvZ2dsZS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1pY29uXCIgb25DbGljaz17KCk9PiBzZXRNZW51QWN0aXZlKCFtZW51QWN0aXZlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGFtYnVyZ2VySWNvbi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3BhY2VyIGRhcmstYmdcIj48L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKSAvLyBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgcG9zaXRpb246c3RpY2t5O1xufVxuXG5cblxuXG4vLyBpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uLmpzJ1xuLy8gaW1wb3J0IERhcmtNb2RlQnV0dG9uIGZyb20gJy4vc21hbGxDb21wcy9EYXJrTW9kZUJ1dHRvbi5qcydcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuLy8gICAgIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuLy8gICAgIHJldHVybiA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW5IZWFkZXJcIj5cblxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5sb2dvPC9kaXY+XG5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZW51LWNvbnRhaW5lciAke21lbnVBY3RpdmUgJiYgJ2FjdGl2ZSd9YH0+XG4vLyAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4vLyAgICAgICAgICAgICB7LyogPERhcmtNb2RlQnV0dG9uLz4gKi99XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8aSBjbGFzc05hbWU9XCJpb25pY29ucyBpY29uIGlvbi1pb3MtbWVudSBtZW51LWljb25cIiBvbkNsaWNrPXsoKT0+IHNldE1lbnVBY3RpdmUoIW1lbnVBY3RpdmUpfS8+XG4vLyAgICAgPC9oZWFkZXI+XG4vLyAgIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Header.js\n");

/***/ })

})