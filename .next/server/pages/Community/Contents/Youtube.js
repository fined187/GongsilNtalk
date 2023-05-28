"use strict";
(() => {
var exports = {};
exports.id = 662;
exports.ids = [662,2902,8958,3399,1584,3494,4846,4962,6587,1918,3844,4821,5192,6230,5340,2686,4188,907,4525];
exports.modules = {

/***/ 7046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Youtube)
});

// EXTERNAL MODULE: ./src/components/community/NoticeBox.tsx
var NoticeBox = __webpack_require__(2832);
// EXTERNAL MODULE: ./src/components/community/ContentsBox.tsx
var ContentsBox = __webpack_require__(4201);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/pages/Community/Paging.tsx + 1 modules
var Paging = __webpack_require__(8613);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/OrderBy.tsx

const OrderBox = external_styled_components_default().div.withConfig({
  displayName: "OrderBy__OrderBox",
  componentId: "sc-xz34y5-0"
})(["position:absolute;top:15px;left:550px;width:200px;height:20px;display:flex;flex-direction:row;cursor:pointer;"]);
const Updated = external_styled_components_default().div.withConfig({
  displayName: "OrderBy__Updated",
  componentId: "sc-xz34y5-1"
})(["position:absolute;left:60px;width:38px;height:18px;cursor:pointer;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:", ";"], props => `${props.clickedOrder ? '#666666' : '#BFBFBF'}`);
const Recommend = external_styled_components_default().div.withConfig({
  displayName: "OrderBy__Recommend",
  componentId: "sc-xz34y5-2"
})(["position:absolute;left:110px;width:38px;height:18px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:", ";cursor:pointer;"], props => `${props.clickedOrder ? '#666666' : '#BFBFBF'}`);
const Repl = external_styled_components_default().div.withConfig({
  displayName: "OrderBy__Repl",
  componentId: "sc-xz34y5-3"
})(["position:absolute;left:160px;width:38px;height:18px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;display:flex;align-items:center;letter-spacing:-0.03em;color:", ";cursor:pointer;"], props => `${props.clickedOrder ? '#666666' : '#BFBFBF'}`);
const ClickedOrder = external_styled_components_default().div.withConfig({
  displayName: "OrderBy__ClickedOrder",
  componentId: "sc-xz34y5-4"
})(["position:absolute;top:5px;left:-10px;width:5px;height:5px;background-color:", ";border-radius:150px;flex:none;order:0;flex-grow:0;"], props => `${props.clickedOrder ? '#F16341' : '#FFFFFF'}`);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/community/TabSpan.tsx
var TabSpan = __webpack_require__(8557);
// EXTERNAL MODULE: ./src/pages/Community/Notice.tsx + 1 modules
var Notice = __webpack_require__(6983);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/community/TabBox.tsx
var TabBox = __webpack_require__(1336);
// EXTERNAL MODULE: ./src/pages/Community/Board/index.tsx
var Board = __webpack_require__(7328);
// EXTERNAL MODULE: ./NoticeDummy.tsx
var NoticeDummy = __webpack_require__(9257);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Community/Contents/Youtube/index.tsx















