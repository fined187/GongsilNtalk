"use strict";
(() => {
var exports = {};
exports.id = 3913;
exports.ids = [3913];
exports.modules = {

/***/ 6222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ callAddress)
/* harmony export */ });
async function callAddress(req, res) {
  const address = (await __webpack_require__.e(/* import() */ 9082).then(__webpack_require__.t.bind(__webpack_require__, 9082, 19))).default;
  res.status(200).json(address);
  return address;
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6222));
module.exports = __webpack_exports__;

})();