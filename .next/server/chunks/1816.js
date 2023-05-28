"use strict";
exports.id = 1816;
exports.ids = [1816];
exports.modules = {

/***/ 6701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CO": () => (/* binding */ RentAmountText),
/* harmony export */   "CY": () => (/* binding */ SlashText),
/* harmony export */   "G7": () => (/* binding */ LoanAmountText),
/* harmony export */   "H$": () => (/* binding */ BuyingPriceText),
/* harmony export */   "I9": () => (/* binding */ LoanAmountBox),
/* harmony export */   "KN": () => (/* binding */ ProfitText),
/* harmony export */   "Kq": () => (/* binding */ ProfitBox),
/* harmony export */   "Mm": () => (/* binding */ LoanAmountRate),
/* harmony export */   "Nz": () => (/* binding */ TaxInput),
/* harmony export */   "QF": () => (/* binding */ MonthRentFeeText),
/* harmony export */   "Vf": () => (/* binding */ LoanCheckBox),
/* harmony export */   "X$": () => (/* binding */ LoanAmountInput),
/* harmony export */   "Yi": () => (/* binding */ EtcInput),
/* harmony export */   "Z$": () => (/* binding */ EtcPriceText),
/* harmony export */   "dg": () => (/* binding */ EtcPercentText),
/* harmony export */   "f2": () => (/* binding */ EtcPriceBox),
/* harmony export */   "hf": () => (/* binding */ TaxRate),
/* harmony export */   "ij": () => (/* binding */ RentInput),
/* harmony export */   "kF": () => (/* binding */ ProfitGlobal),
/* harmony export */   "kc": () => (/* binding */ LoanBox),
/* harmony export */   "kq": () => (/* binding */ InfoMsg),
/* harmony export */   "l4": () => (/* binding */ BuyingInput),
/* harmony export */   "mP": () => (/* binding */ BuyingPriceBox),
/* harmony export */   "nF": () => (/* binding */ IncludeLoanText),
/* harmony export */   "ps": () => (/* binding */ PercentText),
/* harmony export */   "qV": () => (/* binding */ DivLine),
/* harmony export */   "v8": () => (/* binding */ MonthRentFee),
/* harmony export */   "vU": () => (/* binding */ RentFeeBox),
/* harmony export */   "x1": () => (/* binding */ Line),
/* harmony export */   "zA": () => (/* binding */ CalcBtn)
/* harmony export */ });
/* unused harmony exports SubTabBox, WonText */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ProfitGlobal = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__ProfitGlobal",
  componentId: "sc-17amwsf-0"
})(["position:absolute;top:60px;width:1920px;height:930px;background-color:#ffffff;"]);
const ProfitText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__ProfitText",
  componentId: "sc-17amwsf-1"
})(["position:absolute;width:134px;height:30px;left:calc(50% - 134px / 2);top:68px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:24px;line-height:30px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#000000;"]);
const SubTabBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__SubTabBox",
  componentId: "sc-17amwsf-2"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;position:absolute;width:400px;height:51px;left:calc(50% - 400px / 2);top:156px;background:#ffffff;"]);
const ProfitBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__ProfitBox",
  componentId: "sc-17amwsf-3"
})(["box-sizing:border-box;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:14px;position:absolute;top:0px;left:0px;width:200px;height:51px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:18px;line-height:23px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;cursor:pointer;color:", ";border-bottom:", ";"], props => `${props.SubTab === 0 ? '#2A2828' : '#9D9999'}`, props => `${props.SubTab === 0 ? '2px solid #2A2828' : 'none'}`);
const LoanBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__LoanBox",
  componentId: "sc-17amwsf-4"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:14px;position:absolute;left:200px;width:200px;height:51px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:18px;line-height:23px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:", ";border-bottom:", ";cursor:pointer;"], props => `${props.SubTab === 1 ? '#2A2828' : '#9D9999'}`, props => `${props.SubTab === 1 ? '2px solid #2A2828' : 'none'}`);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__Line",
  componentId: "sc-17amwsf-5"
})(["position:absolute;width:1920px;border:1px solid #f0f0f0;top:198px;"]);
const InfoMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__InfoMsg",
  componentId: "sc-17amwsf-6"
})(["position:absolute;width:582px;height:22px;left:472px;top:245px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:400;font-size:16px;line-height:22px;letter-spacing:-0.03em;color:#9d9999;"]);
const LoanCheckBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "Profit__LoanCheckBox",
  componentId: "sc-17amwsf-7"
})(["appearance:none;height:16px;width:16px;border:1px solid #ccc;border-radius:3px;position:absolute;top:300px;left:470px;margin-top:5px;margin-right:10px;&:checked{&::before{content:'\\2713';display:block;height:16px;width:16px;background-color:#f16341;border-radius:3px;text-align:center;line-height:1rem;font-size:1rem;color:white;}}"]);
const IncludeLoanText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__IncludeLoanText",
  componentId: "sc-17amwsf-8"
})(["position:absolute;width:53px;height:18px;top:305px;left:500px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const BuyingPriceBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__BuyingPriceBox",
  componentId: "sc-17amwsf-9"
})(["display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:22px;position:absolute;width:678px;height:70px;left:472px;top:331px;"]);
const BuyingPriceText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__BuyingPriceText",
  componentId: "sc-17amwsf-10"
})(["position:absolute;width:38px;height:18px;left:0px;top:0px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const BuyingInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "Profit__BuyingInput",
  componentId: "sc-17amwsf-11"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;position:absolute;top:25px;width:291px;height:44px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;"]);
const WonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__WonText",
  componentId: "sc-17amwsf-12"
})(["font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:16px;line-height:20px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;position:absolute;left:300px;top:40px;color:#686564;"]);
const TaxRate = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__TaxRate",
  componentId: "sc-17amwsf-13"
})(["position:absolute;width:51px;height:18px;left:350px;top:0px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const TaxInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "Profit__TaxInput",
  componentId: "sc-17amwsf-14"
})(["box-sizing:border-box;position:absolute;left:350px;top:25px;display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;width:291px;height:44px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;"]);
const PercentText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__PercentText",
  componentId: "sc-17amwsf-15"
})(["position:absolute;left:650px;top:40px;width:29px;height:20px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:16px;line-height:20px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#686564;"]);
const EtcPriceBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__EtcPriceBox",
  componentId: "sc-17amwsf-16"
})(["position:absolute;width:328px;height:70px;left:472px;top:419px;"]);
const EtcPriceText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__EtcPriceText",
  componentId: "sc-17amwsf-17"
})(["position:absolute;width:205px;height:18px;left:0px;top:0px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const EtcInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "Profit__EtcInput",
  componentId: "sc-17amwsf-18"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;position:absolute;top:25px;width:291px;height:44px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;"]);
const EtcPercentText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(PercentText).withConfig({
  displayName: "Profit__EtcPercentText",
  componentId: "sc-17amwsf-19"
})(["position:absolute;top:40px;left:300px;"]);
const RentFeeBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__RentFeeBox",
  componentId: "sc-17amwsf-20"
})(["position:absolute;width:328px;height:70px;left:472px;top:507px;"]);
const RentAmountText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__RentAmountText",
  componentId: "sc-17amwsf-21"
})(["position:absolute;width:38px;height:18px;left:0px;top:0px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const RentInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "Profit__RentInput",
  componentId: "sc-17amwsf-22"
})(["display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;position:absolute;width:135px;height:44px;left:0px;top:25px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;"]);
const SlashText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__SlashText",
  componentId: "sc-17amwsf-23"
})(["position:absolute;top:35px;left:150px;width:5px;height:18px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#686564;"]);
const MonthRentFee = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "Profit__MonthRentFee",
  componentId: "sc-17amwsf-24"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;position:absolute;left:170px;top:25px;width:135px;height:44px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;"]);
