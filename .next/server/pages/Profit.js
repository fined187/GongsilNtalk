"use strict";
(() => {
var exports = {};
exports.id = 3527;
exports.ids = [3527,1918,4821,5192,5340,2686,8292,4525];
exports.modules = {

/***/ 9485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoanCal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function LoanCal() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}

/***/ }),

/***/ 2367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profit)
/* harmony export */ });
/* harmony import */ var _components_alarm_Alarm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2765);
/* harmony import */ var _components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6701);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProfitCal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1816);
/* harmony import */ var _LoanCal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9485);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








function Profit() {
  const {
    0: SubTab,
    1: setSubTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .ProfitGlobal */ .kF, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .ProfitText */ .KN, {
        children: "\uC218\uC775\uB960 \uACC4\uC0B0\uAE30"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_alarm_Alarm__WEBPACK_IMPORTED_MODULE_0__/* .SubTabBox */ .B7, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .ProfitBox */ .Kq, {
          SubTab: SubTab,
          onClick: () => setSubTab(0),
          children: "\uC218\uC775\uB960 \uACC4\uC0B0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .LoanBox */ .kc, {
          SubTab: SubTab,
          onClick: () => setSubTab(1),
          children: "\uB300\uCD9C\uC774\uC790 \uACC4\uC0B0"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .Line */ .x1, {}), SubTab === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ProfitCal__WEBPACK_IMPORTED_MODULE_3__["default"], {
        SubTab: SubTab
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_LoanCal__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
    })
  });
}

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4650,2765,1816], () => (__webpack_exec__(2367)));
module.exports = __webpack_exports__;

})();