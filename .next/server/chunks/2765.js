"use strict";
exports.id = 2765;
exports.ids = [2765];
exports.modules = {

/***/ 2765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$J": () => (/* binding */ InfoMessage),
/* harmony export */   "B7": () => (/* binding */ SubTabBox),
/* harmony export */   "Fk": () => (/* binding */ AlarmText),
/* harmony export */   "MA": () => (/* binding */ NotCheckedAlarm),
/* harmony export */   "Sw": () => (/* binding */ ProductAlarmText),
/* harmony export */   "Vn": () => (/* binding */ TopBox),
/* harmony export */   "e8": () => (/* binding */ UnderLine),
/* harmony export */   "gy": () => (/* binding */ InfoMessageSub),
/* harmony export */   "lq": () => (/* binding */ ProductInfoAlarmText),
/* harmony export */   "oD": () => (/* binding */ GlobalBox),
/* harmony export */   "qk": () => (/* binding */ NotCheckedCnt)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Alarm__GlobalBox",
  componentId: "sc-1ms68v0-0"
})(["background-color:#ffffff;width:1920px;height:1200px;"]);
const AlarmText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Alarm__AlarmText",
  componentId: "sc-1ms68v0-1"
})(["position:absolute;width:44px;height:30px;left:calc(50% - 44px / 2);top:50px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:24px;line-height:30px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#000000;"]);
const SubTabBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Alarm__SubTabBox",
  componentId: "sc-1ms68v0-2"
})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px;position:absolute;width:400px;height:51px;left:calc(50% - 400px / 2);top:148px;background:#ffffff;z-index:99999;"]);
const TopBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Alarm__TopBox",
  componentId: "sc-1ms68v0-3"
})(["position:absolute;width:1920px;height:147px;left:0px;top:60px;background:#ffffff;border-bottom:1px solid #f0f0f0;"]);
const ProductAlarmText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Alarm__ProductAlarmText",
  componentId: "sc-1ms68v0-4"
})(["font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:18px;line-height:23px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:", ";position:absolute;top:-30px;left:50px;cursor:pointer;"], props => `${props.clickedTab === 0 ? '#2A2828' : '#9D9999'}`);
const UnderLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Alarm__UnderLine",
  componentId: "sc-1ms68v0-5"
})(["position:absolute;width:150px;height:1px;border:1px solid;color:black;top:-1px;left:", ";"], props => `${props.clickedTab === 0 ? '23px' : '250px'}`);
const ProductInfoAlarmText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Alarm__ProductInfoAlarmText",
  componentId: "sc-1ms68v0-6"
})(["position:absolute;left:275px;top:-30px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:18px;line-height:23px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:", ";cursor:pointer;"], props => `${props.clickedTab === 1 ? '#2A2828' : '#9D9999'}`);
const NotCheckedAlarm = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Alarm__NotCheckedAlarm",
  componentId: "sc-1ms68v0-7"
})(["position:absolute;top:245px;left:472px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
const NotCheckedCnt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Alarm__NotCheckedCnt",
  componentId: "sc-1ms68v0-8"
})(["color:#f16341;margin-left:5px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;"]);
const InfoMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Alarm__InfoMessage",
  componentId: "sc-1ms68v0-9"
})(["position:absolute;top:555px;left:890px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:16px;line-height:20px;text-align:center;letter-spacing:-0.03em;color:#2a2828;"]);
const InfoMessageSub = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Alarm__InfoMessageSub",
  componentId: "sc-1ms68v0-10"
})(["position:absolute;width:400px;height:20px;left:calc(50% - 400px / 2);top:581px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:20px;text-align:center;letter-spacing:-0.03em;color:#9d9999;"]);

/***/ })

};
;