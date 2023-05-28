"use strict";
(() => {
var exports = {};
exports.id = 2390;
exports.ids = [2390,2902,8958,3202,3399,1584,3494,4846,4962,6587,1918,3844,4821,5192,6230,5340,2686,4188,907,4525];
exports.modules = {

/***/ 192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MTabBoardComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function MTabBoardComponent() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "ddaksldla"
  });
}

/***/ }),

/***/ 8655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Community)
});

// EXTERNAL MODULE: ./src/components/community/TabBox.tsx
var TabBox = __webpack_require__(1336);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/pages/Community/Contents/index.tsx + 1 modules
var Contents = __webpack_require__(1166);
// EXTERNAL MODULE: ./src/pages/Community/Board/index.tsx
var Board = __webpack_require__(7328);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/SelectBox.tsx

const SelectBox = external_styled_components_default().div.withConfig({
  displayName: "SelectBox",
  componentId: "sc-5jry8c-0"
})(["position:relative;width:120px;border-radius:12px;background-color:#ffffff;align-self:center;cursor:pointer;&::before{content:'\u2335';position:absolute;top:0px;right:8px;color:#333333;font-size:20px;}"]);
const Label = external_styled_components_default().label.withConfig({
  displayName: "SelectBox__Label",
  componentId: "sc-5jry8c-1"
})(["font-size:14px;margin-left:4px;text-align:center;"]);
const SelectOptions = external_styled_components_default().ul.withConfig({
  displayName: "SelectBox__SelectOptions",
  componentId: "sc-5jry8c-2"
})(["position:absolute;list-style:none;top:18px;left:0;width:100%;overflow:hidden;height:90px;padding:0;border-radius:8px;max-height:", ";z-index:99999;background-color:#f7f7f7;color:#333333;"], props => props.show ? 'none' : '0');
const Option = external_styled_components_default().li.withConfig({
  displayName: "SelectBox__Option",
  componentId: "sc-5jry8c-3"
})(["font-size:14px;padding:6px 8px;transition:background-color 0.2s ease-in;z-index:99999;&:hover{background-color:#ffffff;}"]);
// EXTERNAL MODULE: ./src/pages/Community/Contents/MTabContents.tsx
var MTabContents = __webpack_require__(8408);
// EXTERNAL MODULE: ./src/pages/Community/Board/MTabBoard.tsx
var MTabBoard = __webpack_require__(192);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Community/index.tsx










function Community() {
  const {
    0: tabClicked,
    1: setTabClicked
  } = (0,external_react_.useState)(0);
  const {
    0: currentValue,
    1: setCurrentValue
  } = (0,external_react_.useState)('공톡컨텐츠');
  const {
    0: showOptions,
    1: setShowOptions
  } = (0,external_react_.useState)(false);

  const handleOnChangeSelectValue = e => {
    const {
      innerText
    } = e.target;
    setCurrentValue(innerText);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TabBox/* TabBox */._D, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Contents["default"], {
        tabClicked: tabClicked,
        setTabClicked: setTabClicked
      }), /*#__PURE__*/jsx_runtime_.jsx(Board["default"], {
        tabClicked: tabClicked,
        setTabClicked: setTabClicked
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TabBox/* MTabBox */.LH, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TabBox/* MContents */.xt, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SelectBox, {
          onClick: () => setShowOptions(prev => !prev),
          children: [/*#__PURE__*/jsx_runtime_.jsx(Label, {
            children: currentValue
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SelectOptions, {
            show: showOptions,
            children: [/*#__PURE__*/jsx_runtime_.jsx(Option, {
              onClick: handleOnChangeSelectValue,
              children: "\uACF5\uD1A1\uCEE8\uD150\uCE20"
            }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
              onClick: handleOnChangeSelectValue,
              children: "\uCEE4\uBBA4\uB2C8\uD2F0"
            })]
          })]
        })
      }), currentValue == '공톡컨텐츠' ? /*#__PURE__*/jsx_runtime_.jsx(MTabContents["default"], {
        tabClicked: tabClicked,
        setTabClicked: setTabClicked
      }) : /*#__PURE__*/jsx_runtime_.jsx(MTabBoard["default"], {})]
    })]
  });
}

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [373,1597,5675,1664,9257,1336,6983,8557,7513,2868,9200,8312,3310,3807,9357,6447,9607,626,7328,1166,8408], () => (__webpack_exec__(8655)));
module.exports = __webpack_exports__;

})();