const MonthRentFeeText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Profit__MonthRentFeeText",
  componentId: "sc-17amwsf-25"
})(["position:absolute;width:51px;height:18px;left:170px;top:0px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const DivLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__DivLine",
  componentId: "sc-17amwsf-26"
})(["position:absolute;width:976px;height:0px;left:0px;top:90px;border:1px solid #f0f0f0;"]);
const LoanAmountBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__LoanAmountBox",
  componentId: "sc-17amwsf-27"
})(["display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:22px;position:absolute;width:678px;height:70px;left:472px;top:613px;"]);
const LoanAmountText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Profit__LoanAmountText",
  componentId: "sc-17amwsf-28"
})(["position:absolute;width:51px;height:18px;left:0px;top:0px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const LoanAmountInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "Profit__LoanAmountInput",
  componentId: "sc-17amwsf-29"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;position:absolute;top:25px;width:291px;height:44px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;"]);
const LoanAmountRate = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
  displayName: "Profit__LoanAmountRate",
  componentId: "sc-17amwsf-30"
})(["box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:12px 0px 12px 14px;gap:10px;position:absolute;top:25px;left:350px;width:291px;height:44px;background:#ffffff;border:1px solid #d5d4d4;border-radius:5px;"]);
const CalcBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Profit__CalcBtn",
  componentId: "sc-17amwsf-31"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;position:absolute;width:976px;height:50px;left:calc(50% - 976px / 2);top:721px;background:#f16341;border-radius:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:15px;line-height:19px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#ffffff;"]);

/***/ }),

/***/ 1816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfitCal)
/* harmony export */ });
/* harmony import */ var _components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4650);
/* harmony import */ var _components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6701);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function ProfitCal({
  SubTab
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .InfoMsg */ .kq, {
      children: "\uB178\uD6C4 \uC2DC\uC124 \uC218\uB9AC\uBE44, \uAC10\uAC00\uC0C1\uAC01\uBE44 \uB4F1 \uAD00\uB828\uC0AC\uD56D\uC744 \uCDA9\uBD84\uD788 \uACE0\uB824\uD558\uC2E0 \uD6C4 \uC0B0\uC815\uD558\uC2DC\uB294 \uAC83\uC744 \uAD8C\uC7A5\uD569\uB2C8\uB2E4."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .LoanCheckBox */ .Vf, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .IncludeLoanText */ .nF, {
        children: "\uB300\uCD9C \uD3EC\uD568"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .BuyingPriceBox */ .mP, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .BuyingPriceText */ .H$, {
          children: "\uB9E4\uC785\uAC00"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .BuyingInput */ .l4, {
          placeholder: "1\uC5B5 2000"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .WonText */ .l1, {
          children: "\uB9CC\uC6D0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .TaxRate */ .hf, {
          children: "\uCDE8\uB4DD\uC138\uC728"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .TaxInput */ .Nz, {
          placeholder: "3.6"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .PercentText */ .ps, {
          children: "%"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .EtcPriceBox */ .f2, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .EtcPriceText */ .Z$, {
          children: "\uAE30\uD0C0\uBE44\uC6A9(\uC138\uBB34\uBE44\uC6A9, \uBD80\uB3D9\uC0B0\uC218\uC218\uB8CC \uB4F1)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .EtcInput */ .Yi, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .EtcPercentText */ .dg, {
          children: "%"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .RentFeeBox */ .vU, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .RentAmountText */ .CO, {
          children: "\uBCF4\uC99D\uAE08"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .RentInput */ .ij, {
          placeholder: "1\uC5B5 2000"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .SlashText */ .CY, {
          children: "/"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .MonthRentFeeText */ .QF, {
          children: "\uC6D4\uC784\uB300\uB8CC"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .MonthRentFee */ .v8, {
          placeholder: "500"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .WonText */ .l1, {
          style: {
            position: 'absolute',
            top: '40px',
            left: '315px'
          },
          children: "\uB9CC\uC6D0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .DivLine */ .qV, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .LoanAmountBox */ .I9, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .LoanAmountText */ .G7, {
          children: "\uB300\uCD9C\uAE08\uC561"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .WonText */ .l1, {
          children: "\uB9CC\uC6D0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .LoanAmountInput */ .X$, {
          placeholder: "1\uC5B5 2000"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .LoanAmountText */ .G7, {
          style: {
            left: '350px'
          },
          children: "\uB300\uCD9C\uAE08\uB9AC"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .LoanAmountRate */ .Mm, {
          placeholder: "3.6"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .PercentText */ .ps, {
          children: "%"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_myPage_Profit__WEBPACK_IMPORTED_MODULE_1__/* .CalcBtn */ .zA, {
        children: "\uC218\uC775\uB960 \uACC4\uC0B0\uD558\uAE30"
      })]
    })]
  });
}
;

/***/ })

};
;