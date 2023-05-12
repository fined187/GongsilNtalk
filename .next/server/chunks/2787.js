"use strict";
exports.id = 2787;
exports.ids = [2787];
exports.modules = {

/***/ 4912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bh": () => (/* binding */ RegiPInput),
/* harmony export */   "C$": () => (/* binding */ AuthNameInput),
/* harmony export */   "S_": () => (/* binding */ RegiPInputConfirm),
/* harmony export */   "V9": () => (/* binding */ PInput),
/* harmony export */   "fT": () => (/* binding */ EInput),
/* harmony export */   "qW": () => (/* binding */ AuthPhoneSMS),
/* harmony export */   "rY": () => (/* binding */ RegiEInput),
/* harmony export */   "zR": () => (/* binding */ AuthPhoneNum)
/* harmony export */ });
/* unused harmony export Input */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input.withConfig({
    componentId: "sc-f3e84d1e-0"
})`
  position: absolute;
  left: 80px;
  right: 80px;
  bottom: 296px;

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 70px 12px 14px;
  gap: 10px;

  width: 418px;
  height: 44px;

  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  flex: none;
  order: 0;
  flex-grow: 0;

  :focus {
    outline: 1px;
    outline-color: #f16341;
    outline-style: solid;
  }
`;
const EInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Input).withConfig({
    componentId: "sc-f3e84d1e-1"
})`
  top: 146px;
`;
const PInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Input).withConfig({
    componentId: "sc-f3e84d1e-2"
})`
  top: 196px;
`;
const RegiEInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Input).withConfig({
    componentId: "sc-f3e84d1e-3"
})`
  top: 88px;
`;
const RegiPInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Input).withConfig({
    componentId: "sc-f3e84d1e-4"
})`
  top: 180px;
`;
const RegiPInputConfirm = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Input).withConfig({
    componentId: "sc-f3e84d1e-5"
})`
  top: 230px;
`;
const AuthNameInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Input).withConfig({
    componentId: "sc-f3e84d1e-6"
})`
  top: 172px;
  left: 80px;
`;
const AuthPhoneNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Input).withConfig({
    componentId: "sc-f3e84d1e-7"
})`
  top: 260px;
  left: 80px;
  width: 298px;
  height: 44px;
`;
const AuthPhoneSMS = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(AuthPhoneNum).withConfig({
    componentId: "sc-f3e84d1e-8"
})`
  top: 310px;
`;


/***/ }),

/***/ 1799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KE": () => (/* binding */ AuthPhone),
/* harmony export */   "VS": () => (/* binding */ AuthName),
/* harmony export */   "__": () => (/* binding */ Label),
/* harmony export */   "gk": () => (/* binding */ PassLabel),
/* harmony export */   "l9": () => (/* binding */ EmailLabel),
/* harmony export */   "oT": () => (/* binding */ SignUpLabel),
/* harmony export */   "rk": () => (/* binding */ DetailAgree),
/* harmony export */   "u5": () => (/* binding */ AllAgree)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-e8bc3d52-0"
})`
  position: absolute;
  top: 80px;
  bottom: 378px;
  left: 218px;
  right: 217px;
  width: 209px;
  height: 28px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  font-size: 22px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
`;
const SignUpLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Label).withConfig({
    componentId: "sc-e8bc3d52-1"
})`
  left: 184px;
  width: 210px;
`;
const EmailLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-e8bc3d52-2"
})`
  position: absolute;
  left: 79px;
  top: 66px;
  width: 38px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #666666;
`;
const PassLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(EmailLabel).withConfig({
    componentId: "sc-e8bc3d52-3"
})`
  top: 154px;
  width: 50px;
`;
const AllAgree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-e8bc3d52-4"
})`
  position: absolute;
  top: 302px;
  left: 101px;

  width: 94px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #000000;
`;
const DetailAgree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-e8bc3d52-5"
})`
  position: absolute;
  left: 42px;
  width: 217px;
  height: 16px;
  cursor: pointer;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #666666;
`;
const AuthName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-e8bc3d52-6"
})`
  position: absolute;
  top: 146px;
  left: 80px;

  width: 26px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #666666;
`;
const AuthPhone = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(AuthName).withConfig({
    componentId: "sc-e8bc3d52-7"
})`
  top: 234px;
  left: 80px;
  bottom: 274px;
  right: 447px;

  width: 51px;
`;


/***/ }),

/***/ 2120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EU": () => (/* binding */ NextBtn),
/* harmony export */   "KY": () => (/* binding */ AuthSend),
/* harmony export */   "NN": () => (/* binding */ ConfirmSend),
/* harmony export */   "zO": () => (/* binding */ AuthConfirm),
/* harmony export */   "zx": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-90fbae78-0"
})`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  display: flex;

  width: 418px;
  height: 54px;
  left: 80px;
  top: 296px;
  bottom: 136px;
  right: 80px;

  background-color: #f16341;
  border-radius: 5px;
  color: #ffffff;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;
const NextBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-90fbae78-1"
})`
  position: absolute;
  top: 512px;
  left: 79px;

  width: 418px;
  height: 54px;

  background-color: #f16341;
  color: #ffffff;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;
`;
const AuthSend = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-90fbae78-2"
})`
  position: absolute;
  top: 260px;
  left: 384px;
  right: 80px;
  bottom: 222px;
  height: 44px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 4px;

  background-color: #f16341;
  border-radius: 5px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;
`;
const AuthConfirm = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(AuthSend).withConfig({
    componentId: "sc-90fbae78-3"
})`
  top: 310px;
  height: 44px;
  background-color: ${(props)=>`${props.authCode ? "#D5D5D5" : "#F16341"}`};
`;
const ConfirmSend = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
    componentId: "sc-90fbae78-4"
})`
  position: absolute;
  top: 392px;
  left: 80px;
  right: 80px;
  bottom: 80px;

  width: 418px;
  height: 54px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  background-color: #f16341;
  border-radius: 5px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #ffffff;
`;


/***/ })

};
;