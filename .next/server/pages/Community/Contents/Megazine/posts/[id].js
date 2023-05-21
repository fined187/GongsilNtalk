"use strict";
(() => {
var exports = {};
exports.id = 3868;
exports.ids = [3868,3494,8910,4962,1918,3844,5192,4821];
exports.modules = {

/***/ 2984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_community_DetailContents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5249);
/* harmony import */ var _components_community_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7961);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_community_DetailText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7485);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5418);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const MegazineDetail = ({
  megazine
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  const handleGoBack = () => {
    router.back();
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_0__/* .DetailBox */ .td, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_Icon__WEBPACK_IMPORTED_MODULE_1__/* .BackArrow */ .D1, {
        onClick: handleGoBack,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          src: '/BackArrow.png',
          alt: "BackArrow",
          width: 9,
          height: 16
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_Icon__WEBPACK_IMPORTED_MODULE_1__/* .GongtalkBox */ .N7, {
        children: "\uACF5\uD1A1 \uB9E4\uAC70\uC9C4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_DetailText__WEBPACK_IMPORTED_MODULE_3__/* .TitleText */ .eN, {
        children: megazine.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_0__/* .UserInfoBox */ .ot, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_0__/* .DetailProBox */ .RA, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: '/ProPic.png',
            alt: "ProPic",
            width: 40,
            height: 40
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_DetailText__WEBPACK_IMPORTED_MODULE_3__/* .UserName */ .vx, {
          children: "\uACF5\uC2E4\uC564\uD1A1"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_DetailText__WEBPACK_IMPORTED_MODULE_3__/* .RegiDate */ .Vp, {
          children: moment__WEBPACK_IMPORTED_MODULE_4___default()(megazine.date).format('YYYY.MM.DD HH:mm')
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_0__/* .DetailLine */ .nS, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_0__/* .DetailContent */ .s7, {
        children: megazine.content
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_0__/* .ImgBox */ .tG, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_0__/* .EndLine */ .y9, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_community_DetailContents__WEBPACK_IMPORTED_MODULE_0__/* .Repl */ .wE, {
        placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574\uBCF4\uC138\uC694"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MegazineDetail);
const getStaticPaths = async () => {
  const megazines = (await __webpack_require__.e(/* import() */ 5723).then(__webpack_require__.t.bind(__webpack_require__, 5723, 19))).default;
  const paths = megazines.map(megazine => ({
    params: {
      id: megazine.id
    }
  }));
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const megazines = (await __webpack_require__.e(/* import() */ 5723).then(__webpack_require__.t.bind(__webpack_require__, 5723, 19))).default;
  const megazine = megazines.find(megazine => megazine.id === params?.id);
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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [1597,5675,89,5418], () => (__webpack_exec__(2984)));
module.exports = __webpack_exports__;

})();