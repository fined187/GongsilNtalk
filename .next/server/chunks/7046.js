"use strict";
exports.id = 7046;
exports.ids = [7046];
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
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Community/Contents/Youtube/index.tsx













function Youtube({
  post,
  yPosts,
  setCurrentPage
}) {
  const router = (0,router_.useRouter)();
  console.log(router.pathname);
  const {
    0: clickedOrder,
    1: setClickedOrder
  } = (0,external_react_.useState)(0);

  const handleClick = number => {
    setClickedOrder(number);
  };

  const {
    0: tabClicked,
    1: setTabClicked
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Notice["default"], {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentsBox/* ContentsBox */.Kh, {
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
  });
}

/***/ })

};
;