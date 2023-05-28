"use strict";
(() => {
var exports = {};
exports.id = 6947;
exports.ids = [6947,2902,8958,3399,1584,3494,4846,4962,6587,1918,3844,4821,5192,6230,5340,2686,4188,907,4525];
exports.modules = {

/***/ 9993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Megazine)
/* harmony export */ });
/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4201);
/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2832);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6983);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8613);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1336);
/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8557);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9257);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













function Megazine() {
  const {
    0: tabClicked,
    1: setTabClicked
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0);
  const {
    0: innerTab,
    1: setInnerTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(1);
  const {
    0: clickedOrder,
    1: setClickedOrder
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0);
  const {
    0: post,
    1: setPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  const {
    0: yPosts,
    1: setYposts
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_9__/* .Youtubes */ .Af);
  const {
    0: mPosts,
    1: setMposts
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_9__/* .community */ .bJ);
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(1);
  const {
    0: postPerPage,
    1: setPostPerPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(5);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = posts => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  /** API 생성시 수정 */


  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const fetchData = () => {
      if (innerTab === 0) {
        setPost(currentPosts(yPosts));
      } else {
        setPost(currentPosts(mPosts));
      }
    };

    fetchData();
  }, [currentPage, innerTab]);

  const handleClick = number => {
    setClickedOrder(number);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_6__/* .TabBox */ ._D, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_7__/* .GongtalkContentsText */ .Bf, {
        tabClicked: tabClicked,
        onClick: () => setTabClicked(0),
        children: "\uACF5\uD1A1 \uCEE8\uD150\uCE20"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: '/Community/Board/QnA',
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_7__/* .CommunityText */ .ZF, {
          tabClicked: tabClicked,
          onClick: () => setTabClicked(1),
          children: "\uCEE4\uBBA4\uB2C8\uD2F0"
        })
      }), tabClicked === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: '/Community/Contents/Youtube',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_6__/* .YoutubeTab */ .yy, {
            innerTab: innerTab,
            onClick: () => setInnerTab(0),
            children: "\uACF5\uD1A1 \uC720\uD29C\uBE0C"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_6__/* .MegazineTab */ .Dn, {
          innerTab: innerTab,
          onClick: () => setInnerTab(1),
          children: "\uACF5\uD1A1 \uB9E4\uAC70\uC9C4"
        })]
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Notice__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__/* .EmptyBox */ .cs, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .ContentsBox */ .Kh, {
      children: [post?.map((a, i) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .ProfileBox */ .PX, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: '/ProPic.png',
              alt: "ProPic",
              width: 30,
              height: 30,
              style: {
                marginBottom: '16px'
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .YUsername */ .Qp, {
              children: "\uACF5\uC2E4\uC564\uD1A1"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              src: '/YImage.png',
              alt: "YImage",
              width: 154,
              height: 108,
              style: {
                position: 'absolute',
                left: '600px',
                marginTop: '-20px'
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: `/Community/Contents/Megazine/posts/${a.id}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .Ytitle */ .j5, {
              children: a.title
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .YContents */ .fG, {
            children: a.content
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__/* .YFooter */ .Bj, {
            children: [a.date + ' ', " ", '추천 ' + a.reco + ' ', " ", '댓글 ' + a.repl]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__/* .Line */ .x1, {})]
        }, i);
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_Paging__WEBPACK_IMPORTED_MODULE_4__["default"], {
        totalPosts: mPosts?.length,
        paginate: setCurrentPage
      })]
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [373,1597,5675,1664,9257,1336,6983,8557,8613,4201], () => (__webpack_exec__(9993)));
module.exports = __webpack_exports__;

})();