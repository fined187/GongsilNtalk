"use strict";
(() => {
var exports = {};
exports.id = 27;
exports.ids = [27];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 7322:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallAddress": () => (/* binding */ CallAddress)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const pattern = "/^서울/";
const API_KEY = process.env.REST_API_KEY;
const baseURL = `https://dapi.kakao.com/`;
const headers = {
  'Content-Type': 'application/json'
};
const baseApiInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  baseURL,
  headers: {
    Authorization: 'KakaoAK 46ddd2a3fad8c2c88bdfef2b79483423'
  }
});
const CallAddress = async page => {
  try {
    const response = await baseApiInstance.get(`v2/local/search/address.json?query=${pattern}&page=${page}&size=10&analyze_type=similar`);
    return response.data;
  } catch (error) {
    console.log('ERROR: ', error);
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7322));
module.exports = __webpack_exports__;

})();