function Youtube() {
  const {
    0: tabClicked,
    1: setTabClicked
  } = (0,external_react_.useState)(0);
  const {
    0: innerTab,
    1: setInnerTab
  } = (0,external_react_.useState)(0);
  const {
    0: clickedOrder,
    1: setClickedOrder
  } = (0,external_react_.useState)(0);
  const {
    0: post,
    1: setPost
  } = (0,external_react_.useState)([]);
  const {
    0: yPosts,
    1: setYposts
  } = (0,external_react_.useState)(NoticeDummy/* Youtubes */.Af);
  const {
    0: mPosts,
    1: setMposts
  } = (0,external_react_.useState)(NoticeDummy/* community */.bJ);
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)(1);
  const {
    0: postPerPage,
    1: setPostPerPage
  } = (0,external_react_.useState)(5);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = posts => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  /** API 생성시 수정 */


  (0,external_react_.useEffect)(() => {
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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TabBox/* TabBox */._D, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TabSpan/* GongtalkContentsText */.Bf, {
        tabClicked: tabClicked,
        onClick: () => setTabClicked(0),
        children: "\uACF5\uD1A1 \uCEE8\uD150\uCE20"
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: '/Community/Board/QnA',
        children: /*#__PURE__*/jsx_runtime_.jsx(TabSpan/* CommunityText */.ZF, {
          tabClicked: tabClicked,
          onClick: () => setTabClicked(1),
          children: "\uCEE4\uBBA4\uB2C8\uD2F0"
        })
      }), tabClicked === 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(TabBox/* YoutubeTab */.yy, {
          innerTab: innerTab,
          onClick: () => setInnerTab(0),
          children: "\uACF5\uD1A1 \uC720\uD29C\uBE0C"
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: '/Community/Contents/Megazine',
          children: /*#__PURE__*/jsx_runtime_.jsx(TabBox/* MegazineTab */.Dn, {
            innerTab: innerTab,
            onClick: () => setInnerTab(1),
            children: "\uACF5\uD1A1 \uB9E4\uAC70\uC9C4"
          })
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Board["default"], {
          tabClicked: tabClicked,
          setTabClicked: setTabClicked
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Notice["default"], {})]
    }), tabClicked === 0 && innerTab === 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentsBox/* ContentsBox */.Kh, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(OrderBox, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Updated, {
            clickedOrder: clickedOrder === 0,
            onClick: () => {
              handleClick(0);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(ClickedOrder, {
              clickedOrder: clickedOrder === 0,
              onClick: () => {
                handleClick(0);
              }
            }), "\uCD5C\uC2E0\uC21C"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Recommend, {
            clickedOrder: clickedOrder === 1,
            onClick: () => {
              handleClick(1);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(ClickedOrder, {
              clickedOrder: clickedOrder === 1,
              onClick: () => {
                handleClick(1);
              }
            }), "\uCD94\uCC9C\uC21C"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Repl, {
            clickedOrder: clickedOrder === 2,
            onClick: () => {
              handleClick(2);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(ClickedOrder, {
              clickedOrder: clickedOrder === 2,
              onClick: () => {
                handleClick(2);
              }
            }), "\uB313\uAE00\uC21C"]
          })]
        }), post?.map((a, i) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentsBox/* ProfileBox */.PX, {
              children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                src: '/ProPic.png',
                alt: "ProPic",
                width: 30,
                height: 30,
                style: {
                  marginBottom: '16px'
                }
              }), /*#__PURE__*/jsx_runtime_.jsx(ContentsBox/* YUsername */.Qp, {
                children: "\uACF5\uC2E4\uC564\uD1A1"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
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
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((link_default()), {
              href: `/Community/Contents/Youtube/posts/${a.id}`,
              children: [/*#__PURE__*/jsx_runtime_.jsx(ContentsBox/* Ytitle */.j5, {
                children: a.title
              }), /*#__PURE__*/jsx_runtime_.jsx(ContentsBox/* YContents */.fG, {
                children: a.contents
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentsBox/* YFooter */.Bj, {
                children: [a.date + ' ', " ", '추천 ' + a.reco + ' ', " ", '댓글 ' + a.repl]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(NoticeBox/* Line */.x1, {})]
          }, i);
        }), /*#__PURE__*/jsx_runtime_.jsx(Paging["default"], {
          totalPosts: yPosts?.length,
          paginate: setCurrentPage
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ContentsBox/* MovingBox */.pS, {
        children: /*#__PURE__*/jsx_runtime_.jsx(TabSpan/* MovingSpan */.MB, {
          children: "\uACF5\uD1A1 \uC720\uD29C\uBE0C \uCD94\uCC9C\uAE00"
        })
      })]
    }) : null]
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
var __webpack_exports__ = __webpack_require__.X(0, [373,1597,5675,1664,9257,1336,6983,8557,7513,2868,9200,8312,3310,3807,8613,7328,4201], () => (__webpack_exec__(7046)));
module.exports = __webpack_exports__;

})();