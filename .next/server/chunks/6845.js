"use strict";
exports.id = 6845;
exports.ids = [6845];
exports.modules = {

/***/ 6845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Paging)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/myBoard/Paging.tsx

const LeftArrowBox = external_styled_components_default().div.withConfig({
  displayName: "Paging__LeftArrowBox",
  componentId: "sc-1u0zfcb-0"
})(["position:absolute;top:-2px;left:-100px;width:30px;height:30px;cursor:pointer;"]);
const PagingUl = external_styled_components_default().div.withConfig({
  displayName: "Paging__PagingUl",
  componentId: "sc-1u0zfcb-1"
})(["position:absolute;flex-direction:row;align-items:flex-start;padding:0px;gap:22px;width:133px;height:22px;left:calc(50% - 133px / 2);top:1030px;"]);
const RightArrowBox = external_styled_components_default().div.withConfig({
  displayName: "Paging__RightArrowBox",
  componentId: "sc-1u0zfcb-2"
})(["position:absolute;top:-2px;left:130px;width:30px;height:30px;cursor:pointer;"]);
const PageLi = external_styled_components_default().li.withConfig({
  displayName: "Paging__PageLi",
  componentId: "sc-1u0zfcb-3"
})(["display:inline-block;align-items:flex-start;padding:0px;gap:22px;left:100px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:16px;line-height:22px;letter-spacing:-0.03em;color:#9b9b9b;"]);
const PageSpan = external_styled_components_default().button.withConfig({
  displayName: "Paging__PageSpan",
  componentId: "sc-1u0zfcb-4"
})(["width:25px;border-radius:5px;cursor:pointer;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:", ";font-size:16px;line-height:22px;letter-spacing:-0.03em;color:", ";"], props => `${props.activeBtn ? 700 : 500}`, props => `${props.activeBtn ? '#000000' : '#9B9B9B'}`);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/MyBoard/Paging.tsx






function Paging({
  totalPosts,
  paginate
}) {
  const {
    0: activeBtn,
    1: setActiveBtn
  } = (0,external_react_.useState)(1);
  const pageNumbers = [];

  const handleClick = number => {
    setActiveBtn(number);
  };

  for (let i = 1; i <= Math.ceil(totalPosts / 10); i++) {
    pageNumbers.push(i);
  }

  const handleLeftArrow = () => {
    if (activeBtn === 1) {
      setActiveBtn(activeBtn);
      paginate(activeBtn);
    } else {
      setActiveBtn(activeBtn - 1);
      paginate(activeBtn - 1);
    }
  };

  const handleRightArrow = () => {
    if (activeBtn === pageNumbers.length) {
      setActiveBtn(activeBtn);
      paginate(activeBtn);
    } else {
      setActiveBtn(activeBtn + 1);
      paginate(activeBtn + 1);
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PagingUl, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LeftArrowBox, {
          onClick: () => {
            handleLeftArrow();
          },
          children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
            src: '/LeftArrow.png',
            alt: "LeftArrow",
            width: 30,
            height: 30
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(RightArrowBox, {
          onClick: () => {
            handleRightArrow();
          },
          children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
            src: '/RightArrow.png',
            alt: "RightArrow",
            width: 30,
            height: 30
          })
        }), pageNumbers?.map(number => /*#__PURE__*/jsx_runtime_.jsx(PageLi, {
          children: /*#__PURE__*/jsx_runtime_.jsx(PageSpan, {
            activeBtn: activeBtn === number,
            onClick: () => {
              paginate(number);
              handleClick(number);
            },
            children: number
          })
        }, number))]
      })
    })
  });
}

/***/ })

};
;