"use strict";
(() => {
var exports = {};
exports.id = 3868;
exports.ids = [3868,8910,4846,6587,1918,4821,5192];
exports.modules = {

/***/ 8624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_community_DetailContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1972);
/* harmony import */ var _components_community_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1424);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_community_DetailText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7955);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2322);







const MegazineDetail = ({ megazine  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_1__/* .DetailBox */ .td, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_Icon__WEBPACK_IMPORTED_MODULE_2__/* .BackArrow */ .D, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: "/BackArrow.png",
                        alt: "BackArrow",
                        width: 9,
                        height: 16
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_Icon__WEBPACK_IMPORTED_MODULE_2__/* .GongtalkBox */ .N, {
                    children: "공톡 매거진"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_DetailText__WEBPACK_IMPORTED_MODULE_4__/* .TitleText */ .eN, {
                    children: megazine.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_1__/* .UserInfoBox */ .ot, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_1__/* .DetailProBox */ .RA, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: "/ProPic.png",
                                alt: "ProPic",
                                width: 40,
                                height: 40
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_DetailText__WEBPACK_IMPORTED_MODULE_4__/* .UserName */ .vx, {
                            children: "공실앤톡"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_DetailText__WEBPACK_IMPORTED_MODULE_4__/* .RegiDate */ .Vp, {
                            children: moment__WEBPACK_IMPORTED_MODULE_5___default()(megazine.date).format("YYYY.MM.DD HH:mm")
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_1__/* .DetailLine */ .nS, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_1__/* .DetailContent */ .s7, {
                    children: megazine.content
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_1__/* .ImgBox */ .tG, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_1__/* .EndLine */ .y9, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_1__/* .Repl */ .wE, {
                    placeholder: "댓글을 입력해보세요"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegazineDetail);
const getStaticPaths = async ()=>{
    const megazines = (await __webpack_require__.e(/* import() */ 5723).then(__webpack_require__.t.bind(__webpack_require__, 5723, 19))).default;
    const paths = megazines.map((megazine)=>({
            params: {
                id: megazine.id
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const megazines = (await __webpack_require__.e(/* import() */ 5723).then(__webpack_require__.t.bind(__webpack_require__, 5723, 19))).default;
    const megazine = megazines.find((megazine)=>megazine.id === params?.id);
    return {
        props: {
            megazine
        }
    };
};


/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4508:
/***/ ((module) => {

module.exports = require("react-responsive-carousel");

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
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2636,5675,4178,2322], () => (__webpack_exec__(8624)));
module.exports = __webpack_exports__;

})();