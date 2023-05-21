"use strict";
exports.id = 1105;
exports.ids = [1105];
exports.modules = {

/***/ 6095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jg": () => (/* binding */ CheckBox),
/* harmony export */   "aU": () => (/* binding */ AgreeCheckBox),
/* harmony export */   "hY": () => (/* binding */ ACheckBox)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "Checkbox__CheckBox",
  componentId: "sc-114s159-0"
})(["appearance:none;height:16px;width:16px;border:1px solid #ccc;border-radius:3px;cursor:pointer;margin-right:1px;margin-left:1rem;margin-top:5px;position:absolute;top:251px;left:65px;right:482px;bottom:219px;&:checked{&::before{content:'\\2713';display:block;height:16px;width:16px;background-color:#f16341;border-radius:3px;text-align:center;line-height:1rem;font-size:1rem;color:white;}}"]);
const AgreeCheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "Checkbox__AgreeCheckBox",
  componentId: "sc-114s159-1"
})(["appearance:none;height:16px;width:16px;border:1px solid #ccc;border-radius:3px;cursor:pointer;margin-right:1px;margin-left:1rem;margin-top:5px;position:absolute;top:298px;left:65px;&:checked{&::before{content:'\\2713';display:block;height:16px;width:16px;background-color:#f16341;border-radius:3px;text-align:center;line-height:1rem;font-size:1rem;color:white;}}"]);
const ACheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.attrs(() => ({
  type: 'checkbox'
})).withConfig({
  displayName: "Checkbox__ACheckBox",
  componentId: "sc-114s159-2"
})(["appearance:none;width:16px;height:16px;display:flex;border:1px solid #ccc;border-radius:3px;cursor:pointer;&:checked{&::before{content:'\\2713';display:block;height:16px;width:16px;background-color:#f16341;border-radius:3px;text-align:center;line-height:1rem;font-size:1rem;color:white;}}"]);

/***/ }),

/***/ 1659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ SignUpForm),
/* harmony export */   "l": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "Form",
  componentId: "sc-iwl6tp-0"
})(["position:absolute;top:299px;left:671px;right:671px;bottom:295px;box-sizing:border-box;width:578px;height:488px;background-color:#ffffff;border:1px solid #f0f0f0;border-radius:10px;@media (max-width:768px){position:absolute;top:202px;left:20px;width:320px;box-sizing:border-box;width:578px;height:488px;background-color:#ffffff;border:1px solid #f0f0f0;border-radius:10px;}"]);
const SignUpForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Form).withConfig({
  displayName: "Form__SignUpForm",
  componentId: "sc-iwl6tp-1"
})(["height:", ";"], props => `${props.emailRegi ? '946px' : '488px'}`);

/***/ })

};
;